import React from 'react';
import Button from './components/customizibleButton';
import './App.css'; 

const App: React.FC = () => {
  
  const goToGame = () => {
    window.location.href = 'https://www.crazygames.com/game/soccer-legends-2021'; 
  };

  return (
    <div>
      <Button
        text="Play Game"
        backgroundColor="green"
        hoverColor="Silver"
        textColor="white"
        padding="80px 160px"
        fontSize="18px"
        borderRadius="30px"
        scaleOnHover={1.1}
        animation="bounce"
        animationDuration="2.6s"
        onClick={goToGame} 
      />
    </div>
  );
};

export default App;
