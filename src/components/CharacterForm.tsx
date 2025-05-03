import React, { useState, useRef } from 'react';
import { Character } from '../types';
import { useCharacter } from '../context/CharacterContext';
import { Shield } from 'lucide-react';

const CharacterForm: React.FC = () => {
  const { characters, addCharacter, selectedCharacter, selectCharacter } = useCharacter();
  const [character, setCharacter] = useState<Character>({
    name: '',
    description: '',
    imageUrl: '',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCharacter((prev) => ({
          ...prev,
          imageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCharacter(character);
    setCharacter({ name: '', description: '', imageUrl: '' });
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {characters.map((char) => (
          <div
            key={char.id}
            onClick={() => selectCharacter(char)}
            className={`w-48 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
              selectedCharacter?.id === char.id ? 'ring-2 ring-primary-500' : ''
            }`}
          >
            <img
              src={char.imageUrl}
              alt={char.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{char.name}</h3>
                <Shield className="h-5 w-5 text-primary-500" />
              </div>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {char.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-700">
          새 캐릭터 만들기
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div 
            onClick={handleImageClick}
            className="relative cursor-pointer group"
          >
            {character.imageUrl ? (
              <img
                src={character.imageUrl}
                alt="Character Preview"
                className="w-full h-48 object-cover rounded-lg shadow-md transition-opacity group-hover:opacity-80"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 rounded-lg shadow-md flex items-center justify-center transition-colors group-hover:bg-gray-200">
                <p className="text-gray-500">클릭하여 이미지 업로드</p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              캐릭터 이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={character.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200"
              placeholder="캐릭터 이름을 입력하세요"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              캐릭터 설명
            </label>
            <textarea
              id="description"
              name="description"
              value={character.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-200"
              placeholder="캐릭터에 대한 설명을 입력하세요"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition duration-200 transform hover:scale-105"
              disabled={characters.length >= 5}
            >
              {characters.length >= 5 ? '캐릭터 제한 도달' : '저장하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CharacterForm;