import React, {useState, useEffect} from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";


export default function TestimonialsApp() {
  // const handleClick = () => {
  //   console.log('button clicked');
  // };
  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    if (!testimonials) return;
    fetch(`https://jsonplaceholder.typicode.com/${testimonials.toLowerCase()}`)
      .then(response => response.json())
      .then((json) => setItems(json))
      .catch((error) => console.error('Error fetching data:', error));
  }, [testimonials]);

  // console.log(items);

  return (
    <div className='container text-center'>
      <Title text={'Testimonial App'} classes={'title-main'} />

      <div className='d-flex justify-content-center mb-4'>
        <Button
          text={'Posts'} 
          btnClass={'btn-info'}
          icon={<BsFillFileEarmarkPostFill className='mr-1' />}
          onClick={() => setTestimonials('Posts')}
        />

        <Button
          text={'Users'} 
          btnClass={'btn-info'}
          icon={<FaUserAlt className='mr-1' />}
          onClick={() => setTestimonials('Users')}
        />

        <Button
          text={'Comments'} 
          btnClass={'btn-info'}
          icon={<BiCommentDetail className='mr-1' />}
          onClick={() => setTestimonials('Comments')}
        />
      </div>
      
      <div className='card mb-4'>
      <Title text={!testimonials ? 'Select from above!' : testimonials } classes={'subtitle text-primary'} />

      {!items 
        ? null 
        : (items.map((item) => {
            return (
              <div className='card card-primary mb-2' key={item.id}>
                {item.name && <h2 className='card-header'>{item.name}</h2>}
                <div className='card-body'>
                  <h4 className='card-title'>{item.title}</h4>
                  <p className='card-text'>{item.body}</p>
                </div>
                {item.email && (
                  <small className='card-footer text-muted'>{item.email}</small>
                )}
              </div>
            )
          })
      )};
      </div>

    </div>

  )
}
