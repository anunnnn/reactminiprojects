import React, { useContext } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { ThemeContext } from './context/theme-context';

export default function Blog() {
    const {theme, changeTheme} = useContext(ThemeContext);

  return (
    <div className='container text-center'>
      <Title text={`My Blog with ${theme} Mode`} />
      <span 
        style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
        }}>
        <Button 
            text={theme ==='dark' ? 'Light Mode' : 'Dark Mode'} 
            btnClass={`btn-sm ${(theme === 'dark' && 'btn-light') || 'btn-dark'}`}
            onClick={changeTheme} />
        </span>

      <p>This is a sample blog post. The current theme is light or dark mode.
        You can toggle between light and dark mode using the button above.
        This is a great way to improve readability and reduce eye strain, especially in low-light conditions.
        Enjoy reading!
      </p>
    </div>
  );
};


