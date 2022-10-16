import React, {useState} from 'react';
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
  
const Story = () => {
  const [state, setState] = useState({
    audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      }
  })
  function handleAudioStop(data) {
      console.log(data)
      setState({ audioDetails: data });
  }
  
  function handleAudioUpload(file) {
      console.log(file);
  }
  
  function handleCountDown(data) {
      console.log(data);
  }
  
  function handleReset() {
      const reset = {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      };
      setState({ audioDetails: reset });
    }
  return (
    <div>
      <div className='flex-container'>
        <h1>Storytelling Coherence</h1>
        <img src={require('../story.png')} id='story_pic'/>
      </div>
      <Recorder
        record={true}
        title={"New recording"}
        audioURL={state.audioDetails.url}
        showUIAudio
        handleAudioStop={data => handleAudioStop(data)}
        handleAudioUpload={data => handleAudioUpload(data)}
        handleCountDown={data => handleCountDown(data)}
        handleReset={() => handleReset()}
        mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
      />
    </div>
  );
};
  
export default Story;