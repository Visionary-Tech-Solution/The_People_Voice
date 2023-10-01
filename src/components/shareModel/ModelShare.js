import React from 'react';
import { FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

const ModelShare = ({data}) => {
    return (
        <>
      
      {/* Facebook Share Button */}
      <FacebookShareButton url={data}  title="facebook share">
        <FacebookIcon className='rounded-full mx-2'/>
      </FacebookShareButton>
      <LinkedinShareButton url={data}  title="linkedin share">
      <LinkedinIcon className='rounded-full mx-2'/>
      </LinkedinShareButton>
      <TwitterShareButton url={data}  title="twitter share">
        <TwitterIcon className='rounded-full mx-2'/>
      </TwitterShareButton>
      <InstapaperShareButton url={data}  title="instgram share">
        <InstapaperIcon className='rounded-full mx-2'/>
      </InstapaperShareButton>
  
         
  
      </>
    );
};

export default ModelShare;