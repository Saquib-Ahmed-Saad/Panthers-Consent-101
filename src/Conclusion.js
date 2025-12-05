import React, { useEffect, useRef } from 'react';

function Conclusion({ score, total }) {
  // Calculate performance message
  let performance = '';
  let imgSrc = '';
  let soundSrc = '';
  if (score === total) {
    imgSrc = process.env.PUBLIC_URL + '/correct.png';
    soundSrc = process.env.PUBLIC_URL + '/correct.mp3';
    performance = 'Excellent! You answered all questions correctly.';
  } else if (score > 0) {
    imgSrc = process.env.PUBLIC_URL + '/tryharder.png';
    soundSrc = process.env.PUBLIC_URL + '/tryharder.mp3';
    performance = 'Good effort! Review the core concepts to improve.';
  } else {
    imgSrc = process.env.PUBLIC_URL + '/wrong.png';
    soundSrc = process.env.PUBLIC_URL + '/wrong.mp3';
    performance = 'Keep learning! Understanding consent is important.';
  }

  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [soundSrc]);

  return (
    <div className="conclusion-page">
      {imgSrc && (
        <img src={imgSrc} alt="result" style={{ maxWidth: '180px', maxHeight: '120px', marginBottom: 16 }} />
      )}
      <audio ref={audioRef} src={soundSrc} />
      <h2>Quiz Complete!</h2>
      <p>Your Score: {score} / {total}</p>
      <p>{performance}</p>
      <button onClick={() => window.location.reload()} style={{ margin: '16px 0', padding: '10px 24px', fontSize: '1em', borderRadius: 8, background: '#1976d2', color: '#fff', border: 'none', cursor: 'pointer' }}>Try Again</button>
      <h3>The Core of Consent</h3>
      <p>
        Consent means giving permission for something to happen or agreeing to do something. Practicing consent helps you respect others and make conscious decisions. By understanding and applying consent, you help create a safer, more respectful environment for everyone.
      </p>
      <p>
        This quiz helps you keep a conscious mind about boundaries, respect, and communication. Remember, consent is ongoing and can be withdrawn at any time.
      </p>
    </div>
  );
}

export default Conclusion;
