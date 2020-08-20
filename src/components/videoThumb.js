import React from 'react';

const VideoThumb = ({gif, clickHandler}) => {
  return (
    <div className="VideoThumb">
      <button className='VideoThumb__container'onClick={clickHandler}>
        <img className="VideoThumb__thumbnail" src={gif} alt='Video Thumbnail' />
        <div className="VideoThumb__button">
          <span>
            Se hela videon 
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 896">
              <path d="M448 0a448 448 0 100 896 448 448 0 000-896zm0 820a372 372 0 11.1-744.1A372 372 0 01448 820z" fill="#000"/>
              <path d="M655.4 435.1l-296.1-215A15.9 15.9 0 00334 233v430a16 16 0 0025.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V326.9L564.5 448 397.8 569.1z" fill="#000"/>
            </svg>
          </span>
        </div>
      </button>
    </div>
  )
}

export default VideoThumb;