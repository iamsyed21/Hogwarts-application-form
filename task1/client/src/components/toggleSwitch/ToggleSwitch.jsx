import { toggleTheme } from '@/context/theme/themeActions.js';
import { useTheme } from '@/hooks/useTheme.js';
import React, { useState, useEffect } from 'react';



const ToggleSwitch = () => {
    const { state, dispatch } = useTheme();
    const [isChecked, setIsChecked] = useState(state.theme === 'dark');

  
  const handleToggle = () => {
    toggleTheme(dispatch);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(state.theme === 'dark');
  }, [state.theme]);

  return (
    <div className='for-toggle-switch'>
  <div className="bodyforswitch">
      <div className={`toggle-switch ${isChecked ? 'checked' : ''}`}>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <div className="round-button">
          <div></div>
          <div></div>
          <div></div>
          <div className="button-body"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ToggleSwitch;
