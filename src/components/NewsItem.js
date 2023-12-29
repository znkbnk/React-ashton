import React, { useState } from "react";

const NewsItem = ({ image, title, description }) => {
  const [enlarged, setEnlarged] = useState(false);

  const handleEnlarge = () => {
    setEnlarged(!enlarged);
  };

  const handleClose = () => {
    setEnlarged(false);
  };

   const truncateDescription = (text, maxLength) => {
  // Convert JSX elements to plain text
  const plainText =
    typeof text === "string"
      ? text
      : React.Children.toArray(text.props.children)
          .map((child) =>
            typeof child === "string" ? child : child.props.children
          )
          .join("");

  return plainText.length > maxLength
    ? `${plainText.slice(0, maxLength)}...`
    : plainText;
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
            <>
              <h3>{title}</h3>
              <p>{description}</p>
            </>
          ) : (
            <>
              <h3>{title}</h3>
              <p>{truncateDescription(description, 150)}</p>
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
