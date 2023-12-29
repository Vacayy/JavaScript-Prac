import React, { useState } from 'react';

function MainContent() {
  const [message, setMessage] = useState('여기를 클릭해보세요!');

  return (
    <main className="text-center mt-4">
      <p className="mb-4">{message}</p>
      <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setMessage('환영합니다! React와 Tailwind를 사용해보세요!')}
      >
        클릭
      </button>
    </main>
  );
}

export default MainContent;
