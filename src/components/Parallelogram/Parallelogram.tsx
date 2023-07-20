import style from './Parallelogram.module.scss'

interface ParallelogramProps {
    children?: React.ReactNode;
}

const Parallelogram: React.FC<ParallelogramProps> = ({children}) => {
  return (
    <div className={style.parallelogramIn}>
        <div className={style.parallelogramOut}>
            {children}
        </div>
    </div>
  )
}

export default Parallelogram