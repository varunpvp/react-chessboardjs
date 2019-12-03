import React from 'react';
import shortid from 'shortid'
import ChessboardJs from './js/chessboard'
import './css/chessboard.css'

import wK from './img/chesspieces/wikipedia/wK.png'
import wQ from './img/chesspieces/wikipedia/wQ.png'
import wR from './img/chesspieces/wikipedia/wR.png'
import wB from './img/chesspieces/wikipedia/wB.png'
import wN from './img/chesspieces/wikipedia/wN.png'
import wP from './img/chesspieces/wikipedia/wP.png'
import bK from './img/chesspieces/wikipedia/bK.png'
import bQ from './img/chesspieces/wikipedia/bQ.png'
import bR from './img/chesspieces/wikipedia/bR.png'
import bB from './img/chesspieces/wikipedia/bB.png'
import bN from './img/chesspieces/wikipedia/bN.png'
import bP from './img/chesspieces/wikipedia/bP.png'

const pieces = {
  wK,
  wQ,
  wR,
  wB,
  wN,
  wP,
  bK,
  bQ,
  bR,
  bB,
  bN,
  bP
}

export default class Chessboard extends React.Component {

    constructor(props) {
        super(props)
        this.id = `chessboardjs-${shortid.generate()}`
    }

    componentDidMount() {

        const config = {
            pieceTheme(piece) {
                return pieces[piece]
            },
            ...this.props.config,
        }

        const chessboard = ChessboardJs(this.id, config)

        if (typeof this.props.chessboardRef == 'function') {
            this.props.chessboardRef(chessboard)
        }
    }

    render() {

        const attrs = Object.assign({}, this.props)

        delete attrs['config']
        delete attrs['chessboardRef']

        const props = {
            id: this.id,
            ...attrs
        }

        return React.createElement('div', props, null)
    }

}
