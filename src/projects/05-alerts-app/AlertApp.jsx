import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import Alert from '../components/Alert';    

export default function AlertApp() {
  return (
    <div className='container text-center'>
      <Title text={'Alert App'} classes={'title-main'} />

      <Alert type={'success'} message={'This is a success alert!'} />
      <Alert type={'info'} message={'This is an info alert!'} delay={true} />
    </div>
  )
}
