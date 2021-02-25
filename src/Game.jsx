import React from 'react';
import './Game.css';

const COLOR = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Pink', 'Gray',]
const PIECES_COUNT = 16;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pazl: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet',
             'Pink', 'Gray', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Pink', 'Gray'],
             closedCard: []
        };
        this.shuffle = (array) => array.sort(() => Math.random() - 0.5);
        this.handleClick = this.handleClick.bind(this);
        this.color = 'Red';
        this.click = false;
    }

    componentDidMount () {
        this.startGame();
    }

    startGame () {
        let newPazl = [...this.state.pazl];
        const newclosedCard = [...this.state.closedCard];

        for (let i = 0; i < PIECES_COUNT; i++) {
            newclosedCard.push(<div key={i} className='Piece' onClick={() => this.handleClick(i)} ></div>);
        }
        newPazl = this.shuffle(newPazl);
        this.setState({ pazl: [...newPazl], closedCard: [...newclosedCard]} );

        console.log(newPazl);
    }

    handleClick(number) {

        const newPazl = [...this.state.pazl];
        const newclosedCard = [...this.state.closedCard];


        for (let i = 0; i < PIECES_COUNT; i++) {
            if (newPazl[number] === COLOR[i]) {
                this.color = newPazl[number];
                newclosedCard.splice(number, 1, <div key={Math.random()} className={this.color} ></div>);
                this.setState({ pazl: [...newPazl], closedCard: [...newclosedCard] });
            }

        }
    }



    render () {


        return (
            <div className='AllPieces'>
                {this.state.closedCard}
            </div>
        )
    }
}

