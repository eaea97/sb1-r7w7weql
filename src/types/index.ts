export interface Character {
  id?: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface BattleResult {
  winner: Character;
  loser: Character;
  description: string;
}