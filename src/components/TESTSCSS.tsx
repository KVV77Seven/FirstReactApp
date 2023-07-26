import style from './TESTSCSS.module.scss'
import useResizeListener, {Breakpoints as BP} from '../Lib/useResizeListener'

const TESTSCSS = () => {
  const breakpoint = useResizeListener()
  return (
    <div className={style.test}>{breakpoint}</div>
  )
}

export default TESTSCSS