import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    SearchInput: '',
    value: '',
    placeholder: 'Google Search',
  }

  onChanged = event => {
    this.setState({placeholder: ''})
    this.setState({SearchInput: event.target.value})
  }

  onClicking = suggestion => {
    this.setState({value: suggestion})
    this.setState({SearchInput: suggestion})
    // console.log(suggestion)
  }

  render() {
    const {suggestionsList} = this.props
    const {SearchInput, value, placeholder} = this.state

    let SearchResults
    if (value === '') {
      SearchResults = suggestionsList.filter(every =>
        every.suggestion.toLowerCase().includes(SearchInput),
      )
    } else {
      SearchResults = suggestionsList.filter(
        every => every.suggestion === value,
      )
    }

    return (
      <div className="forOuterContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
        />
        <ul className="forUl">
          <div className="forInnerDiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="forSearch"
            />
            <input
              type="search"
              className="InputClass"
              value={SearchInput}
              placeholder={placeholder}
              onChange={this.onChanged}
            />
          </div>
          {SearchResults.map(each => (
            <SuggestionItem
              Suggestion={each}
              key={each.id}
              onClicking={this.onClicking}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
