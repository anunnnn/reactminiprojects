import React from 'react';
import { useState } from 'react';
import Title from '../components/Title';

export default function EsignatureApp() {

  const [ name, setName ] = useState("");
  const [ date, setDate ] = useState("");

  const handleNameChange = ( e )=> {
   // console.log( e.target.value );
   setName(e.target.value);
  };

  const handleDateChange = ( e ) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border : "none",
    borderBottom : "2px dotted",
    outline : "none",
    padding : " 0.35rem 0 ",

  };

  document.body.style.background = "#eee";


  return (
    <div className = 'container text-center'>
      {/* <Title classes = {'title'} text = {'Name'}/> */}
      <Title classes = {'title'} text = { !name ? "Your Signatur" : name }/>
      <Title classes = {'title-main mb-4'} text = { !date ? "Select a Date" : date }/>
      <p>
        This is a simple e-signature app that allows users to sign documents electronically. 
        The app uses React for the frontend and Firebase for the backend. Users can create an account, 
        upload documents, and sign them electronically. The app also allows users to view their signed 
        documents and download them as PDFs.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt dolorum et fugit voluptatem 
        labore, necessitatibus tempora, beatae, recusandae error illo explicabo nostrum! Iusto perspiciatis 
        incidunt a accusantium voluptate! Doloremque.
      </p>

      <footer className = 'd-flex' style ={{ 
        display : 'flex',
        justifyContent : 'space-around',
        position : 'relative',
        top : '30vh',

       }} >

        <input type = "date" value = { date } style ={{ inputStyle }} onChange = { handleDateChange }/>
        <input type = "text" value = { name } style = {{ inputStyle }} onChange ={ handleNameChange }/>

      </footer>

    </div>
  )
}
