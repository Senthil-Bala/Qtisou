import Home from './Pages/Home';
import AlbumPage from './Pages/AlbumPage';
import NoPage from './Pages/NoPage';
import NavBar from './layouts/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // return <Home />;
  return (
    <BrowserRouter>
      <Routes path="/" element={<NavBar />}>
        <Route index exact element={<Home />} />
        <Route path="/album/:slug" element={<AlbumPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
