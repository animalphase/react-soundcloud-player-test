import React, { Component, PropTypes } from 'react'
import css from '../../styles/main.less'
import PlayerBlock from '../../components/PlayerBlock.js'

const clientId = 'yFIWGxNutPTNxqnk0d1Na8tYoecnm4DE'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.state = {
      resolveUrl: 'https://soundcloud.com/wwweirdkids/japan-air-rule-the-world'
    }
  }

  handleSubmit() {
    let url = this.refs.urlField.value
    url
      ? this.setState({ resolveUrl: url })
      : console.log('nothing entered in url field')
  }

  handleKeyPress(event) {
    if (event.charCode == 13) {
      event.preventDefault()
      this.handleSubmit()
    }
  }

  render() {
    return (
      <div className="app">
        <h1>react soundcloud player test</h1>
        <form>
          <label htmlFor="soundcloud-url-input">soundcloud track url</label>
          <input
            type="search"
            id="soundcloud-url-input"
            ref="urlField"
            name="soundcloud-url"
            className="url-field"
            placeholder="Enter SoundCloud Track URL…"
            onKeyPress={event => {
              event.stopPropagation()
              this.handleKeyPress(event)
              return false
            }}
          />
          <input
            type="button"
            value="Play Song"
            onClick={event => {
              event.stopPropagation()
              this.handleSubmit()
              return false
            }}
          />
        </form>

        <hr />

        <main>
          <div className="block-wrapper one-two">
            <PlayerBlock
              clientId={clientId}
              resolveUrl={this.state.resolveUrl}
            />
          </div>

          <div className="block-wrapper one-one">
            <PlayerBlock
              clientId={clientId}
              resolveUrl={this.state.resolveUrl}
            />
          </div>

          <div className="block-wrapper three-two">
            <PlayerBlock
              clientId={clientId}
              resolveUrl={this.state.resolveUrl}
            />
          </div>
        </main>
      </div>
    )
  }
}
