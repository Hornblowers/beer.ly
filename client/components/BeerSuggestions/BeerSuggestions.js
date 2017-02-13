import React from 'react';
import styles from './BeerSuggestions.css';
import BeerSuggestion from './../BeerSuggestion/BeerSuggestion.js'

class BeerSuggestions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('SUGGESTIONS PROPS', this.props);
    return (
      <div className={styles.grid}>
        <div className={styles.type}>
        <div className={styles.preScrollableFixed}>
          <h1>Similar Beers</h1>
            {console.log(this.props)}
            <div className={styles.suggestionWidth}>
              {this.props.suggestions.items.map((suggestion) =>
                <BeerSuggestion suggestion={suggestion} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BeerSuggestions.propTypes = {
  suggestions: React.PropTypes.object.isRequired,
};

export default BeerSuggestions;
