import { useNavigate } from 'react-router-dom';

function AlbumCard({ albumData }) {
  const navigate = useNavigate();
  //   console.log(albumData);
  return (
    <div
      className="h-60 w-40 flex flex-col my-2 cursor-pointer"
      onClick={() => {
        navigate(`/album/${albumData.slug}`);
        console.log(albumData.slug);
      }}
    >
      <img src={albumData.image} alt="" className="w-full h-44 rounded-t-lg" />
      <div className="w-full h-8 bg-slate-50 rounded-b-lg flex justify-start items-center">
        <div className="bg-black text-xs px-2 py-[2px] ml-2 rounded-full">
          {albumData.follows} Followers
        </div>
      </div>
      <div>
        <h3 className="text-sm pt-2">{albumData.title}</h3>
      </div>
    </div>
  );
}

export default AlbumCard;
