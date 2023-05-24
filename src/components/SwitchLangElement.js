import './../styles/styles.css';

import { useSelector, useDispatch } from 'react-redux';
import { switchLanguage } from '../store/serviceSlice'
import keyboard_icon from './../assets/images/keyboard_icon.svg'
import { headerLangChangeReset, startModalLangChangeReset } from '../services/utils'

function SwitchLangElement({ variant, inputRefState }) {
  const { chosenLanguage } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  let wrapperClass = '';
  let textClass = '';
  let iconClass = '';

  if (variant === 'modal') {
    wrapperClass = 'switchLangElement_wrapper--modal';
    textClass = 'switchLangElement_text--modal';
    iconClass = 'element-icon--hidden';
  } else {
    wrapperClass = 'switchLangElement_wrapper--header';
    textClass = 'switchLangElement_text--header';
    iconClass = 'element-icon';
  }

  const handleSwitchLangButton = () => {
    if (chosenLanguage === 'russian') {
      dispatch(switchLanguage('english'))
    } else {
      dispatch(switchLanguage('russian'))
    }
    if (variant === 'modal') {
      startModalLangChangeReset(dispatch, inputRefState, chosenLanguage)
    } else headerLangChangeReset(dispatch, inputRefState, chosenLanguage)
  }
  return (
    <div className={wrapperClass} onClick={handleSwitchLangButton}>
      <img className={iconClass} src={keyboard_icon} />
      <span className={textClass}>
        Сменить язык
      </span>
    </div>
  );
}

export default SwitchLangElement;