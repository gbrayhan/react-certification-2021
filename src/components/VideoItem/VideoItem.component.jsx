import React from 'react';
import PropTypes from 'prop-types';
import {CardDescription, CardImage, CardTitle, CardVideo} from './VideoItem.component.styled'


const VideoItem = props => {
  const { image, title, description } = props;
  return (
    <CardVideo>
      <CardImage src={image} alt={title}/>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardVideo>
  );
};

VideoItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default VideoItem;
