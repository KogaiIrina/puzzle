import React from 'react';
import './Start.css';
import './App.css';

export default function Start(props) {
    return (
        <div className='Container'>
            <h1>GUESS THE COLORS</h1>
            <span className='Play'>Play with me!</span>
            <button className='StartButton' onClick={props.onStartPushed}>START</button>
        </div>
    );
}
