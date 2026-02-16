import React, { useState } from 'react';

export default function Alert({ type, message }) {

    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = (event) => {
        event.target.parentElement.parentElement.classList.add('fadeAlert');
        setTimeout(() => {
            setShowAlert(false);
        }, 300);
    }

  return (
    showAlert && (
      <div className={`alert alert-${type}`}>
        <span className='fw-bold mr-1'>{message}</span>
        <button 
            type="button" 
            className="btn-close" 
            text='x'
            onClick={closeAlert}></button>
      </div>
    )
  )
}
