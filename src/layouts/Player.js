import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import musicFile from '../Assets/memories.mp3';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import './playerStyle.css';
import usePlayer from '../hooks/usePlayer';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(musicFile);
  const [time, setTime] = useState({
    min: '',
    sec: '',
  });
  const [currTime, setCurrTime] = useState({
    min: '',
    sec: '',
  });

  const [seconds, setSeconds] = useState(0);

  const { title, artists, cover } = usePlayer(state => ({
    title: state.title,
    artists: state.artists,
    cover: state.cover,
  }));

  // console.log(album, '***Title');

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);
  // useEffect(() => {}, []);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (title !== 'Memories') {
      playingButton();
    }
  }, [title]);

  return (
    <div className="flex  justify-center  w-full px-4 py-2 ">
      <div className="flex h-20 w-3/12  ">
        <img
          src={cover}
          alt="album"
          className="h-28 md:h-20 md:mr-5 w-20 rounded-lg"
        />
        <div className="hidden md:flex flex-col gap-2">
          <h1>Song: {title}</h1>
          <h3>Artist: {artists}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-9/12 px-4 md:px-8">
        <div className="flex flex-col justify-center items-center md:hidden text-sm">
          <h3>{title}</h3>
          <div>by {artists}</div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className=" flex justify-between w-full text-sm">
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>
              {time.min}:{time.sec}
            </p>
          </div>
          <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className="w-full"
            onChange={e => {
              sound.seek([e.target.value]);
            }}
          />
        </div>
        <div>
          <button className="playButton">
            <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className="playButton">
            <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
