import React from 'react';
import Button, { ButtonSize, ButtonType} from './components/Button/button';
function App() {
  return (
    <div className='App'>
      <Button disabled >点击</Button>
      <Button onClick={() => alert(666)} btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Danger
      </Button>
      <Button className="custom" btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Primary
      </Button>
      <Button
        disabled
        href='222'
        btnType={ButtonType.Link}
      >
        点击
      </Button>
      <Button
        href='222'
        target='_blank'
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
      >
        点击
      </Button>
    </div>
  )
}

export default App;
