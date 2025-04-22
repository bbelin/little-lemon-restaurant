import { useNavigate } from 'react-router-dom'

// Styles
import './Button.css'

export const Button = ({ navigateTo, children }) => {
  const navigate = useNavigate()
  const clickHandler = e => {
    if (navigateTo) {
      e.preventDefault()
      navigate(navigateTo)
    }
  }

  return (
    <button onClick={(e) => clickHandler(e)}>{children}</button>
  )
}
