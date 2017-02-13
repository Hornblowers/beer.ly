import React from 'react';
import styles from './Reviews.css';
import Review from './../Review/Review.js'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('REVIEWS PROPS', this.props);
    return (
      <div className={styles.grid}>
        <div className={styles.type}>
          {console.log(this.props)}
          {this.props.checkins.items.map((checkin) =>
            <Review checkin={checkin} />
          )}
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  checkins: React.PropTypes.object.isRequired,
};

export default Reviews;
