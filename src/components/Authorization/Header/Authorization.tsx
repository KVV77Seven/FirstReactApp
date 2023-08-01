import style from "./Authorization.module.scss"
import ParallelogramBtn from '../../ParallelogramBtn/ParallelogrammBtn'
import account from "../../../assets/pictures/account.svg"

const Authorization = () => {
  return ( 
  <>
    <ul className={style.auth}>
      <ParallelogramBtn>Вход</ParallelogramBtn>
      <ParallelogramBtn>Регистрация</ParallelogramBtn>
    </ul>
    <div className={style.authSm}>
      <img src={account} alt="Authorization"/>
    </div> 
    
  </>
  )
}

export default Authorization