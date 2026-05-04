import React,{ useEffect, useRef, useState } from 'react'
import Title from '../components/Title';
import { BsSearch } from 'react-icons/bs';
export default function HiddenSearchBarApp() {
  const [uiProps, setUiProps] = useState({
    bg: '#80e0f1',
    shadow: '',
    transitions: 'all .3s ease',
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: '#fff'
    });

  let bsSearchStyle ={
    color: '#aaa',
    fontSize: 50,
    cursor: 'pointer',
    position: 'absolute',
    top: 20,
    right: 20
  }

  const showSearch = () => {
    setUiProps({
      showSearchIcon: false
    })
  }

  let inputStyle = {
    margin: '10vh 25vw',
    width: '20vh',
    height: '30px',
    padding: '1rem .3rem',
    border: 'none',
    outline: 'none',
    // background: 'transparent',
    borderBottom: `1px solid ${uiProps.borderBottomColor}`,
    fontSize: '1.3rem',
    color: '#080808',
    boxShadow: '0px 55px 60px -15px rgba(0,0,0,.75)',
    opacity: uiProps.opacity,
    transition: 'all .3s ease'
  }
  
  const handleSearchFocus = (e) => {
    setUiProps({
      shadow: 'inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)',
      borderBottomColor: 'green'
    })  
  }

  const handleSearchBlur = (e) => {
    setUiProps({
      shadow: 'none',
      opacity: 0,
      borderBottomColor: '#fff',
      showSearchIcon: true
    })
  }


  let body = (document.body.style);

  useEffect(() => {
    body.background = uiProps.bg;
    body.boxShadow = uiProps.shadow;
    body.transition = uiProps.transitions;
    uiProps.showSearchBar && inputEl.current.focus();
    }, [uiProps.shadow], [uiProps.showSearchBar]);

  const inputEl = useRef(null);

  return (
    <div>
      <Title text={'Hidden Search Bar App'} classes={"text-center title-main"}/>
      <div className="container" style={{height: '80vh' }}>
        { uiProps.showSearchIcon 
          ? 
          <BsSearch style={bsSearchStyle} onClick={showSearch} />
          :
          <input type="text" 
            placeholder='Search...' 
            className='search-input'
            style={inputStyle} 
            onFocus={handleSearchFocus} 
            onBlur={handleSearchBlur} 
            ref={inputEl} />
        }
      </div>
    </div>
  )
}
