import { ReactNode } from 'react'
import style from './Item.module.scss'

interface ItemProps {
    children?: React.ReactNode;
    underline?: boolean;
    active?: boolean;
    scale?: boolean;
    primary?: boolean;
}

const Item: React.FC<ItemProps> = ({children, underline, active, scale, primary}) => {
  const underClass = active ? style.activeUnder : style.under;
  const linkClass = style.link + ' ' + (underline ? underClass : '') + ' ' + (active ? style.active : '') + ' ' + (primary ? style.primary : '');
  const itemClass = style.item + ' ' + (scale ? style.scale : '') + ' ' + (active ? style.active : '');

  return (
    <li className={itemClass}>
        <p className={linkClass}>
            {children}
        </p>
    </li>
  )
}

export default Item