import React from 'react';
import ProgressiveImage from "react-progressive-image";

const Image = ({
  src,
  alt,
  placeholder
}) => {

    return <ProgressiveImage src={src} placeholder={placeholder}>
    {(src, loading) => (
      <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={alt} />
    )}
  </ProgressiveImage>
}

export default Image