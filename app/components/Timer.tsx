'use client'
import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

const Timer = () => {
  const isActive = useGameStore((state) => state.isTimerActive);
  const tick = useGameStore((state) => state.tick);

  useEffect(() => {
    if (!isActive) return;
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [isActive, tick]);

  return null;
};

export default Timer;
