import React, { Component, PropTypes } from 'react'
import css from '../../styles/main.less'

import PlayerBlock from '../../components/PlayerBlock.js'
const clientId = 'yFIWGxNutPTNxqnk0d1Na8tYoecnm4DE'
const resolveUrl = 'https://soundcloud.com/remixluke/1953-remake'

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
        </form>

        <hr />

        <main>

          <div className="block-wrapper one-two">
            <PlayerBlock clientId={clientId} resolveUrl={resolveUrl} />
          </div>

          <div className="block-wrapper one-one">
            <PlayerBlock clientId={clientId} resolveUrl={resolveUrl} />
          </div>

          <div className="block-wrapper three-two">
            <PlayerBlock clientId={clientId} resolveUrl={resolveUrl} />
          </div>

        </main>
      </div>
    )
  }
}
