import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const ArtistCard: FC<any> = ({ track }) => {
  const navigate = useNavigate();
  return (
    <div 
      className='
        flex
        flex-col
        w-[250px]
        p-4
        bg-white/5
        bg-opacity-80
        backdrop-blur-sm
        animate-slideup
        rounded-lg
        cursor-pointer
      '
      onClick={() => navigate(`/artist/${track?.artists[0].adamid}`)}
    >
      <img src={track?.images?.coverart} alt="song_img" className='w-full h-56 rounded-lg' />
      <p className='mt-4 font-semibold text-lg text-white truncate'>
        { track?.subtitle }
      </p>
    </div>
  )
}
