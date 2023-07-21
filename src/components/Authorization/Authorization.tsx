import style from "./Authorization.module.scss"
import Item from './../HorizontalMenu/Item/Item';


const Authorization = () => {
  return (
    <ul className={style.auth}>
      <div className={style.parIn}>
        <Item primary>
          <div className={style.parOut}>
            Вход
          </div>
        </Item>
      </div>

      <div className={style.parIn}>
        <Item primary>
          <div className={style.parOut}>
            Регистрация
          </div>
        </Item>
      </div>
    </ul>
  )
}

export default Authorization