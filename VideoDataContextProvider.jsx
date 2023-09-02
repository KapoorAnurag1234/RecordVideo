import {createContext, useContext, useState} from 'react';
import React from 'react';
const useVideoContextValue = () => {
  const [videoData, setVideoData] = useState([]);

  return {
    videoData,
    setVideoData,
  };
};

const VideoDataContext = createContext(null);

const VideoDataContextProvider = ({children}) => {
  const value = useVideoContextValue();
  return (
    <VideoDataContext.Provider value={value}>
      {children}
    </VideoDataContext.Provider>
  );
};

export const useVideoDataContext = () => {
  const context = useContext(VideoDataContext);

  if (!context) {
    throw new Error(
      'useAccountContext must be used inside AccountContextProvider',
    );
  }

  return context;
};

export {VideoDataContextProvider};
