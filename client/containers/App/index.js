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
          <hr />
          <h4>soundcloud iframe manual embed:</h4>
          <iframe
            width="240"
            height="240"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233644433&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
          />
          {/*<ReactLoading type="spin" color="#444" delay="1" />*/}
        </form>
      </div>
    )
  }
}
