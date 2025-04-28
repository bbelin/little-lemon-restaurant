import { useNavigate } from 'react-router-dom'

// Styles
import './Button.css'

export const Button = ({ navigateTo, children, classes, type, isDisabled }) => {
  const navigate = useNavigate()
  const clickHandler = e => {
    if (navigateTo) {
      e.preventDefault()
      navigate(navigateTo)
    }
  }

  return (
    <button
      disabled={isDisabled}
      onClick={(e) => clickHandler(e)}
      className={`${classes ? classes : ''}`}
      type={`${type ? type : ''}`}
    >
      {children}
    </button>
  )
}
