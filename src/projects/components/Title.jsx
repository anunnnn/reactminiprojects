import React from 'react';

export default function Title({ classes, text }) {
    return (
        <div className = {!classes ? 'text-center' : classes}>
            <h1 className = 'title'>{ !text ? "E-Signature App" : text }</h1>
        </div>
    )
}
