import React, { FC } from 'react';

export const Loader: FC<any> = ({ title }) => {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <img 
        src="https://raw.githubusercontent.com/adrianhajdin/project_music_player/57c96f9624dadc946d7d139e60bb6d4db0dafd9e/src/assets/loader.svg" 
        alt="loader" 
        className='w-32 h-32 object-contain'
      />
      <h1 className='font-bold text-2xl text-white mt-2'>
        { title || 'Loading' }
      </h1>
    </div>
  )
}
