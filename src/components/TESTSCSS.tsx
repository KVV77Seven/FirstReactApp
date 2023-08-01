import style from './TESTSCSS.module.scss'
import useResizeListener from '../Lib/useResizeListener'
import Item from './Item/Item';

const TESTSCSS = () => {
  const breakpoint = useResizeListener()
  return(
  <>
    <div className={style.test}>{breakpoint}</div>
    <Item>aaa</Item>
  </>)

}

export default TESTSCSS