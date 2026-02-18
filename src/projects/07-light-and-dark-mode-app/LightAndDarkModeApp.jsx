import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { ThemeContext, themes } from './context/theme-context';

export default function LightAndDarkModeApp() {

    const [theme, setTheme] = useState(themes.light);

    function changeTheme(){
        setTheme(theme === themes.dark
            ? themes.light 
            : themes.dark);
    }

    useEffect(() => {
        let body = document.body;

        switch(theme){
            case themes.dark:
                body.classList.remove('bg-light', 'text-dark');
                body.classList.add('bg-dark', 'text-light');
                break;
            case themes.light:
                body.classList.remove('bg-dark', 'text-light');
                body.classList.add('bg-light', 'text-dark');
                break;
             default:
                 break;
        }
    }, [theme]);

  return (
    <div className='container text-center mt-5'>
        <ThemeContext.Provider value={{theme, changeTheme}} > 
            <Blog theme={theme} />
        </ThemeContext.Provider>
    </div>
  )
}
