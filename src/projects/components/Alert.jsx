import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function Alert({ type, message, delay=false, delayTime=4000 }) {

    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = (event) => {
        event.target.parentElement.parentElement.classList.add('fadeAlert');
        setTimeout(() => {
            setShowAlert(false);
        }, 300);
    };

    useEffect(() => {
      delay && setTimeout(() => {
        setShowAlert(false);
      }, delayTime )
    });

  return (
    showAlert && (
      <div className={`alert alert-${type} d-flex justify-content-between`}>
        <span className='fw-bold mr-1'>{message}</span>
        <Button 
            type="button" 
            className="btn-close" 
            text='x'
            onClick={closeAlert} />
      </div>
    )
  )
}
