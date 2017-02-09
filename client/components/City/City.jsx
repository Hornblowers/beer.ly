import React, { PropTypes } from 'react';
import axios from 'axios';
import BreweryList from '../BreweryList/BreweryList';
import styles from './City.css';
import SearchFilter from '../SearchFilter/SearchFilter';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.params.city,
      breweries: [],
      searchInput: ''
    };
  }

  componentDidMount() {
    this.fetchBreweries();
  }

  fetchBreweries() {
    if (this.state.city === '') {
      this.setState({ breweries: [] });
      return;
    }

    const context = this;
    axios.get('api/breweries/' + this.state.city)
      .then((response) => {
        const newBreweries = this.handleSuccess(response);
        context.setState({ breweries: newBreweries });
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  handleSuccess(response) {
    return response.data.map((brewery) => brewery);
  }

  handleError(error) {
    console.log(error);
  }

  handleChange = (event) => {
    this.setState({searchInput: event.target.value});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1>Breweries in {this.state.city}</h1>
          <p className={styles.details}>About {this.state.breweries.length} results ({(1 / this.state.breweries.length).toFixed(5)} seconds) </p>
        </div>

        <div className={styles.filterBrewery}>
          <form>
            <input 
              type='text'
              placeholder='Type to filter..'
              // binding the input value to state
              value={this.state.searchInput}
              onChange={this.handleChange}
            /> 
          </form>
        </div>
          
          <BreweryList 
            breweries={this.state.breweries} 
            city={this.state.city}          
            filter={this.state.searchInput}
          />
          

      </div>
    );
  }
}

City.propTypes = {
  params: PropTypes.object
};

export default City;
