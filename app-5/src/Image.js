import React from 'react';

export default function Image(props) {
  const {image} = props;

  return (
    <img src={image} alt="Get Riggity WRECKED!" className="image"/>
  )
}

