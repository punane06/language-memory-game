import React, { useEffect, useState } from 'react';

interface TimerProps {
  isActive: boolean;
  onTimeUpdate: (formattedTime: string) => void;
}

const Timer: React.FC<TimerProps> = ({ isActive, onTimeUpdate }) => {
  const [timeElapsed, setTimeElapsed] = useState(0); // Time in seconds

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (isActive) {
      timerId = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else if (timerId) {
      clearInterval(timerId);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isActive]);

  useEffect(() => {
   
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    onTimeUpdate(formattedTime);
  }, [timeElapsed, onTimeUpdate]);

  return null; 
};

export default Timer;
