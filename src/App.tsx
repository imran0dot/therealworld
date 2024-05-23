import React from 'react';
import Footer from './components/shared/Footer';
import MainTitle from './components/shared/MainTitle';
import CheckListItem from './components/ui/CheckListItem';
import IconTitle from './components/ui/IconTitle';
import { FaBeer } from 'react-icons/fa';
import GiantButton from './components/ui/GiantButton';


const App: React.FC = () => {
  return (
    <div>
      <MainTitle 
      title="ARE YOU PREPARED TO WORK HARD?"
      subTitle="ASK YOURSELF"
       />
       <CheckListItem title='Celebrate your wins with people who understand' />
       <IconTitle icon={FaBeer} title='Access to multimillionaires' />
       <GiantButton>Join the Real World</GiantButton>
      <Footer></Footer>
    </div>
  );
};

export default App;