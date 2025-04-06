import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {

  // const handleClick = () => {
  //   console.log('button clicked');
  // }
  const [ testimonials, setTestimonials ] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTestimonials(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [ testimonials ])

  return (
    <div className='container container-fluid m-auto'>

      <Title text={'Testimonial App'} />

      <Button 
        text= {'Posts'} 
        btnClass='btn-info'
        icon={ <BsFillFileEarmarkPostFill /> }
        onClick={ () => setTestimonials ('Posts') } />{''}

      <Button 
        text= {'Users'} 
        btnClass='btn-info'
        icon={ <FaUserAlt /> }
        onClick={ () => setTestimonials ('Users') } />

      <Button 
        text= {'Comments'} 
        btnClass='btn-info'
        icon={ <BiCommentDetail /> }
        onClick={ () => setTestimonials('Comments') } />

      <Title 
        text={ !testimonials ? 'Select from above!' : testimonials }
        classes={'subtitle text-primary'}/>

    </div>
  );
}
