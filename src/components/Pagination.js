import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

function Pagination({ pageNumber, currentPage, setCurrentPage }) {
  //   console.log(pageNumber);
  return (
    <div className="w-full flex justify-end">
      <GrPrevious
        className={`flex justify-center items-center w-5 h-5 mx-1 p-1 rounded-full cursor-pointer bg-white text-black`}
        onClick={() => {
          setCurrentPage(currentPage =>
            currentPage > 0 ? currentPage - 1 : currentPage
          );
        }}
      />
      {pageNumber.map(page => (
        <div
          key={page}
          className={`flex justify-center items-center w-5 h-5 mx-1 rounded-full cursor-pointer ${
            page === currentPage ? 'bg-green text-white' : 'bg-white text-black'
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page + 1}
        </div>
      ))}
      <GrNext
        className={`flex justify-center items-center w-5 h-5 mx-1 p-1 rounded-full cursor-pointer bg-white text-black`}
        onClick={() =>
          setCurrentPage(currentPage =>
            currentPage < pageNumber.length - 1 ? currentPage + 1 : currentPage
          )
        }
      />
    </div>
  );
}

export default Pagination;
