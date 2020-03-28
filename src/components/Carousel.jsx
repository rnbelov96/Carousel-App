import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import imageToggling from '../redux/actions/actions';

function Carousel({ images, currentImage, onToggle }) {
  return (
    <div className="container">
      <ul
        style={{ transform: `translate3d(-${currentImage}00%, 0px, 0px)` }}
        className="carousel"
      >
        {images.map((el, index) => (
          <li key={index}>
            <img src={el.url} alt={el.title} />
          </li>
        ))}
      </ul>
      <div className="carousel__title">{images[currentImage].title}</div>
      <div className="carousel__control-dots">
        {images.map((el, index) => (
          <div
            key={index}
            style={currentImage === index ? { opacity: 1 } : {}}
            onClick={() => onToggle(index)}
            tabIndex="0"
            role="button"
          />
        ))}
      </div>
      <button
        className="carousel__prev-btn"
        style={currentImage === 0 ? { display: 'none' } : {}}
        onClick={() => onToggle(currentImage - 1)}
        type="button"
      >
        <div />
      </button>
      <button
        className="carousel__next-btn"
        style={currentImage === images.length - 1 ? { display: 'none' } : {}}
        onClick={() => onToggle(currentImage + 1)}
        type="button"
      >
        <div />
      </button>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentImage: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    images: state.appStateReducer.images,
    currentImage: state.appStateReducer.currentImage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggle: index => dispatch(imageToggling(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
