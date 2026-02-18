import React, { useState} from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
export default function TemperatureControllerApp() {
    
    const initialTemperature = Math.floor(Math.random() * 100);

    const [temperature, setTemperature] = useState(initialTemperature);

    const changeTemperature = (delta) => {
        if(delta === 1){
            setTemperature(temperature + 1);
        }
        else if(delta === -1){
            setTemperature(temperature - 1);
        }
    };


    return (
    <div className='container text-center'>
      <Title text="Temperature Controller App" />

      <div className='card bg-light m-auto' style={{ width: 200 }}>
        <div className='card-header'>Temperature</div>
        <div className='card-body'>
          <h1 
            className={`text-light card border-50 ${temperature > 30 ? 'bg-danger' : temperature < 10 ? 'bg-primary' : 'bg-warning'}`}
            style={{
                height: 150,
                width:150,
                borderRadius: '50%',
                border: '2px solid #666'
            }} >
                {temperature}
            </h1>
        </div>

        <div className='card-footer d-flex justify-content-around mb-2'>
            <Button text={'+'} btnClass={'btn-lg'} onClick={() => changeTemperature(1)}/>
            <Button text={'-'} btnClass={'btn-lg'} onClick={() => changeTemperature(-1)}/>
        </div>
      </div>
    </div>
  )
}
