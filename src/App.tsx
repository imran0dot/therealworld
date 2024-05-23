import React from 'react';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      {/* pages  */}
      <Home />
      <Footer></Footer>
    </div>
  );
};

export default App;