import './Button.css'

const Button = ({id, text}) => {
  return (
    <div>
      <button id={id}>{text}</button>
    </div>
  )
}

export default Button
