import React, { useState } from "react";

const NewsItem = ({ image, title, description, link }) => {
  const [enlarged, setEnlarged] = useState(false);

  const handleEnlarge = () => {
    setEnlarged(!enlarged);
  };

  const handleClose = () => {
    setEnlarged(false);
  };

  return (
    <div
      className={`service-container ${
        enlarged ? "enlarged enlarged-visible" : ""
      }`}
    >
      <div className='service-cards'>
        {enlarged ? (
          <button className='close-button' onClick={handleClose}>
            X
          </button>
        ) : (
          <img src={image} alt={title} />
        )}
        <div className='news-card'>
          {enlarged ? (
            <p>text</p>
          ) : (
            <>
              <h1>{title}</h1>
              <p>{description}</p>
            </>
          )}
          {!enlarged && (
            <button className='custom-button' onClick={handleEnlarge}>
              READ MORE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
