import './../styles/styles.css';
import SwitchLangElement from './SwitchLangElement';

function Header({ inputRefState }) {
  return (
    <header className='header__wrapper'>
      <h1 className='header__wrapper-title'>Speedy fingers</h1>
      <SwitchLangElement variant='header' inputRefState={inputRefState} />
    </header>
  );
}

export default Header;
