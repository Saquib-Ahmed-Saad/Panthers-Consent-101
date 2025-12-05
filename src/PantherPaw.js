import React, { useEffect, useState } from 'react';
import './PantherPaw.css';

function PantherPaw() {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      // Avoid paw over the main card area (center 500px width)
      let left, top;
      let tries = 0;
      do {
        left = Math.random() * (window.innerWidth - 80);
        top = Math.random() * (window.innerHeight - 80);
        tries++;
      } while (
        left > window.innerWidth / 2 - 250 &&
        left < window.innerWidth / 2 + 250 &&
        top > 100 && top < window.innerHeight - 300 &&
        tries < 10
      );
      setShow(true);
      setPos({ left, top });
      setTimeout(() => setShow(false), 2500);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return show ? (
    <div className="panther-paw" style={{ left: pos.left, top: pos.top }}>
      <span role="img" aria-label="Panther Paw" style={{ fontSize: 60 }}>
        🐾
      </span>
    </div>
  ) : null;
}

export default PantherPaw;
