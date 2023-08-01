import style from "./Header.module.scss"
import HorizontalMenu from '../NavbarMenu/NavbarMenu';
import Authorization from '../Authorization/Header/Authorization';
import Logo from './Logo/Logo';
import Breakpoints from "../../Lib/Breakpoints";
import useResizeListener from "../../Lib/useResizeListener";

const Header = () => {
  const currentBP = useResizeListener()
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Logo/>
        <HorizontalMenu/>
        <Authorization/>
      </nav>
      <nav className={style.navSm}>
        <Logo/>
        {currentBP > Breakpoints.xsm ? <Authorization/> : ''}
        <HorizontalMenu/>
      </nav>
    </header>
  )
}

export default Header