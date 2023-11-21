import useFetch from '../../hooks/useFetch';

function SongCategories({ genreSelected, setGenre }) {
  const { loading, fetchedData } = useFetch(
    'https://qtify-backend-labs.crio.do/genres'
  );

  return (
    <div className=" my-2 h-9 w-full">
      {loading ? (
        <div className="h-full text-2xl text-white">Loading ...</div>
      ) : (
        <div className="flex gap-2 cursor-pointer">
          <div
            className={
              'all' === genreSelected
                ? 'text-sm px-4 border-b-2 border-green'
                : 'text-sm px-4'
            }
            onClick={() => setGenre('all')}
          >
            All
          </div>
          {fetchedData.data &&
            fetchedData.data.map((genre, index) => (
              <div
                key={genre.key}
                className={
                  genre.key === genreSelected
                    ? 'text-sm px-4 border-b-2 border-green'
                    : 'text-sm px-4'
                }
                onClick={() => setGenre(genre.key)}
              >
                {genre.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SongCategories;
