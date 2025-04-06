import React from 'react';
import Title from '../components/Title';
import HappyDog from './images/happy_dog.jpg';
import { AiFillSmile, 
    AiFillHeart, 
    AiOutlineHeart, 
    AiOutlineComment } from "react-icons/ai";
import { useState } from 'react';



export default function LikeMyPhotoApp() {

    // let like = true;
    const [ like, setLike ] = useState(false);
    const [ count, setCount ] = useState( 0 );

    const toggleLike = () => {
        if (!like) {
            setLike(true);
            setCount( count + 1 );
        }
        else {
            setLike(false);
            setCount( count - 1 );
        }
    }


  return (
    <div className = 'container text-center'> 
        <Title text = { 'Like Photo App' } classes= {'title-main'} />
        <Title text = { `Likes ${count}` } classes = { 'subtitle' }/>

        <div className = 'card card-dark m-auto shadow-lg'
                style = {{ width : '300px',
                            cursor : "pointer",}}
                >
            <div className = ' card-header fs-xl '>
                <AiFillSmile />
                <small> DogyDog </small>
                
            </div>

            <img src = { HappyDog } style = {{ height : '300px' }} onDoubleClick = { toggleLike } />

            <div className = 'card-footer fs-xl d-flex' style = {{ display : 'flex',
                justifyContent : 'space-between' }}>
            
                <AiOutlineComment /> {""}
                { like ? (<AiFillHeart className = 'text-danger' onClick={ toggleLike } />) : (<AiOutlineHeart onClick={ toggleLike }/>)}

            </div>

        </div>
    </div>
  )
}
