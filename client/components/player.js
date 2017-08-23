import React, { Component, PropTypes } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import Track from './track'

export default class Player extends Component {
  render() {
    const { resolveUrl, clientId } = this.props

    return (
      <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
        <Track />
      </SoundPlayerContainer>
    )
  }
}

Player.propTypes = {
  resolveUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired
}
