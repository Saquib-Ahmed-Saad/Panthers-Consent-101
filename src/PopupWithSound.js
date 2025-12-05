import React, { useEffect, useRef } from 'react';

function PopupWithSound({ type, onClose }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [type]);

  let imgSrc = '';
  let soundSrc = '';
  if (type === 'correct') {
    imgSrc = process.env.PUBLIC_URL + '/correct.png';
    soundSrc = process.env.PUBLIC_URL + '/correct.mp3';
  } else if (type === 'tryharder') {
    imgSrc = process.env.PUBLIC_URL + '/tryharder.png';
    soundSrc = process.env.PUBLIC_URL + '/tryharder.mp3';
  } else {
    imgSrc = process.env.PUBLIC_URL + '/wrong.png';
    soundSrc = process.env.PUBLIC_URL + '/wrong.mp3';
  }

  return (
    <div className="popup-with-sound" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
      <img src={imgSrc} alt={type} style={{ maxWidth: '80vw', maxHeight: '60vh', marginBottom: 24 }} />
      <audio ref={audioRef} src={soundSrc} />
      <button onClick={onClose} style={{ padding: '10px 24px', fontSize: '1.1em', borderRadius: 8, background: '#1976d2', color: '#fff', border: 'none', cursor: 'pointer' }}>Continue</button>
    </div>
  );
}

export default PopupWithSound;
