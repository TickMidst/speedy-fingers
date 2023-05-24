import './../styles/styles.css';
import reset_icon from './../assets/images/reset_icon.svg'
import { useSelector, useDispatch } from 'react-redux';
import { buttonReset } from '../services/utils'

function ResetButton({ inputRefState }) {
  const { chosenLanguage } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const handleReset = () => {
    buttonReset(dispatch, inputRefState, chosenLanguage)
  }

  return (
    <div onClick={handleReset} className='resetBtn__wrapper'>
      <img src={reset_icon} className='resetBtn__icon element-icon' ></img>
      <span className='resetBtn__text'>
        Заново
      </span>
    </div>

  );
}

export default ResetButton;