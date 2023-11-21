import usePlayer from '../hooks/usePlayer';

function SongRow({ song }) {
  const artistsNumber = song.artists.length;
  const changeSong = usePlayer(state => state.changeSong);
  //   console.log(song);
  return (
    <div
      className="w-full min-h-[64px] border-y border-gray flex justify-around items-center gap-2 cursor-pointer"
      onClick={() =>
        changeSong(song.title, 'album', song.artists[0], song.image)
      }
    >
      <div className="w-4/12 flex justify-start items-center">
        <img
          src={song.image}
          alt="albumArt"
          className="hidden lg:block h-16 w-auto p-1 rounded-lg"
        />
        {song.title}
      </div>
      <div className="w-4/12 flex flex-col lg:flex-row justify-center">
        {song.artists.map((artist, index) =>
          index === artistsNumber - 1 ? (
            <p key={index}>{artist}</p>
          ) : (
            <p key={index}>{artist},</p>
          )
        )}
      </div>
      <p className="w-4/12 flex justify-end">02:50</p>
    </div>
  );
}

export default SongRow;
