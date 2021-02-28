import React from 'react';
import { useState } from 'react';
import Start from './Start';
import Game from './Game';
import TryAgain from './TryAgain';

const PAGES = {
  START: 'start',
  GAME: 'game',
  TRY_AGAIN: 'try-again'
}


export default function App() {
  const [page, setPage] = useState(PAGES.START);

  if (page === PAGES.START) {
      return (<Start onStartPushed={() => setPage(PAGES.GAME)} />);
  } else if (page === PAGES.GAME) {
      const onGameEnd = () => {
          setPage(PAGES.TRY_AGAIN);
      };
      return (<Game onGameEnd={onGameEnd}/>);
  } else {
      return (<TryAgain
          onTryAgainPushed={() => setPage(PAGES.GAME)}
      />);
  }
}
