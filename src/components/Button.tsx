import s from './Button.module.scss';
import variables from './vars.module.scss';

interface ButtonProps {
  children: string
}

const Button = (props: ButtonProps) => {

  console.log(s);
  console.log(variables);
  
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
