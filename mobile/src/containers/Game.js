import React from 'react';

import Player from '../components/Player';

class Game extends React.Component {

  static route = {
    navigationBar: {
      title: 'Connecting',
      backgroundColor: '#160030',
      titleStyle: {
        color: '#fff'
      },
      tintColor: '#fff'
    }
  };

  render() {
    return (
      <Player playerName="Siemanko" />
    )
  }
}

export default Game;