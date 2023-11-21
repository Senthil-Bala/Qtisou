import NavBar from '../layouts/NavBar';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import backIcon from '../Assets/images/back.png';
import shuffleIcon from '../Assets/images/shuffle.png';
import addIcon from '../Assets/images/addIcon.png';
import usePagination from '../hooks/usePagination';
import Pagination from '../components/Pagination';
import { useState } from 'react';
import SongsTable from '../layouts/SongsTable';
import Player from '../layouts/Player';

function AlbumPage() {
  const { slug } = useParams();
  const { loading, fetchedData } = useFetch(
    `https://qtify-backend-labs.crio.do/album/${slug}`
  );
  const [currentPage, setCurrentPage] = useState(0);
  let time =
    loading ||
    fetchedData.songs.reduce((total, song) => total + song.durationInMs, 0);
  time = time / 1000;
  const hour = Math.floor(time / 3600);
  const min = Math.floor((time % 3600) / 60);
  const duration = { hour: hour, min: min };

  const songsPagination = usePagination({
    songs: fetchedData.songs,
    page: currentPage,
    loading: loading,
  });

  // console.log(songsPagination);
  // console.log(currentPage, '***currentPage');

  return (
    <div className="bg-black w-screen text-white select-none ">
      <NavBar />
      <div className="px-4 md:px-20">
        <Link to="/">
          <img src={backIcon} alt="back" className="my-4" />
        </Link>
        {loading ? (
          <div className="h-60 w-40 text-2xl text-white">Loading ...</div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
            <img
              src={fetchedData.image}
              alt="album"
              className="h-[320px] w-[280px] rounded-2xl mr-2"
            />
            <div className="flex flex-col items-center justify-center md:items-start ml-2">
              <h2 className="text-4xl font-bold mb-2">{fetchedData.title}</h2>
              <h4 className="text-sm md:text-xl mb-2">
                {fetchedData.description}
              </h4>
              <div className="flex text-sm md:text-xl">
                <h4 className="mr-2">{fetchedData.songs.length} Songs</h4>
                <h4 className="text-xl mr-2">&#8226;</h4>
                <h4 className="mr-2">
                  {duration.hour ? duration.hour + ' hour' : null}{' '}
                  {duration.min ? duration.min + ' min' : null}
                </h4>
                <h4 className="text-xl mr-2">&#8226;</h4>
                <h4 className="mr-2">{fetchedData.follows} Follows</h4>
              </div>
              <div className="flex gap-4 my-2">
                <button className="bg-green px-4 py-1 text-sm md:text-base md:px-8 md:py-2 rounded-xl flex justify-center items-center gap-1">
                  <img src={shuffleIcon} alt="shuffle" />
                  Shuffle
                </button>
                <button className="px-4 py-1 text-sm md:text-base md:px-8 md:py-2 border-2 border-green text-green rounded-xl flex gap-1 justify-center items-center">
                  <img src={addIcon} alt="add" />
                  Add to library
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-end w-full my-4">
            <Pagination
              pageNumber={songsPagination?.pageinationArray ?? []}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <SongsTable songs={songsPagination?.selectedPageSongs ?? []} />
          <Player />
        </div>
      </div>
    </div>
  );
}

export default AlbumPage;
