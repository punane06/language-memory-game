import { useState, useCallback } from 'react';

interface GameState {
  selectedLanguage: string;
  isTimerActive: boolean;
  matchesFound: number;
  timeElapsed: string;
  totalMatches: number;
}

interface UseGameState {
  gameState: GameState;
  handleLanguageChange: (language: string) => void;
  handleCardClick: () => void;
  handleMatchFound: () => void;
  handleGameReset: () => void;
  setTimeElapsed: (time: string) => void;
}

export const useGameState = (): UseGameState => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English-Estonian');
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [matchesFound, setMatchesFound] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState('00:00');
  const totalMatches = 8;

  const handleLanguageChange = useCallback((language: string) => {
    setSelectedLanguage(language);
  }, []);

  const handleCardClick = useCallback(() => {
    if (!isTimerActive) {
      setIsTimerActive(true);
    }
  }, [isTimerActive]);

  const handleMatchFound = useCallback(() => {
    setMatchesFound((prev) => {
      const newCount = prev + 1;
      if (newCount === totalMatches) {
        setIsTimerActive(false);
      }
      return newCount;
    });
  }, [totalMatches]);

  const handleGameReset = useCallback(() => {
    setIsTimerActive(false);
    setMatchesFound(0);
    setTimeElapsed('00:00');
  }, []);

  return {
    gameState: {
      selectedLanguage,
      isTimerActive,
      matchesFound,
      timeElapsed,
      totalMatches,
    },
    handleLanguageChange,
    handleCardClick,
    handleMatchFound,
    handleGameReset,
    setTimeElapsed,
  };
};
