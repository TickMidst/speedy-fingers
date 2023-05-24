import './../styles/styles.css';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSpeed } from '../store/speedSlice'
import speed_icon from './../assets/images/speed_icon.svg'

function SpeedCalculator() {
  const { speed } = useSelector((state) => state.speed);
  const { input } = useSelector((state) => state.textArea);
  const { isTypingStarted, isTypingBlocked, isTypingFinished } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const [startTimeMillisecs, setStartTimeMillisecs] = useState(null);
  const [intervalTime, setIntervalTime] = useState(0);
  const [isNewLaunch, setIsNewLaunch] = useState(true);
  const intervalId = useRef(null)

  const calculateSpeed = () => {
    const endTimeMillisecs = Date.now()
    const numCharacters = input.length;
    const rawSecs = (endTimeMillisecs - startTimeMillisecs) / 1000;
    const elapsedSecs = Math.floor(rawSecs)
    const elapsedMins = elapsedSecs / 60
    const speed = Math.round(numCharacters / elapsedMins);
    dispatch(setSpeed(speed))
    setIntervalTime(intervalTime + 1)
  }

  useEffect(() => {
    if (isTypingFinished) {
      setIntervalTime(0)
      setStartTimeMillisecs(null)
      setIsNewLaunch(true)
      clearInterval(intervalId.current)
      intervalId.current = null
      return
    }
    if (!isTypingStarted) {
      setIsNewLaunch(true)
      return
    }
    if (isNewLaunch) {
      setStartTimeMillisecs(Date.now())
      setIsNewLaunch(false)
    }
    intervalId.current = setInterval(calculateSpeed, 1000)
    return () => { clearInterval(intervalId.current) };
  }, [isTypingStarted, isTypingBlocked, intervalTime]);

  return (
    <div className='infoArea__element'>
      <div className='infoArea__element-title_line'>
        <img className='infoArea__element-icon element-icon'
          src={speed_icon}
        />
        <h4 className='infoArea__element-title'>Скорость</h4>
      </div>
      <span className='infoArea__element-subtitle'>
        <span className='infoArea__element-subtitle--accent'>{speed} </span>
        ЗН./МИН</span>
    </div>
  );
}

export default SpeedCalculator;