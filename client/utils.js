const utils = {
  /**
   * search within nested properties of an object, stops searching when hitting a null property
   * e.g. for this.soundCloudAudio._track.user.avatar_url,
   * let avatarUrl = getPropValue( ['_track', 'user', 'avatar_url'], this.soundCloudAudio ) // assigned null if property doesn't exist
   * @param  {Array} pathToProp   the path to a nested prop we hope to find, each step listed as an array value (string for keys, number for indexes)
   * @param  {Object} objectToScan the object to look through for all available properties based on the path above
   * @return {varies}              returns null, or the value found at the requested property
   */
  getPropValue: (pathToProp, objectToScan) => {
    return pathToProp.reduce(
      (step, otherStep) => (step && step[otherStep] ? step[otherStep] : null),
      objectToScan
    )
  },
  /**
   * check if image exists at url
   * @param  {string} image_url the url of image to test
   * @return {bool}           does the image exist or not
   */
  imageExists: image_url => {
    var http = new XMLHttpRequest()
    http.open('HEAD', image_url, false)
    http.send()
    return http.status != 404
  }
}

export default utils
