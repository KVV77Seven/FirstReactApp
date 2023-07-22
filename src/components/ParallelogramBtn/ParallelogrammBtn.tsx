import style from "./ParallelogramBtn.module.scss"
import Item from '../Item/Item';

interface ParallelogramBtnProps {
  children?: React.ReactNode;
}

const ParallelogramBtn: React.FC<ParallelogramBtnProps> = ({children}) => {
  return (
  <button className={style.parIn}>
    <div className={style.parOut}>
      {children}
    </div>
  </button>
  )
}

export default ParallelogramBtn