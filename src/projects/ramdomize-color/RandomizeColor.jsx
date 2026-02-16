import React from 'react';
import Title from '../components/Title';

export default function RandomizeColor() {
    function handleClick(event){
        let body = document.querySelector('body');
        body.style.background = getRandomColor(); // Assigns random color to background
        event.target.style.background = getRandomColor(); // Assigns random color to the target i.e. button
    };

    const handleSecClick = (event) => {
        let body = document.querySelector('body');
        body.style.background = getRandomColor(); // Assigns random color to background
        event.target.style.background = getRandomColor(); // Assigns random color to the target i.e. button
    };

    function getRandomColor(){
        let letters = '0123456789ABCDEF';
        let color = '#';

        for(let i=0; i<6; i++){
            color += letters[Math.floor(Math.random() * 16 )];
        }
        return color;
    };

  return (
    <div className="container text-center">
        <Title classes={"title mb-4"} text={"Randomize Color"}/>
        <button className='btn btn-danger' onClick={(e) =>handleClick(e)}>Click Me</button>
        <button className='btn btn-success' onClick={handleSecClick}>Click Me Too</button>
        <button className='btn btn-primary' onClick={handleSecClick}>Click Me Thrice</button>
        <button className='btn btn-warning' onClick={handleSecClick}>Click Me Not</button>

    </div>
  )
}
