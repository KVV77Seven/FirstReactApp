import style from "./Header.module.scss"
import HorizontalMenu from './../HorizontalMenu/HorizontalMenu';
import Authorization from './../Authorization/Authorization';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1>
          <a href="#" className={style.logo}>
            Super Games
          </a>
        </h1>
        <nav className={style.navbar}>
          <HorizontalMenu/>
          <Authorization/>
        </nav>
      </div>
    </header>
  )
}

export default Header