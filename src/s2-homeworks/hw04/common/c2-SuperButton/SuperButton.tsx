import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
  {
    xType,
    className,
    disabled,
    ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
  }
) => {
  const finalClassName = s.button
    + (disabled
      ? " " + s.disabled
      : xType === "red"
        ? " " + s.red
        : xType === "secondary"
          ? " " +  s.secondary
          : " " + s.default
          + (className ? ' ' + className : ''))

  //ИЛИ ЕСЛИ НЕ ПОНЯТНО С finalClassName  ТОЖЕ САМОЕ ПРИ ПОМОЩИ ШАБЛОННЫХ СТРОК:
  // `${s.СТИЛЬ КНОПКИ}  ${xType==='КРАСНЫЙ' ? ДАВАЙ КРАСНЫЙ СТИЛЬ : xType === 'secondary' ? ДАВАЙ СЕКОНДАРИ СТИЛЬ: ДАВАЙ ПО ДЕФОЛТУ } ${disabled ? ДАВАЙ ДИЗАБЛЕТ СТИЛЬ :  ПУСТУЮ СТРОКУ} `
  // ЭТУ АЛХИМИЯ БУДЕМ ПОДРОБНО РАЗБИРАТЬ НА ДОПАХ

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  )
}

export default SuperButton
