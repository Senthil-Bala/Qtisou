import usePlayer from '../../hooks/usePlayer';
// import { useShallow } from 'zustand/react/shallow';
function SongsCard({ songData }) {
  const changeSong = usePlayer(state => state.changeSong);
  // console.log(songData, '*songData');
  return (
    <div
      className="h-64 w-40 flex flex-col my-2 cursor-pointer"
      onClick={() =>
        changeSong(songData.title, 'album', songData.artists[0], songData.image)
      }
    >
      <img src={songData.image} alt="" className="w-full h-44 rounded-t-lg" />
      <div className="w-full h-8 bg-slate-50 rounded-b-lg flex justify-start items-center">
        <div className="bg-black text-xs px-2 py-[2px] ml-2 rounded-full">
          {songData.likes} Likes
        </div>
      </div>
      <div>
        <h3 className="text-sm pt-2">
          {songData.title.length > 25
            ? songData.title.slice(0, 25) + ' . . .'
            : songData.title}
        </h3>
      </div>
    </div>
  );
}

export default SongsCard;
