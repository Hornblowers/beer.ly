import React from 'react';
import { Link } from 'react-router';
import styles from './BreweryListItem.css';
import IconButton from 'material-ui/IconButton';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { default as Fade } from 'react-fade';
import LazyLoad from 'react-lazy-load';

const iconStyles = {
  position: 'fixed',
  top: 0,
  width: 100,
};


class BreweryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    const breweryInfo = this.props.brewery.brewery;

    // Barebottle Brewing Company images have been deleted
    if (breweryInfo.id === 'AQhqDf') {
      this.squareImage = 'http://www.bernalbernal.com/wp-content/uploads/3rdLogo.png'      
    } else {
      this.squareImage = (breweryInfo.images) ? breweryInfo.images.squareMedium : '';
    }

    this.website = breweryInfo.website;
    this.description = breweryInfo.description;
    this.phoneNumber = this.props.brewery.phone || '(650) 269 - 2188'; // Default number
    this.cleanedPhoneNumber = this.phoneNumber.replace(/["'() -]/g, '');
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  // <Link href={"tel:" + this.cleanedPhoneNumber }>
  //   <p className={styles.details}>{this.phoneNumber}</p>
  // </Link>
  //         <Link href={this.website}>
  //           <p className={styles.details}>{this.website}</p>
  //         </Link>

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <LazyLoad className={styles.cell} offset={150}>
      <Fade duration={.5}>
        <div>
            <div>
              <IconButton onTouchTap={this.handleOpen}>
                <ActionInfoOutline style={iconStyles} />
                <Dialog
                  title={this.props.brewery.brewery.name}
                  actions={actions}
                  modal={true}
                  open={this.state.open}
                  autoScrollBodyContent={true}
                >
                  <br />
                  <br />
                  {this.description}
                  <br />
                  <br />
                  Tel: {this.phoneNumber}

                </Dialog>
              </IconButton>
            </div>
            <div>
              <Link to={`/${this.props.city}/${this.props.brewery.brewery.name}`}>
                  <img className={styles.cover} src={this.squareImage} />
              </Link>
              <div className={styles.info}>
                <h3 className={styles.title}>{this.props.brewery.brewery.name}</h3>
              </div>
            </div>
          </div>
        </Fade>
      </LazyLoad>
    );
  }
}

BreweryList.propTypes = {
  city: React.PropTypes.string.isRequired,
  brewery: React.PropTypes.object.isRequired
};

export default BreweryList;
