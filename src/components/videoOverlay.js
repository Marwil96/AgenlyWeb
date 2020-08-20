import React from "react"

const VideoOverlay = ({ src, videoTitle, clickHandler, ...props }) => (
  <button className="VideoOverlay" onClick={clickHandler}>
    <iframe
      src={src}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </button>
)

export default VideoOverlay
