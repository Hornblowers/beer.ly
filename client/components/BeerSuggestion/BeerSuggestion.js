import React from 'react';
import styles from './BeerSuggestion.css';

class BeerSuggestion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.grid}>
        <div className={styles.type}>
          <div className={styles.suggestion}>
            <div className='suggestionName' >{this.props.suggestion.beer.beer_name}</div>
            <img className='suggestionImage' src={this.props.suggestion.beer.beer_label} />
            <div className='suggestionRating' >{Math.floor(this.props.suggestion.rating_score * 100)/100}/5</div>
            <div className='suggestionStyle' >{this.props.suggestion.beer.beer_style}</div>
            <div className='suggestionAbv' >{this.props.suggestion.beer.beer_abv} %ABV</div>
            <div className='suggestionIbu' >{this.props.suggestion.beer.beer_ibu} IBU</div>
          </div>
        </div>
      </div>
    );
  }
}

BeerSuggestion.propTypes = {
  suggestion: React.PropTypes.object.isRequired,
};

export default BeerSuggestion;
