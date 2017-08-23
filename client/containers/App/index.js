import React, { Component, PropTypes } from 'react'
import Headline from 'components/Headline'
import css from './styles.less'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        <Headline text="react soundcloud component" />
        <form>
          <label htmlFor="soundcloud-url-input">soundcloud song url</label>
          <input type="text" id="soundcloud-url-input" name="soundcloud-url" />
          <input type="submit" value="Play Song" />
        </form>
      </div>
    )
  }
}
