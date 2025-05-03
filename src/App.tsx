import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { CharacterProvider } from './context/CharacterContext';

function App() {
  return (
    <CharacterProvider>
      <RouterProvider router={router} />
    </CharacterProvider>
  );
}

export default App