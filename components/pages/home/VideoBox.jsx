import Image from 'next/image'
import React from 'react'

const VideoBox = () => {
  return (
    <div className='w-full aspect-video  border border-black'>
      <Image src={'https://img.magnific.com/free-psd/creative-youtube-thumbnail-design-template_505751-6257.jpg?semt=ais_hybrid&w=740&q=80'} width={1000} height={1000} className='w-full h-full' alt='video' />
    </div>
  )
}

export default VideoBox
