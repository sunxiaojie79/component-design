import React from 'react';
import Button, { ButtonSize, ButtonType} from './components/Button/button';
function App() {
  return (
    <div className='App'>
      <Button disabled>点击</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        Danger
      </Button>
      <Button
        disabled
        href='222'
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
      >
        点击
      </Button>
      <Button
        href='222'
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
      >
        点击
      </Button>
    </div>
  )
}

export default App;
