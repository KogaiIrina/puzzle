import React from 'react';
import './TryAgain.css';
import './App.css';

export default function TryAgain(props) {
    return (
        <div className='Container TryAgainContainer' >
                <span className='GameOver'>GAME OVER</span>
                <button className='TryAgainButton' onClick={props.onTryAgainPushed}>Try again!</button>
                <div className='Copyright'>
                    Made by Irina Kogay<br/>
                </div>
        </div>
    );
}
