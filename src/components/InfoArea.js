import './../styles/styles.css';
import SpeedCalculator from './SpeedCalculator';
import AccuracyCalculator from './AccuracyCalculator';
import ResetButton from './ResetButton';

export const InfoArea = ({ inputRefState }) => {

  return (
    <div className='infoArea__wrapper'>
      <SpeedCalculator />
      <AccuracyCalculator />
      <ResetButton inputRefState={inputRefState} />
    </div>

  )
}
