import style from "./HorizontalMenu.module.scss"
import Item from '../Item/Item';

const HorizontalMenu = () => {
  return (
      <ul className={style.menu}>
        <Item active underline>Главная</Item>
        <Item underline>Туториалы</Item>
        <Item underline>Донат</Item>
        <Item underline>Обсуждения</Item>
      </ul>
  )
}

export default HorizontalMenu