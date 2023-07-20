import style from "./HorizontalMenu.module.scss"
import Item from './Item/Item';

const HorizontalMenu = () => {
  return (
      <ul className={style.menu}>
        <Item active = {true}>Главная</Item>
        <Item>Туториалы</Item>
        <Item>Донат</Item>
        <Item>Обсуждения</Item>
      </ul>
  )
}

export default HorizontalMenu