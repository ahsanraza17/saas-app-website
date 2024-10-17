import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full py-12 px-10 md:py-5 md:px-10 border-t-[1px] border-t-[#808080]'>
      <div className='w-5/6 mx-auto flex flex-col md:flex-row items-center md:justify-between gap-3'>
        <p className='text-[#808080] text-[14px] text-center font-semibold'>@ 2024 Your Company, Inc. All rights reserved</p>
        <div className='flex gap-3'>
            <img src="./src/assets/twitter.png" alt="twitter-logo" />
            <img src="./src/assets/insta.png" alt="insta-logo" />
            <img src="./src/assets/picsart.png" alt="picsart-logo" />
            <img src="./src/assets/linkedin.png" alt="linkedin-logo" />
            <img src="./src/assets/tiktok.png" alt="tiktok-logo" />
            <img src="./src/assets/youtube.png" alt="youtube-logo" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
