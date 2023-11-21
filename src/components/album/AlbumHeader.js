function AlbumHeader({ name, setShowAll, showAll }) {
  return (
    <div className="w-full flex justify-between mb-4 text-sm md:text-base">
      <h3>{name}</h3>
      <h3
        className="text-green cursor-pointer"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Collapse' : 'Show All'}
      </h3>
    </div>
  );
}

export default AlbumHeader;
