import NavBar from '../layouts/NavBar';
import HeroSection from '../layouts/HeroSection';
import AlbumSection from '../layouts/AlbumSection';
import SongSection from '../layouts/SongSection';
import Player from '../layouts/Player';

function Home() {
  return (
    <div className="overflow-hidden select-none">
      <NavBar />
      <div className="bg-black w-screen text-white poppins">
        <HeroSection />
        <AlbumSection
          name={'Top Album'}
          url={'https://qtify-backend-labs.crio.do/albums/top'}
        />
        <AlbumSection
          name={'New Album'}
          url={'https://qtify-backend-labs.crio.do/albums/new'}
        />
        <SongSection />
        <Player />
      </div>
    </div>
  );
}

export default Home;
