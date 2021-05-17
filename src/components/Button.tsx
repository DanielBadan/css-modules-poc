import {useState} from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  children: string
}

const Button = (props: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button onClick={() => setIsActive(!isActive)} className={`${s.root} ${isActive && s['root--active']}`}>{props.children}</button>
  )
};

export default Button;
