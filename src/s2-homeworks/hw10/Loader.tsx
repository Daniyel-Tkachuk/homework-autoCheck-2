import s from './Loader.module.css'
import {ReactComponent as LoaderSvg } from './images/loader.svg'

export const Loader = () => (
  <div className={s.loader}>
    <LoaderSvg className={s.loaderSvg}/>
  </div>
)
