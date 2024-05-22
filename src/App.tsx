import React from 'react';
import Footer from './components/shared/Footer';
import MainTitle from './components/shared/MainTitle';

const App: React.FC = () => {
  return (
    <div>
      <MainTitle 
      title="ARE YOU PREPARED TO WORK HARD?"
      subTitle="ASK YOURSELF"
       />
      <Footer></Footer>
    </div>
  );
};

export default App;