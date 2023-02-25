import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='home-header'>
        <div id='header-logo'>
            <h1>Project Management</h1>
        </div>
        <div id='header-navigation'>
            <p>Hello, User Fullname!</p>
            <button id='settings-button' className='circle-button'>Click</button>
        </div>
    </header>
  )
}

export default Header