import React from 'react';

import LazyLoad from 'react-lazy-load';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

import styles from '../styles/LazyLoadedImage.scss';

class LazyLoadedImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    }
  }

  onLoad() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { imageUrl, type, alt } = this.props;
    const { loaded } = this.state;

    const logoClasses = cx({
      'logo': true,
      'logo--loading': !loaded,
      'logo--loaded': !!loaded,
    });

    const pictureClasses = cx({
      'picture': true,
      'picture--loading': !loaded,
      'picture--loaded': !!loaded,
    });

    return (
      <LazyLoad width='100%' debounce={false} throttle={250} offsetVertical={-100}>
        <img className={ type === 'logo' ? logoClasses : pictureClasses } alt={alt} onLoad={() => this.onLoad()} src={imageUrl} />
      </LazyLoad>
    )
  }
}

export default LazyLoadedImage;