import React, { useState } from 'react';
import { Shield, Swords } from 'lucide-react';
import { Character, BattleResult } from '../types';
import { useCharacter } from '../context/CharacterContext';

const Battle: React.FC = () => {
  const { characters, selectedCharacter, selectCharacter } = useCharacter();
  const [battleResult, setBattleResult] = useState<BattleResult | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const opponent: Character = {
    name: '중대푸앙이',
    description: '커피의 정령, 중앙대 물가에 나타난다는 전설이 존재한다',
    imageUrl: 'https://unpeil.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb39a83d5-3e14-42c5-aafa-500aaa4bbdad%2F45b2a1dd-e053-4ee8-bfe4-b159993bc576%2Fpuang-joycaption10_00189_.png?table=block&id=12f22da6-a6d6-81ed-b666-f2ebf13c7923&userId=&cache=v2',
  };

  const battleDescriptions = [
    "그의 승리였다, 강렬한 빛이 전장을 가로질렀다. 모든 것이 멈춘 듯한 그 순간, 승리자의 위용이 드러났다. 관중들은 숨을 죽인 채 이 역사적인 순간을 지켜보았고, 마침내 환호성이 터져 나왔다. 이것이 바로 진정한 챔피언의 모습이었다.",
    "그가 승리하였다! 시간이 멈춘 듯한 그 순간, 완벽한 전략이 빛을 발했다. 모든 움직임이 마치 미리 짜여진 각본처럼 완벽했고, 승리는 이미 정해져 있었다. 이는 단순한 승리가 아닌, 전설의 탄생이었다.",
    "그가 승리하였다! 전설적인 순간이 펼쳐졌다. 모든 준비와 노력이 이 한 순간을 위한 것이었다. 승리자의 기술은 마치 예술작품과도 같았고, 이 날의 승리는 오랫동안 사람들의 기억에 남을 것이다."
  ];

  const getRandomDescription = () => {
    const randomIndex = Math.floor(Math.random() * battleDescriptions.length);
    return battleDescriptions[randomIndex];
  };

  const handleBattle = () => {
    if (!selectedCharacter) {
      alert('먼저 캐릭터를 선택해주세요!');
      return;
    }

    setIsAnimating(true);
    setBattleResult(null);
    
    setTimeout(() => {
      const isPlayerWinner = Math.random() > 0.5;
      const winner = isPlayerWinner ? selectedCharacter : opponent;
      const loser = isPlayerWinner ? opponent : selectedCharacter;
      
      setBattleResult({
        winner,
        loser,
        description: `${winner.name}의 승리! ${getRandomDescription()}`
      });
      setIsAnimating(false);
    }, 2000);
  };

  if (characters.length === 0) {
    return (
      <div className="py-6 text-center">
        <h2 className="text-2xl font-bold mb-6 text-primary-700">배틀</h2>
        <p className="text-gray-600">홈 화면에서 먼저 캐릭터를 생성해주세요!</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary-700">
        배틀
      </h2>
      
      <div className="flex flex-col items-center space-y-8">
        <div className="w-full max-w-md bg-white p-4 rounded-xl shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-4 text-primary-700">내 캐릭터 선택</h3>
          <div className="grid grid-cols-2 gap-4">
            {characters.map((char) => (
              <div
                key={char.id}
                onClick={() => selectCharacter(char)}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                  selectedCharacter?.id === char.id
                    ? 'border-primary-500 shadow-lg transform scale-105'
                    : 'border-transparent hover:border-primary-200'
                }`}
              >
                <img
                  src={char.imageUrl}
                  alt={char.name}
                  className="w-full h-24 object-cover"
                />
                <div className="p-2">
                  <p className="font-medium text-sm truncate">{char.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-center">상대 캐릭터</h3>
          
          <div className="border border-gray-200 p-4 rounded-lg mb-4">
            <img
              src={opponent.imageUrl}
              alt={opponent.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{opponent.name}</h4>
                <p className="text-sm text-gray-600">{opponent.description}</p>
              </div>
              <Shield className="h-10 w-10 text-accent-500" />
            </div>
          </div>
          
          <div className={`flex justify-center my-6 ${isAnimating ? 'animate-bounce-slow' : ''}`}>
            <Swords className="h-16 w-16 text-primary-600" />
          </div>
          
          <div className="border border-gray-200 p-4 rounded-lg mb-4">
            {selectedCharacter?.imageUrl && (
              <img
                src={selectedCharacter.imageUrl}
                alt={selectedCharacter.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">{selectedCharacter?.name}</h4>
                <p className="text-sm text-gray-600">{selectedCharacter?.description}</p>
              </div>
              <Shield className="h-10 w-10 text-primary-500" />
            </div>
          </div>
          
          {battleResult && (
            <div className="space-y-4 mb-4">
              <div className="text-center p-3 rounded-lg bg-primary-50">
                <p className="text-lg font-bold text-primary-700">
                  {battleResult.description}
                </p>
              </div>
              <div className="relative">
                <img
                  src={battleResult.winner.imageUrl}
                  alt="Winner"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  승리
                </div>
              </div>
            </div>
          )}
          
          <button
            onClick={handleBattle}
            disabled={isAnimating || !selectedCharacter}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition duration-200 transform hover:scale-105 ${
              isAnimating || !selectedCharacter
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-primary-600 hover:bg-primary-700 shadow-md'
            }`}
          >
            {isAnimating ? '대결 중...' : !selectedCharacter ? '캐릭터를 선택해주세요' : '배틀 시작!'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Battle;