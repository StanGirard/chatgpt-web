import React, { useState } from 'react';


function RightContainer() {
  const [activeTab, setActiveTab] = useState('premade-prompts');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="right-container-prompt">
      <div id="prompt-heading">Prompts</div>
      <div className="tab">
        <button
          className={`tablinks${activeTab === 'premade-prompts' ? ' active' : ''}`}
          onClick={() => openTab('premade-prompts')}
        >
          Premade
        </button>
        <button
          className={`tablinks${activeTab === 'custom-prompts' ? ' active' : ''}`}
          onClick={() => openTab('custom-prompts')}
        >
          Custom
        </button>
      </div>

    </div>
  );
}

export default RightContainer;
