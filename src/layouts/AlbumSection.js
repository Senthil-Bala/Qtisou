import AlbumHeader from '../components/album/AlbumHeader';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';
import SwipeCard from '../components/album/SwipeCard';
import CardGrid from '../components/album/CardGrid';

function AlbumSection({ url, name }) {
  const [showAll, setShowAll] = useState(false);
  const { loading, fetchedData } = useFetch(url);

  return (
    <div className="px-4 md:px-8 my-4 border-b-[2px] border-green">
      <AlbumHeader name={name} setShowAll={setShowAll} showAll={showAll} />
      {loading ? (
        <div className="h-60 w-40 text-2xl text-white">Loading ...</div>
      ) : showAll ? (
        <CardGrid fetchedData={fetchedData} />
      ) : (
        <SwipeCard fetchedData={fetchedData} />
      )}
    </div>
  );
}

export default AlbumSection;
