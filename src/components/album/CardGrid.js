import AlbumCard from './AlbumCard';

function CardGrid({ fetchedData }) {
  return (
    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-items-center w-full">
      {fetchedData.map(albumData => (
        <AlbumCard key={albumData.id} albumData={albumData} />
      ))}
    </div>
  );
}

export default CardGrid;
