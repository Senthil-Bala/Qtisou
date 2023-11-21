import SongRow from '../components/SongRow';

function SongsTable({ songs }) {
  console.log(songs);
  return (
    <div className="flex flex-col w-full my-4 text-sm overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <p>Title</p>
        <p>Artists</p>
        <p>Duration</p>
      </div>
      {songs.map(song => (
        <SongRow key={song.id} song={song} />
      ))}
    </div>
  );
}

export default SongsTable;
