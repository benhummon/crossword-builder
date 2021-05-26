import React from 'react';
import './Board.css';
import Square from './Square';
import { indicesArray } from '../utilities/indices_array';

class Board extends React.Component {
  render() {
    const renderedRows = indicesArray(this.props.height).map(
      i => this.renderRow(i)
    );
    return (
      <div
        className="board"
        onKeyUp={this.props.handleBoardKeyUp}
      >
        {renderedRows}
      </div>
    );
  }

  renderRow(i) {
    const renderedSquares = indicesArray(this.props.width).map(
      j => this.renderSquare(i * this.props.width + j)
    );
    return (
      <div
        className="board-row"
        key={i}
      >
        {renderedSquares}
      </div>
    );
  }

  renderSquare(k) {
    return (
      <Square
        key={k}
        index={k} // !!! gross
        value={this.props.squares[k]}
        isActive={this.props.activeIndex === k}
        onFocus={this.handleSquareFocus(k)}
        onBlur={this.handleSquareBlur(k)}
        onClick={this.handleSquareClick(k)}
      />
    );
  }

  // !!! carefully think about whether this is any better than doing it inline
  handleSquareFocus = k => event => this.props.handleSquareFocus(k, event);
  handleSquareBlur = k => event => this.props.handleSquareBlur(k, event);
  handleSquareClick = k => event => this.props.handleBoardClick(k, event);
}

export default Board;
