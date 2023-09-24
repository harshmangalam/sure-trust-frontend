import { useEffect, useRef, useState } from "react";

export default function BackgroundSound() {
  const [played, setPlayed] = useState(false);
  const audioRef = useRef();
  const divRef = useRef();
  useEffect(() => {
    async function initSound() {
      try {
        const audio = audioRef.current;
        if (!audio?.paused || played) return;
        await audio?.play();
        setPlayed(true);
      } catch (error) {
        console.log(error);
      }
    }
    document.addEventListener("click", initSound);
    return () => {
      document.removeEventListener("click", initSound);
    };
  }, [played]);
  return (
    <div ref={divRef}>
      <audio hidden ref={audioRef} src="sound.mp3" autoPlay playsInline />
    </div>
  );
}
