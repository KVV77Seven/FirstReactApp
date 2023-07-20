import { ReactNode } from 'react'
import style from './Item.module.scss'

interface ItemProps {
    children?: React.ReactNode;
    underline?: boolean;
    active?: boolean;
    scale?: boolean;
}

const Item: React.FC<ItemProps> = ({children, underline, active, scale}) => {
  const linkClass = style.link + ' ' + (underline ? style.under : null) + ' ' + (active ? style.active : null);
  const itemClass = style.item + ' ' + (scale ? null : style.scale) + ' ' + (active ? style.active : null);
  return (
    <li className={itemClass}>
        <a href="#" className={linkClass}>
            {children}
        </a>
    </li>
  )
}

export default Item