import style from "./Header.module.scss"
import HorizontalMenu from './../HorizontalMenu/HorizontalMenu';
import Authorization from './../Authorization/Authorization';
import Parallelogram from './../Parallelogram/Parallelogram';

const Header = () => {
  return (
    <header className={style.header}>
        <h1>
          <a href="#" className={style.logo}>
            Super Games
          </a>
        </h1>
        <nav className={style.navbar}>
          <Parallelogram>
            <HorizontalMenu/>
          </Parallelogram>

          <Authorization/>
        </nav>
    </header>
  )
}

export default Header