import './../styles/styles.css';
import TextArea from './TextArea';
import { InfoArea } from './InfoArea';

export const MainContainer = ({ setInputRefState, inputRefState }) => {

  return (
    <div className='mainContainer__wrapper'>
      <TextArea setInputRefState={setInputRefState} inputRefState={inputRefState} />
      <InfoArea inputRefState={inputRefState} />
    </div>
  )
}
