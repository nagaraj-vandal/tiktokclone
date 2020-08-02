import React from 'react';
import './App.css';
import Video from './Video';

function App()
{
  return (
    <div className="app">
      <div className="app_videos">
        <Video>This is a Video</Video>
        <Video>This is a Video</Video>
        <Video>This is a Video</Video>
        <Video>This is a Video</Video>
      </div>

    </div>
  );
}

export default App;
