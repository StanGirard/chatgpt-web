// useOpenAI.js
import {  useSelector } from 'react-redux';
import { Configuration, OpenAIApi } from 'openai';
import { setApiKey } from '../../features/Header/HeaderSlice';

const useOpenAI = () => {
  const apiKey = useSelector((state) => state.header.apiKey);

  
  const createOpenaiInstance = () => {
    const configuration = new Configuration({
      apiKey,
    });

    return new OpenAIApi(configuration);
  };


  const createChatCompletion = async (model, messages, onResponse) => {
    if (!apiKey) {
      alert('Please set your API key first.');
      return null;
    }

    const openai = createOpenaiInstance();

    const url = `https://api.openai.com/v1/chat/completions`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${openai.configuration.apiKey}`);

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ model, messages, stream: true }),
    };
    console.log(requestOptions)

    try {
        const response = await fetch(url, requestOptions);
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }

            buffer += decoder.decode(value, { stream: true });
            const payloads = buffer.split('\n\n');
            buffer = payloads.pop();

            for (const payload of payloads) {
                if (payload.includes('[DONE]')) return;
                if (payload.startsWith('data:')) {
                    const data = payload.replace(/(\n)?^data:\s*/g, '');
                    try {
                        const delta = JSON.parse(data.trim());
                        onResponse(delta.choices && delta.choices.length > 0 && delta.choices[0].delta ? delta.choices[0].delta.content : null);
                    } catch (error) {
                        console.log(`Error with JSON.parse and ${payload}`, error.message, error);
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error calling the OpenAI API:', error, error.message);
    }
  };

  const initAPI = () => {
    const apiKey = localStorage.getItem('apiKey');
    if (apiKey) {
      setApiKey(apiKey);
    }
  };

  return {
    createChatCompletion,
    initAPI,
  };
};

export default useOpenAI;