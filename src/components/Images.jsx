import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import imageToggling from '../redux/actions/actions';

function Images({ images, onToggle }) {
  return (
    <div className="images">
      {images.map((el, index) => (
        <div
          role="button"
          key={index}
          className="images__item"
          onClick={() => onToggle(index)}
        >
          <img src={el.url} alt={el.title} />
        </div>
      ))}
    </div>
  );
}

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Images);
