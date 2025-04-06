import React from 'react';

export default function Button( { text, btnClass, icon, onClick } ) {
  return (
    <div>
      <button className={`btn ${btnClass}`} 
      onClick={ onClick } >
        { icon }
        { !text ? 'Click Me !' : text } 
        </button>
    </div>
  )
}
