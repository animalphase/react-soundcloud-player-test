import React, { Component, PropTypes } from 'react'
// import Player from '../../components/player'
import PlayerBlock from '../../components/PlayerBlock.js'
import ReactLoading from 'react-loading'
import css from './styles.less'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        <h1>react soundcloud player test</h1>
        <form>
          <label htmlFor="soundcloud-url-input">soundcloud song url</label>
          <input
            type="search"
            id="soundcloud-url-input"
            name="soundcloud-url"
            className="search-field"
            placeholder="Enter spotify URL…"
          />
          <input type="submit" value="Find Song" />
          <hr />
          <PlayerBlock />
        </form>
      </div>
    )
  }
}
