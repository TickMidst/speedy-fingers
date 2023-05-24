import './../styles/styles.css';
import React, { useEffect } from 'react';
import accuracy_icon from './../assets/images/accuracy_icon.svg'
import { useSelector, useDispatch } from 'react-redux';
import { setAccuracyPercent } from './../store/accuracySlice'
import { setAttemptsCount } from './../store/textAreaSlice'

function AccuracyCalculator() {
  const { input, attemptsCount } = useSelector((state) => state.textArea);
  const { isTypingStarted, isTypingFinished, chosenLanguage } = useSelector((state) => state.service);
  const { accuracyPercent } = useSelector((state) => state.accuracy);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTypingFinished || !isTypingStarted) {
      return
    }
    calculateAccuracy()
  }, [isTypingStarted, attemptsCount])

  useEffect(() => {
    dispatch(setAttemptsCount(0))
    dispatch(setAccuracyPercent(100))
  }, [chosenLanguage])

  const calculateAccuracy = () => {
    let newPercent = (input.length / attemptsCount) * 100
    dispatch(setAccuracyPercent(Math.round(newPercent)))
  }
  
  return (
    <div className='infoArea__element AccuracyCalculator__wrapper'>
      <div className='infoArea__element-title_line'>
        <img className='infoArea__element-icon element-icon' src={accuracy_icon} />
        <h4 className='infoArea__element-title'>Точность</h4>
      </div>
      <span className='infoArea__element-subtitle'>
        <span className='infoArea__element-subtitle--accent'>{Number.isNaN(accuracyPercent) ? '100' : accuracyPercent}</span>
        %
      </span>
    </div>
  );
}

export default AccuracyCalculator;