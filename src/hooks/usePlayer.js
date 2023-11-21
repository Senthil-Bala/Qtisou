import { create } from 'zustand';
import albumArt from '../Assets/images/album-Img.jpeg';
const usePlayer = create((set, get) => ({
  title: 'Memories',
  album: 'Xyz',
  artists: 'Maroon 5',
  cover: albumArt,
}));

export default usePlayer;
