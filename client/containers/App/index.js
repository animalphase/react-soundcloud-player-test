import React, { Component, PropTypes } from 'react'
import Player from '../../components/player'
import SC from 'node-soundcloud'
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
          <input type="text" id="soundcloud-url-input" name="soundcloud-url" />
          <input type="submit" value="Play Song" />
          {/*<ReactLoading type="spin" color="#444" delay="1" />*/}
        </form>
      </div>
    )
  }
}
