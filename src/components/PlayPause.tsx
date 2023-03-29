import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
 
export const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }: any) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={35}
    className="text-gray-300"
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />
));