import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    // console.log(event.target.value)
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchedDestinationList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="input-type-search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-image"
            />
          </div>
          <ul className="destinations-List-container">
            {searchedDestinationList.map(eachDestination => (
              <DestinationItem
                destinationDetails={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
