import s from './Button.module.scss';

interface ButtonProps {
  children: string
}

const Button = (props: ButtonProps) => {

  console.log(s);
  
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
