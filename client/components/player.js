import React, { Component, PropTypes, ReactElement } from 'react'
import { PlayButton } from 'react-soundplayer/components'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import ReactLoading from 'react-loading'
import utils from '../utils'

/**
 * render the background image (track image or artist avatar) if available
 * @param  {Object} track the current track from soundcloud API
 * @return {JSX}       the JSX to insert into the parent React component
 */
const renderTrackImage = track => {
  let imageUrl = ''
  let trackImageUrl = utils.getPropValue(['artwork_url'], track)
  if (trackImageUrl) {
    // if there is a track image, get larger image for artwork_url according to https://developers.soundcloud.com/docs/api/reference#tracks
    let largeImageUrl = trackImageUrl.replace(/-large./i, '-t500x500.') // TODO: could check which tile size we're using and grab the appropriate image size
    if (utils.imageExists(largeImageUrl)) trackImageUrl = largeImageUrl
    imageUrl = trackImageUrl
  } else {
    let artistAvatarUrl = utils.getPropValue(['user', 'avatar_url'], track)
    if (artistAvatarUrl) {
      imageUrl = artistAvatarUrl
    }
  }
  return imageUrl
    ? <div
        style={{ backgroundImage: 'url(' + imageUrl + ')' }}
        className="img-track-artwork"
      />
    : ''
}

/**
 * reder the play button when ready, or a spinner while waiting to load
 * @param  {Object} track the current track from soundcloud API
 * @param  {Object} props the props from the React component inserting this component
 * @return {JSX}       the JSX to insert into the parent React component
 */
const renderPlayButton = (track, props) => {
  return (
    <div className="play-button-wrapper">
      {track
        ? <PlayButton className="play-button" {...props} />
        : <ReactLoading type="spin" color="rgba(255,255,255,.8)" delay={0} />}
    </div>
  )
}

/**
 * contents and controls for player block
 * @type {String}
 */
export default class Player extends Component {
  render() {
    let { track, currentTime } = this.props
    return (
      <div className="player-inner-wrapper">
        {renderTrackImage(track)}
        <div className="img-track-gradient-cover" />
        {renderPlayButton(track, this.props)}
        <header className="player-info">
          <h3 className="player-track-title">
            {track ? track.title : 'Loading...'}
          </h3>
          <h4 className="player-track-artist">
            {track ? track.user.username : ' '}
          </h4>
        </header>
      </div>
    )
  }
}
