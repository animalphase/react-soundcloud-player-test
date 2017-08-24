import React, { Component, PropTypes, ReactElement } from 'react'
import { PlayButton, Progress, Icons } from 'react-soundplayer/components'
import { SoundPlayerContainer } from 'react-soundplayer/addons'

const { SoundCloudLogoSVG } = Icons

const clientId = 'yFIWGxNutPTNxqnk0d1Na8tYoecnm4DE'
const resolveUrl = 'https://soundcloud.com/remixluke/1953-remake'

export default class PlayerBlock extends React.Component {
  constructor() {
    super()
    this.trackReady = this.trackReady.bind(this)
  }

  trackReady() {
    console.log('Track can be played!')
    // Enable the play button, or start playing programmatically, etc
  }

  PlayIcon = () => {
    return (
      <span>
        {SoundCloudLogoSVG}
      </span>
    )
  }

  //soundCloudAudio={instanceof SoundCloudAudio}
  render() {
    return (
      <div className="player-block">
        <SoundPlayerContainer
          clientId={clientId}
          resolveUrl={resolveUrl}
          onReady={this.trackReady}
        >
          <PlayButton
            className={'play-button'}
            playing={true}
            seeking={false}
            seekingIcon={this.PlayIcon()}
            onTogglePlay={Function}
          />
        </SoundPlayerContainer>
      </div>
    )
  }
}
