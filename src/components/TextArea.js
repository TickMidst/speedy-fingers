import './../styles/styles.css';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAttemptsCount, setInput, changeRandomTextArraySymbolClassname, increaseCurrentSymbol } from './../store/textAreaSlice'
import { setIsTypingStarted } from './../store/serviceSlice'
import { setNewText, finish, handleWrongLayout } from '../services/utils'

function TextArea({ setInputRefState, inputRefState }) {
  const { currentSymbol, randomTextArray, input, attemptsCount } = useSelector((state) => state.textArea);
  const { isTypingStarted, isTypingFinished, isTypingBlocked, chosenLanguage } = useSelector((state) => state.service);
  const { accuracyPercent } = useSelector((state) => state.accuracy);
  const { speed } = useSelector((state) => state.speed);
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  useEffect(() => {
    setInputRefState(inputRef.current);
  }, [setInputRefState]);

  function isCyrillicCharacter(inputChar) {
    const cyrillicPattern = /^[\u0400-\u04FF]+$/;
    return cyrillicPattern.test(inputChar);
  }

  function isLatinCharacter(inputChar) {
    const latinPattern = /^[a-zA-Z]+$/;
    return latinPattern.test(inputChar);
  }

  useEffect(() => {
    if (!isTypingBlocked) {
      inputRefState.focus();
    }
  }, [isTypingBlocked]);

  const inputToTextComparison = (lastSymbol, wholeValue) => {
    if (randomTextArray[currentSymbol].symbol === lastSymbol) {
      dispatch(setInput(wholeValue))
      dispatch(changeRandomTextArraySymbolClassname({ index: currentSymbol, className: 'textArea__text-symbol--general textArea__text-symbol--success' }));
      dispatch(setAttemptsCount(attemptsCount + 1))
      if (wholeValue.length === randomTextArray.length) {
        finish(dispatch, accuracyPercent, speed)
        return
      }
      dispatch(increaseCurrentSymbol())
    } else {
      dispatch(setAttemptsCount(attemptsCount + 1))
      dispatch(changeRandomTextArraySymbolClassname({ index: currentSymbol, className: 'textArea__text-symbol--general textArea__text-symbol--fail' }));
    }
  }

  useEffect(() => {
    setNewText(dispatch, chosenLanguage)
  }, [chosenLanguage]);

  const handleInputChange = (e) => {
    if (isTypingStarted === false) {
      dispatch(setIsTypingStarted(true))
    }
    if (isTypingFinished) {
      return
    }
    let lastSymbol = e.target.value[e.target.value.length - 1]
    if (chosenLanguage === 'russian' && isLatinCharacter(lastSymbol)) {
      handleWrongLayout(dispatch)
    } else if (chosenLanguage === 'english' && isCyrillicCharacter(lastSymbol)) {
      handleWrongLayout(dispatch)
    }
    else {
      let wholeValue = e.target.value
      inputToTextComparison(lastSymbol, wholeValue)
    }
  };

  return (
    <div className='textArea__wrapper'>

      <p className='textArea__text'>
        {randomTextArray.map((e, index) => {
          return (
            <span className={e.className} key={index}>
              {e.symbol}
            </span>
          )
        })}
      </p>

      <input className='textArea__input' ref={inputRef} onChange={handleInputChange} value={input} type='text'></input>
    </div>
  );
}

export default TextArea;