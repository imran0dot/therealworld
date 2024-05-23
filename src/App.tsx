import React from 'react';
import Footer from './components/shared/Footer';
import MainTitle from './components/shared/MainTitle';
import CheckListItem from './components/ui/CheackListItem';

const App: React.FC = () => {
  return (
    <div>
      <MainTitle 
      title="ARE YOU PREPARED TO WORK HARD?"
      subTitle="ASK YOURSELF"
       />
       <CheckListItem title='Celebrate your wins with people who understand' />
      <Footer></Footer>
    </div>
  );
};

export default App;