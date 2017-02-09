import React, { PropTypes } from 'react';
import styles from './BeerItem.css';

const mockImages = [
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer1.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer2.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer3.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer4.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer5.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer6.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer7.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer8.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer9.png',
  'https://s3-us-west-1.amazonaws.com/beer.ly/beers/beer10.png'
];

const BeerItem = (props) => {
  const handleClick = () => {
    const beer = {
      name: props.beer.beer_name,
      image: props.beer.beer_label
    };
    props.addToCart(beer);
  };

  // Handles situation when brewery does not supply information
  const abvHandler = () => {
    return (props.beer.abv) ?
      (<strong className={styles.abv}>{props.beer.abv}% ALC/VOL</strong>) :
      (<strong className={styles.abv}>7.25% ALC/VOL</strong>);
  };

  const descriptionHandler = () => {
    return (props.beer.description) ?
      (<p className={styles.description}>{props.beer.description.substring(0, 60)}...</p>) :
      (<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed...</p>);
  };

  return (
    <div className={styles.cell}>
      <div className={styles.title}>
        {props.beer.beer_name}
      </div>
      <img src={props.beer.beer_label} className={styles.image} />
      { /* Optional information handlers */ }
      { abvHandler() } { descriptionHandler() }
      <button className={styles.addButton} onClick={handleClick} >Add to Flight</button>

    </div>
  );
};

BeerItem.propTypes = {
  beer: PropTypes.object
};


export default BeerItem;
