import React from 'react';
import styles from './Review.css';

class Review extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.grid}>
        <div className={styles.type}>
          <img className='reviewImage' src={this.props.checkin.user.user_avatar} />
          <div className='reviewUser' >User: {this.props.checkin.user.user_name}</div>
          <div className='reviewRating' >Rating: {this.props.checkin.rating_score}</div>
          <div className='reviewComment' >Comment: {this.props.checkin.checkin_comment}</div>
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  checkin: React.PropTypes.object.isRequired,
};

export default Review;
