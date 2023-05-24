import './../styles/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import SwitchLangElement from './SwitchLangElement';
import { setIsTypingBlocked, setIsFirstLaunch } from '../store/serviceSlice'

function StartModal() {
  const { isFirstLaunch } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const handleStartButton = () => {
    dispatch(setIsTypingBlocked(false))
    dispatch(setIsFirstLaunch(false))
  }

  return (
    <div className={isFirstLaunch ? 'modal__wrapper' : 'modal__wrapper modal__wrapper--hide'}>
      <SwitchLangElement variant='modal' />
      <span className='modal__wrapper-text'>Ты готов печатать?</span>
      <button className='modal__wrapper-btn' onClick={handleStartButton}>Поехали!</button>

    </div>
  );
}

export default StartModal;
