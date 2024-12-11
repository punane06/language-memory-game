import { create } from 'zustand';

interface CardItem {
  id: number;
  text: string;
  matched?: boolean;
}

interface GameState {
  isTimerActive: boolean;
  timeElapsed: string;
  matchesFound: number;
  totalMatches: number;
  cardsData: CardItem[];
  openCards: number[];
  matchedPairs: number;
  currentLanguage: string;
  
  // Actions
  setTimeElapsed: (time: string) => void;
  startTimer: () => void;
  stopTimer: () => void;
  handleCardClick: (cardId: number) => void;
  resetGame: () => void;
  setCardsData: (cards: CardItem[]) => void;
  handleLanguageChange: (language: string) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  isTimerActive: false,
  timeElapsed: '00:00',
  matchesFound: 0,
  totalMatches: 8,
  cardsData: [],
  openCards: [],
  matchedPairs: 0,
  currentLanguage: 'en',

  setTimeElapsed: (time) => set({ timeElapsed: time }),
  
  startTimer: () => set({ isTimerActive: true }),
  
  stopTimer: () => set({ isTimerActive: false }),

  handleCardClick: (cardId) => {
    const { openCards, cardsData, matchedPairs } = get();
    
    // If two cards are already open, return
    if (openCards.length === 2) return;
    
    // If card is already matched, return
    const clickedCard = cardsData.find(card => card.id === cardId);
    if (clickedCard?.matched) return;

    // Start timer on first card click
    if (!get().isTimerActive) {
      get().startTimer();
    }

    // Add card to open cards
    const newOpenCards = [...openCards, cardId];
    set({ openCards: newOpenCards });

    // Check for match if two cards are open
    if (newOpenCards.length === 2) {
      const [firstCardId, secondCardId] = newOpenCards;
      const firstCard = cardsData.find(card => card.id === firstCardId);
      const secondCard = cardsData.find(card => card.id === secondCardId);

      if (firstCard && secondCard && firstCard.text === secondCard.text) {
        // Match found
        const newCardsData = cardsData.map(card => 
          card.id === firstCardId || card.id === secondCardId
            ? { ...card, matched: true }
            : card
        );
        
        const newMatchedPairs = matchedPairs + 1;
        set({ 
          cardsData: newCardsData,
          matchedPairs: newMatchedPairs,
          openCards: []
        });

        // Check if game is complete
        if (newMatchedPairs === get().totalMatches) {
          get().stopTimer();
        }
      } else {
        // No match - close cards after delay
        setTimeout(() => {
          set({ openCards: [] });
        }, 1000);
      }
    }
  },

  resetGame: () => {
    set({
      isTimerActive: false,
      timeElapsed: '00:00',
      matchesFound: 0,
      openCards: [],
      matchedPairs: 0,
      cardsData: get().cardsData.map(card => ({ ...card, matched: false }))
    });
  },

  setCardsData: (cards) => set({ cardsData: cards }),
  
  handleLanguageChange: (language) => set({ currentLanguage: language }),
}));
