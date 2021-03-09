import React, { useEffect, useReducer } from 'react';
import './Game.css';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink', 'gray'];
const CHECK_INTERVAL_MS = 1500;

const ACTIONS= {
    OPEN: 'open',
    CHECK: 'check'
}

function reducer (state, action) {
    switch (action.type) {
        case ACTIONS.OPEN:
            if (state.openCards.length === 2 || state.openCards.includes(action.payload) || !state.cards[action.payload]) {
                return {...state}
            }
            return { ...state, openCards: [...state.openCards, action.payload] };

        case ACTIONS.CHECK:
            if (state.openCards.length !== 2) {
                return { ...state };
            }
            if (state.cards[state.openCards[0]] !== state.cards[state.openCards[1]]) {
                return {...state, openCards: []};
            }
            const cards = [...state.cards];
            cards[state.openCards[0]] = undefined;
            cards[state.openCards[1]] = undefined;
            return { ...state, cards, openCards: [] };
        default:
            throw new Error(`Unsupported action ${JSON.stringify(action)}`);
    }
}

export default function Game (props) {
    const [state, dispatch] = useReducer(reducer, {
        cards: [...COLORS, ...COLORS].sort(() => Math.random() - 0.5),
        openCards: []
    });

    const { cards, openCards } = state;

    useEffect(() => {
        if (openCards.length === 2) {
            const timeOut = setTimeout(() => dispatch({ type: ACTIONS.CHECK}), CHECK_INTERVAL_MS);
            return () => clearTimeout(timeOut);
        }
    }, [openCards]);

    useEffect(() => {
        if (cards.every(card => card === undefined)) {
            props.onGameEnd();
        }
    }, [cards]);

    const renderCards = cards.map((card, i) => (<div
        key={i}
        className={`Cards${cards[i] ? '' : ' Disappeared'}`}
        onClick={() => dispatch({ type: ACTIONS.OPEN, payload: i})}
        style={openCards.includes(i) ? {backgroundColor: card} : {}}
    ></div>));
    return <div className='CardsContainer'>{renderCards}</div>
}
