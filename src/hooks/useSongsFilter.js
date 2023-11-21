const useSongsFilter = ({ arr, genre }) => {
  if (genre === 'all') {
    return arr;
  }
  const filterredArray = arr.filter(song => {
    return song.genre.key === genre;
  });

  return filterredArray;
};

export default useSongsFilter;
