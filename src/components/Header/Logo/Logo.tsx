import style from "./Logo.module.scss"

const Logo = () => {
  return (
    <h1 className={style.h1}>
        <a href="#" className={style.logo}>
            Super Games
        </a>
    </h1>
  )
}

export default Logo