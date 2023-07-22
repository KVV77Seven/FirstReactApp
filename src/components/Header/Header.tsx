import style from "./Header.module.scss"
import HorizontalMenu from './../HorizontalMenu/HorizontalMenu';
import Authorization from './../Authorization/Authorization';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Logo/>
        <HorizontalMenu/>
        <Authorization/>
      </nav>
    </header>
  )
}

export default Header