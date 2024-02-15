import { HiOutlineLightBulb } from 'react-icons/hi';
import { useDarkMode } from '../context/DarkModeContext';
import ButtonIcon from './ButtonIcon';
import { HiOutlineMoon } from 'react-icons/hi2';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineLightBulb /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
