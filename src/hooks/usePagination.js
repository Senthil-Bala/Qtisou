const usePagination = ({ songs, page, loading }) => {
  if (loading) {
    return;
  }
  //   console.log(songs);
  const lastPageNumber = Math.ceil(songs.length / 10);
  let pageinationArray = [];
  for (let i = 0; i < lastPageNumber; i++) {
    pageinationArray = [...pageinationArray, i];
  }
  //   console.log(lastPageNumber);
  let selectedPageSongs = [];
  for (let i = page * 10; i < (page + 1) * 10; i++) {
    if (songs[i]) {
      selectedPageSongs = [...selectedPageSongs, songs[i]];
    }
  }

  return {
    pageinationArray: pageinationArray,
    selectedPageSongs: selectedPageSongs,
  };
};

export default usePagination;
