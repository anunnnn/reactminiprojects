import React from 'react';

export default function Title({ classes, text }) {
    return (
        <div className = {!classes ? 'title text-center' : classes}>
            <h1 className = 'title'>{ !text ? "Title" : text }</h1>
        </div>
    )
}
