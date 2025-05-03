import React, { createContext, useContext, useState } from 'react';
import { Character } from '../types';

interface CharacterContextType {
  characters: Character[];
  selectedCharacter: Character | null;
  addCharacter: (character: Character) => void;
  selectCharacter: (character: Character) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const addCharacter = (character: Character) => {
    if (characters.length >= 5) {
      alert('최대 5개의 캐릭터만 저장할 수 있습니다.');
      return;
    }
    const newCharacter = { ...character, id: Date.now().toString() };
    setCharacters(prev => [...prev, newCharacter]);
    setSelectedCharacter(newCharacter);
  };

  const selectCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <CharacterContext.Provider value={{ characters, selectedCharacter, addCharacter, selectCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};