import { SongBar } from "./Songbar"

export const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick
}: any) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song: number, i: number) => (
          <SongBar 
            key={i}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  )
}
