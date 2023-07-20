import style from "./Authorization.module.scss"
import Item from './../HorizontalMenu/Item/Item';
import Parallelogram from './../Parallelogram/Parallelogram';


const Authorization = () => {
  return (
    <ul className={style.auth}>
      <Parallelogram>
        <Item>Вход</Item>
      </Parallelogram>
      <Parallelogram>
        <Item>Регистрация</Item>
      </Parallelogram>
    </ul>
  )
}

export default Authorization