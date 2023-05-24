import './App.css';
import FinishModal from './components/FinishModal';
import Header from './components/Header';
import WrongLayoutModal from './components/WrongLayoutModal';
import { MainContainer } from './components/MainContainer';
import StartModal from './components/StartModal';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const [inputRefState, setInputRefState] = useState(null);
  const { wrongLayout, isTypingBlocked, isTypingFinished } = useSelector(state => state.service);
  return (
    <div>
      <StartModal />
      <FinishModal inputRefState={inputRefState} />
      <WrongLayoutModal inputRefState={inputRefState} />
      <div className={isTypingBlocked || isTypingFinished || wrongLayout ? 'app__wrapper app__wrapper--blurred' : 'app__wrapper'}>
        <Header inputRefState={inputRefState} />
        <MainContainer setInputRefState={setInputRefState} inputRefState={inputRefState} />
      </div>
    </div>
  );
}

export default App;
