import React from 'react';
// import { useState } from 'react';
import Title from '../components/Title'

export default function RandomizeColor () {

    function handleClick ( e ) {
        // console.log( e.target );
        e.target.style.background = getRandomColor();
        let body = document.querySelector('body');
        body.style.background = getRandomColor();
    }

    const handleSecClick = (e) => {
        
        // e.target.style.background = getRandomColor();
       // getRandomColor();
       let body = document.querySelector('body');
       body.style.background = getRandomColor();   
       e.target.style.background = getRandomColor(); 
    }

    function getRandomColor () {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for ( let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    return (
        <div className = 'container text-center'>
            < Title classes = { 'mb-4' } text = {'Randomize Color'} />
            <button className = 'btn btn-danger ' onClick={( e )=> handleClick ( e ) } >Click Me</button>
            <button className = 'btn btn-success ' onClick={ handleSecClick } >Click Me 2</button>
            <button className = 'btn btn-primary ' onClick={ handleSecClick } > Thrice</button>
            <button className = 'btn btn-warning ' onClick={ handleSecClick } >Not Me</button>
        </div>
    )
}