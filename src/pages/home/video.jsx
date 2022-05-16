import React from 'react'
import * as Components from '../../components/index'
import ReactPlayer from 'react-player/youtube'

const Video = () => {
  return (
    <>
    <Components.Nav />
    <Components.Header cname='header sub' title='video' subtitle='sekolah' />
    <div className='container row'>
      <div className='video-youtube'>
        <div className='youtube-card'>
            <div className='youtube-video'>
                <ReactPlayer url="https://www.youtube.com/watch?v=tYMUE234Zi0" width='100%' heigth='100%' />
            </div>
            <div className='youtube-desc'>
                <h3>aefscasfcqwsa</h3>
            </div>
        </div>
      </div> 
    </div>


    </>
  )
}

export default Video