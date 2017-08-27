import React, { Component, PropTypes, ReactElement } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import Player from './Player'


/**
 * Construct player block module for page
 * @type {[type]}
 */
export default class PlayerBlock extends React.Component {
  constructor(props) {
    super(props)
    this.trackReady = this.trackReady.bind(this)
  }

  trackReady() {
    console.log('\n\n\n\n\nTrack can be played!\n\n')
    // Enable the play button, or start playing programmatically, etc
  }

  render() {
    return (
      <div className='player-block'>
        <SoundPlayerContainer onReady={this.trackReady} {...this.props}>
          <Player />
        </SoundPlayerContainer>
      </div>
    )
  }
}
