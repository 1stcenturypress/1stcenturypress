import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img
        key={image.id}
        src={image.webformatURL}
        alt="image"
        className="ui inline large bordered rounded image"
      />
    );
  });
  return (
    <div className="ui center aligned container">
      <div>{images}</div>
    </div>
  );
};

export default ImageList;
