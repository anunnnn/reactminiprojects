import React, { useState } from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {
    

    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleNameChange = (e)=>{
        setName(e.target.value);
    };

    const handleDateChange = (e)=>{
        setDate(e.target.value);
    };

    const inputStyle = {
        border:"none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem",
    };

    document.body.style.background = "#eee";

  return (
    <div className='container text-center'>
        <Title classes={"title"} text={!name ? "Your Signature" : name }/>
        <Title classes={"title-main mb-4"} text={!date ? "Select a Date" : date } />
        <p>
            This is a simple signature app that displays the name and date entered.
            The EsignatureApp component uses the useState hook to handle changes in the inputfields.
            It captures the user's name and selected date dynamically through form inputs.
            On submission, the entered details are displayed as a digital signature preview.
            Basic form validation can be added to ensure both fields are filled before displaying the
            signature.The app provides a clean and minimal UI for ease of use.
        </p>
        <footer 
            className="d-flex" 
            style={{
                display: "flex",
                justifyContent: "space-around",
                position: "relative",
                top: "30vh",
            }}>

            <input type="date" value={date} style={inputStyle} onChange={handleDateChange}/>
            <input type="text" value={name} style={inputStyle}  onChange={handleNameChange}/>
        </footer>
    </div>
  )
}
