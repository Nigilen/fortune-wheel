import './App.scss';
import { useState } from 'react';
import { Logo } from './ui-kit/logo/logo';
import { Button } from './ui-kit/button/button';
import { Wheel } from './components/wheel/wheel';
import { Modal } from './ui-kit/modal/modal';

const WheelData = [
  { id: 0, value: '50' },
  { id: 1, value: 'Пусто' },
  { id: 2, value: '100' },
  { id: 3, value: 'Повтор' },
  { id: 4, value: '150' },
  { id: 5, value: 'Пусто' },
  { id: 6, value: '300' },
  { id: 7, value: 'Повтор' },
];

interface WheelItem {
  id: number;
  value: string;
};

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<WheelItem | null>(null);

  const handleClick = () => {
    setSelectedItem(WheelData[6]);
    setIsDisabled(true);
    setTimeout(() => {
      setShowModal(true);
    }, 11800);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <Wheel data={ WheelData } selectedItem={ selectedItem } />
      </main>
      <footer>
        <Button text='Крути' onClick={ handleClick } isDisabled={ isDisabled } />
      </footer>
      { showModal && <Modal onClose={ handleClose } text={ selectedItem?.value || null } /> }
    </>
  );
};

export default App;