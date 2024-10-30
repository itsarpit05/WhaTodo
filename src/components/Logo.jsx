import React from 'react';
import logoImage from '../assets/logo.png'// Adjust the path if it's in a different folder

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logoImage} alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
