import './index.css'

const SuggestionItem = props => {
  const {Suggestion, onClicking} = props
  const {id, suggestion} = Suggestion

  const onClick = () => {
    onClicking(suggestion)
  }

  return (
    <li key={id} className="forList">
      <p className="forHeader">{suggestion}</p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="forImage"
        onClick={onClick}
      />
    </li>
  )
}
export default SuggestionItem
