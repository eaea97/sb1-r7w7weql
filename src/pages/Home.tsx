import React from 'react';
import CharacterForm from '../components/CharacterForm';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <div className="w-full max-w-md">
        <CharacterForm />
      </div>
    </div>
  );
};

export default Home;