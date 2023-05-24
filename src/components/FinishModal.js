import './../styles/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { finishReset } from '../services/utils'

function FinishModal({ inputRefState }) {
  const { isTypingFinished, chosenLanguage } = useSelector((state) => state.service);
  const { finalSpeed } = useSelector((state) => state.speed);
  const { finalAccuracyPercent } = useSelector((state) => state.accuracy);
  const dispatch = useDispatch();

  const handleResetAfterFinishButton = () => {
    finishReset(dispatch, inputRefState, chosenLanguage)
  }

  return (
    <div className={isTypingFinished ? 'modal__wrapper' : 'modal__wrapper modal__wrapper--hide'}
    >
      <div className='modal__wrapper--finish'>
        <span className='modal__wrapper-text'>Молодец! Вот твои результаты: <br /> Скорость {finalSpeed} зн./мин.<br /> Точность {finalAccuracyPercent}%. </span>
        <div>
          <button className='modal__wrapper-btn' onClick={handleResetAfterFinishButton}> Попробовать ещё</button>
        </div>
      </div>
    </div>
  );
}

export default FinishModal;