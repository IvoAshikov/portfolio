import React, { useEffect, useRef, useState } from "react";
import "../components-css/Loader.css";

function Loader() {
  const [positions, setPositions] = useState([1, 2, 3, 4]);
  const [count, setCount] = useState(0);

  const ref = useRef(null);
  let interval;

  useEffect(() => {
    let currentCount = 1;
    interval = setInterval(() => {
      setPositions([...shuffleArray(positions)]);
      setCount(currentCount);
      if (currentCount === 4) {
        setPositions([1, 2, 4, 3]);
        clearInterval(interval);
      }
      currentCount++;
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="logo-container-loader" ref={ref}>
          <svg className="lines" style={{ width: "100%", height: "100%" }}>
            <line x1="0" y1="0" x2="0" y2="100%" strokeWidth="5px" className={count >= 1 ? "path1 anim" : "path1"} />
            <line x1="0" y1="0" x2="100%" y2="0" strokeWidth="5px" className={count >= 2 ? "path2 anim" : "path2"} />
            <line x1="100%" y1="0" x2="100%" y2="100%" strokeWidth="5px" className={count >= 3 ? "path3 anim" : "path3"} />
            <line x1="0" y1="100%" x2="100%" y2="100%" strokeWidth="5px" className={count >= 4 ? "path4 anim" : "path4"} />
          </svg>
          <p className={`letter pos${positions[2]}`}>I</p>
          <p className={`letter pos${positions[3]}`}>V</p>
          <p className={`letter pos${positions[1]}`}>O</p>
          <p className={`letter pos${positions[0]}`}>A</p>
        </div>
      </div>
    </>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Loader;
