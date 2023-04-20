// src/components/Header.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setApiKey} from "./HeaderSlice"

function Header() {
  const apiKey = useSelector((state) => state.header.apiKey);
  const dispatch = useDispatch();

   
  return (
    <div id="header">
      <div>
        <label htmlFor="model-select">Select Model:</label>
        <select id="model-select">
          <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
          <option value="gpt-4">GPT 4</option>
          <option value="gpt-4-32k">GPT 4 32k context</option>
        </select>
      </div>
      <div>
        <label htmlFor="api-key-input">API Key:</label>
        <input
        id="api-key-input"
        type="password"
        placeholder="Enter your OpenAI API key..."
        value={apiKey}
        onChange={(e) => dispatch(setApiKey(e.target.value))}
        
      />
      <button id="api-key-submit" className="button-green" onClick={() => dispatch(setApiKey(document.getElementById("api-key-input").value))}>
        Set API Key
      </button>
      </div>
    </div>
  );
}

export default Header;
