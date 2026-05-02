import React, { useState, useEffect } from 'react';
import LockSlider from './LockSlider';
import { AiFillUnlock } from 'react-icons/ai';

import LockScreenImg from './images/road.jpg';
import HomeScreenImg from './images/beach.jpg';
import Title from '../components/Title';

export default function SlideToUnlockApp() {

  const [uiProps, setUiProps] = useState({
    uiText:'Unlock screen',
    uiColor: '#eee',
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`
  });

  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
  }
  
  useEffect(() => {
    if(lockSliderValue == 100 ){
      setShowLockSlider(false);
      setUiProps({
        uiText:'Unlocked Screen',
        uiColor: '#eee',
        uiBg: `url(${HomeScreenImg}) center/cover no-repeat`
      })
    }
  }, [lockSliderValue]);


  return (
    <div className="container">
      <Title text={'Slide to Unlock App'} classes={'title-main text-center'}/>
      <div className='container text-center d-flex flex-column border-20 shadow-md '
        style={{
          height: '70vh',
          width: 340,
          marginTop: '15vh',
          border: '4px solid #000',
          background: uiProps.uiBg      }}>

          <h1 className='title' style={{ color: uiProps.uiColor }}>{uiProps.uiText}</h1>
          {
            showLockSlider
            ?
            (
              <LockSlider 
                handleInput={handleLockSliderInput} 
                sliderValue={lockSliderValue} 
                width={'250px'} />
            )
            :
            (
              <AiFillUnlock className='unlockIcon' />
            )
          }
        
      </div>
      </div>
  )
}
