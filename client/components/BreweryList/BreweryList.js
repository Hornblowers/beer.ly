import React from 'react';
import BreweryListItem from '../BreweryListItem/BreweryListItem';
import styles from './BreweryList.css';

class BreweryList extends React.Component {

  render() {
    const input = this.props.filter.toLowerCase()
    const breweries = this.props.breweries.map((brewery, i) => {
      // Only display breweries with images
      if (brewery.brewery.images !== undefined && brewery.brewery.images.squareMedium !== undefined) {
        // Filter by search input
         if (!input || !!brewery.brewery.name.toLowerCase().includes(input)) {
          return <BreweryListItem key={brewery.brewery.id} brewery={brewery} city={this.props.city} />;
        }
      }
    });

    return (
      <div className={styles.grid}>
        {breweries}
      </div>
    );
  }
}

BreweryList.propTypes = {
  city: React.PropTypes.string.isRequired,
  breweries: React.PropTypes.array.isRequired
};

export default BreweryList;
