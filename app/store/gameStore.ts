import { create } from 'zustand';
import words from '../data/words.json';

export type LanguagePair = 'English-Estonian' | 'English-Spanish' | 'English-German';

type Word = { id: number; eng: string; est: string; deu: string; esp: string };

export interface CardItem {
  key: string;
  pairId: number;
  text: string;
  flipped: boolean;
  found: boolean;
}

const PAIRS = 8;
const SECOND_LANGUAGE: Record<LanguagePair, keyof Omit<Word, 'id' | 'eng'>> = {
  'English-Estonian': 'est',
  'English-Spanish': 'esp',
  'English-German': 'deu',
};

const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const createCards = (language: LanguagePair): CardItem[] => {
  const second = SECOND_LANGUAGE[language];
  const picked = shuffle(words as Word[]).slice(0, PAIRS);
  return shuffle(
    picked.flatMap((word) => [
      { key: `${word.id}-eng`, pairId: word.id, text: word.eng, flipped: false, found: false },
      { key: `${word.id}-${second}`, pairId: word.id, text: word[second], flipped: false, found: false },
    ]),
  );
};

interface GameState {
  language: LanguagePair;
  cards: CardItem[];
  openKeys: string[];
  matchedPairs: number;
  seconds: number;
  isTimerActive: boolean;
  isWon: boolean;

  newGame: (language?: LanguagePair) => void;
  flipCard: (key: string) => void;
  tick: () => void;
}

export const TOTAL_PAIRS = PAIRS;

export const useGameStore = create<GameState>((set, get) => ({
  language: 'English-Estonian',
  cards: [],
  openKeys: [],
  matchedPairs: 0,
  seconds: 0,
  isTimerActive: false,
  isWon: false,

  newGame: (language = get().language) =>
    set({
      language,
      cards: createCards(language),
      openKeys: [],
      matchedPairs: 0,
      seconds: 0,
      isTimerActive: false,
      isWon: false,
    }),

  flipCard: (key) => {
    const { cards, openKeys, isWon } = get();
    const card = cards.find((c) => c.key === key);
    if (isWon || !card || card.flipped || card.found || openKeys.length === 2) return;

    const flipped = cards.map((c) => (c.key === key ? { ...c, flipped: true } : c));
    const nextOpen = [...openKeys, key];
    set({ cards: flipped, openKeys: nextOpen, isTimerActive: true });

    if (nextOpen.length < 2) return;

    const [first, second] = nextOpen.map((k) => flipped.find((c) => c.key === k)!);
    if (first.pairId === second.pairId) {
      const matchedPairs = get().matchedPairs + 1;
      const isWon = matchedPairs === PAIRS;
      set({
        cards: flipped.map((c) => (c.pairId === first.pairId ? { ...c, found: true } : c)),
        openKeys: [],
        matchedPairs,
        isWon,
        isTimerActive: !isWon,
      });
      return;
    }

    setTimeout(() => {
      set((state) => ({
        cards: state.cards.map((c) => (nextOpen.includes(c.key) ? { ...c, flipped: false } : c)),
        openKeys: [],
      }));
    }, 1000);
  },

  tick: () => set((state) => ({ seconds: state.seconds + 1 })),
}));

export const formatTime = (seconds: number) =>
  `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
