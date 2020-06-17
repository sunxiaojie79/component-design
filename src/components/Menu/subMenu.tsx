import React, { useContext, FunctionComponentElement } from 'react';
import classNames from 'classnames'
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps { 
  index?: number,
  title: string,
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className}) => { 
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  })
  const renderChildren = () => {
    const chidrenComponent =  React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component'
        )
      }
    })
    return <ul className='viking-submenu'>{chidrenComponent}</ul>
  }
  return (
    <li className={classes}>
      <div className='submenu-title'>{title}</div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu