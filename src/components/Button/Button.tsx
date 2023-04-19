import React from 'react'
import './Button.scss'

export interface ButtonProps {
  label: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>
}

export default Button
