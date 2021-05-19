import s from './Button.module.scss';

interface ButtonProps {
  children: string
}

const Button = (props: ButtonProps) => {

  console.log(s);
  
  debugger;
  // debugger;
  // return (
  //   <button onClick={() => setIsActive(!isActive)} className={`${s.root}`}>{props.children}</button>
  //   // <button onClick={() => setIsActive(!isActive)} className={`${s.root} ${isActive && s['root--active']}`}>{props.children}</button>
  // )

  return (
    <div className={s.wrapper}>
      <div className={s.component}>
        <div className={s.component__childElement}>{props.children}</div>
      </div>

      <div className={`${s.component} ${s.componentIsReversed}`}>
        <div className={s.component__childElement}>{props.children}</div>
      </div>
    </div>
  )
};

export default Button;
