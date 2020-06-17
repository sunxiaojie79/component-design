import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
function App() {
  return (
    <div className='App'>
      <Menu
        defaultIndex={0}
        onSelect={(index) => alert(index)}
        mode={'vertical'}
      >
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link1</MenuItem>
        <SubMenu title='SubMenu'>
          <MenuItem>sub 1</MenuItem>
          <MenuItem>sub 2</MenuItem>
        </SubMenu>

        <MenuItem>cool link2</MenuItem>
      </Menu>
      <Button disabled>点击</Button>
      <Button
        onClick={() => alert(666)}
        btnType={ButtonType.Danger}
        size={ButtonSize.Small}
      >
        Danger
      </Button>
      <Button
        className='custom'
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >
        Primary
      </Button>
      <Button disabled href='222' btnType={ButtonType.Link}>
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
