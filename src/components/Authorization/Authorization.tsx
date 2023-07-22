import style from "./Authorization.module.scss"
import ParallelogramBtn from './../ParallelogramBtn/ParallelogrammBtn';


const Authorization = () => {
  return (
    <ul className={style.auth}>
      <ParallelogramBtn>Вход</ParallelogramBtn>
      <ParallelogramBtn>Регистрация</ParallelogramBtn>
    </ul>
  )
}

export default Authorization