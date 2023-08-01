import style from "./NavbarMenu.module.scss"
import Item from '../Item/Item';
import { useState } from "react";
import useResizeListener from "../../Lib/useResizeListener";
import Breakpoints from "../../Lib/Breakpoints";
import Authorization from "../Authorization/NavbarMenu/Authorization";

const NavbarMenu = () => {
  //burger open/close
  const [isOpen, setIsOpen] = useState(false)
  let menuClass = style.menu + (isOpen ? " " + style.menu__open : "")
  let burgerClass = style.burgerContainer + (isOpen ? " " + style.burgerContainer__open : "")

  const burgerClick = () => {
    setIsOpen(!isOpen)
  }
  //show auth btn
  const currentBP = useResizeListener()

  return (
    <>
      <ul className={menuClass}>
        <Item active underline>Главная</Item>
        {currentBP === Breakpoints.xsm ? 
        <Authorization></Authorization>
        : ''
        }

        <Item underline>Туториалы</Item>
        <Item underline>Донат</Item>
        <Item underline>Обсуждения</Item>
      </ul>
      <button className={burgerClass} onClick={burgerClick}>
        <div className={style.burgerItem}></div>
        <div className={style.burgerItem}></div>
        <div className={style.burgerItem}></div>
      </button>
    </>
  )
}

export default NavbarMenu