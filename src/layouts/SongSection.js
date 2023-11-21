import SongsSwipeCard from '../components/song/SongsSwipeCard';
import useFetch from '../hooks/useFetch';
import useSongsFilter from '../hooks/useSongsFilter';
import SongCategories from '../components/song/SongCategories';
import { useState } from 'react';
function SongSection() {
  const [genre, setGenre] = useState('all');
  const { loading, fetchedData } = useFetch(
    'https://qtify-backend-labs.crio.do/songs'
  );

  //   console.log(genre, '***genre');

  const filterredSongs = useSongsFilter({ arr: fetchedData, genre: genre });
  //   console.log(filterredSongs);

  return (
    <div className="px-4 md:px-8 my-4 border-b-[2px] border-green">
      <div className="flex w-full">
        <h3>Songs</h3>
      </div>
      <div className="">
        <SongCategories genreSelected={genre} setGenre={setGenre} />
      </div>

      {loading ? (
        <div className="h-60 w-40 text-2xl text-white">Loading ...</div>
      ) : (
        <SongsSwipeCard fetchedData={filterredSongs} />
      )}
    </div>
  );
}

export default SongSection;
