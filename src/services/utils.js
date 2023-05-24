import { resetCurrentSymbol, setInput, setRandomTextArray, setAttemptsCount } from '../store/textAreaSlice';
import { setIsTypingStarted, setWrongLayout, setIsTypingFinished, setIsTypingBlocked } from '../store/serviceSlice';
import { setSpeed, setFinalSpeed } from '../store/speedSlice';
import { setAccuracyPercent, setFinalAccuracyPercent } from '../store/accuracySlice';
import { getRusText, getEngText } from '../services/api';

export const setNewText = async (dispatch, chosenLanguage) => {
  try {
    let newText
    if (chosenLanguage === 'russian') {
      newText = await getRusText();
    } else {
      newText = await getEngText();
    }
    dispatch(setRandomTextArray(newText));
  } catch (error) {
    console.error('Error setting new text:', error);
  }
}

const commonResetLogic = (dispatch, inputRef) => {
  dispatch(setInput(''));
  dispatch(setIsTypingBlocked(false));
  dispatch(resetCurrentSymbol());
  dispatch(setSpeed(0));
  dispatch(setAttemptsCount(0));
  dispatch(setAccuracyPercent(100));
  inputRef.focus();
};

export const buttonReset = (dispatch, inputRef, chosenLanguage) => {
  commonResetLogic(dispatch, inputRef, chosenLanguage);
  setNewText(dispatch, chosenLanguage);
  dispatch(setIsTypingStarted(false))
}

export const headerLangChangeReset = (dispatch, inputRef, chosenLanguage) => {
  commonResetLogic(dispatch, inputRef, chosenLanguage);
  dispatch(setIsTypingStarted(false))
}

export const startModalLangChangeReset = (dispatch) => {
  dispatch(setInput(''));
  dispatch(resetCurrentSymbol());
  dispatch(setSpeed(0));
  dispatch(setAttemptsCount(0));
  dispatch(setAccuracyPercent(100));
}

export const finishReset = (dispatch, inputRef, chosenLanguage) => {
  commonResetLogic(dispatch, inputRef, chosenLanguage);
  setNewText(dispatch, chosenLanguage);
  dispatch(setIsTypingFinished(false));
}

export const wrongLayoutReset = (dispatch, inputRef, chosenLanguage) => {
  commonResetLogic(dispatch, inputRef, chosenLanguage);
  setNewText(dispatch, chosenLanguage);
  dispatch(setWrongLayout(false));
}

export const finish = (dispatch, accuracyPercent, speed) => {
  dispatch(setIsTypingStarted(false))
  dispatch(setIsTypingFinished(true))
  dispatch(setFinalAccuracyPercent(accuracyPercent))
  dispatch(setFinalSpeed(speed))
}

export const handleWrongLayout = (dispatch) => {
  dispatch(setIsTypingStarted(false))
  dispatch(setIsTypingBlocked(true))
  dispatch(setWrongLayout(true))
}