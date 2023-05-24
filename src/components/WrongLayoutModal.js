import './../styles/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { wrongLayoutReset } from '../services/utils'

function WrongLayoutModal({ inputRefState }) {
  const { wrongLayout, chosenLanguage } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const handleLayuotWarningButton = () => {
    wrongLayoutReset(dispatch, inputRefState, chosenLanguage)
  }

  const option = ((chosenLanguage === 'russian') ? 'кириллицу' : "латиницу")

  return (
    <div className={wrongLayout ? 'modal__wrapper' : 'modal__wrapper modal__wrapper--hide'}>
      <span className='modal__wrapper-text'> Смени раскладку на {option} </span>
      <button className='modal__wrapper-btn' onClick={handleLayuotWarningButton} >Начать заново!</button>
    </div>
  );
}

export default WrongLayoutModal;
