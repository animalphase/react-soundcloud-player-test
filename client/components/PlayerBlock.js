import React, { Component, PropTypes, ReactElement } from 'react'
import {
  PlayButton,
  Cover,
  Progress,
  Icons
} from 'react-soundplayer/components'
import { SoundPlayerContainer } from 'react-soundplayer/addons'

const { SoundCloudLogoSVG } = Icons

/**
 * contents and controls for player block
 * @type {String}
 */
class Player extends Component {
  render() {
    let { track, currentTime } = this.props;
    return (
      <div className='player-inner-wrapper'>
        <PlayButton className='play-button' {...this.props} />
        {/*<VolumeControl className='flex flex-center mr2' buttonClassName='flex-none h4 button button-transparent button-grow rounded' {...this.props} />*/}
        <h2 className='h5 nowrap caps flex-auto m0'>{track ? track.title : 'Loading...'}</h2>
        {/*<Timer className='h6 mr1' duration={track ? track.duration / 1000 : 0} currentTime={currentTime} {...this.props} />*/}
      </div>
    );
  }
}

/**
 * Construct player block module for page
 * @type {[type]}
 */
export default class PlayerBlock extends React.Component {
  constructor(props) {
    super(props)
    this.trackReady = this.trackReady.bind(this)
    this.state = {
      currentTrack: {}
    }
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
    console.log(this.props);
    return (
      <div className='player-block'>
      <SoundPlayerContainer {...this.props}>
        <Player />
      </SoundPlayerContainer>
        {/*<SoundPlayerContainer
          clientId={clientId}
          resolveUrl={resolveUrl}
          onReady={this.trackReady}
        >
          <PlayButton
            className={'play-button'}
            playing={true}
            seeking={false}
            seekingIcon={this.PlayIcon()}
          />
        </SoundPlayerContainer>*/}
      </div>
    )
  }
}
