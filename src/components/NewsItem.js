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
    const plainText =
      typeof text === "string"
        ? text
        : React.Children.toArray(text.props.children)
            .map((child) =>
              typeof child === "string" ? child : child.props.children
            )
            .join("");

    const truncatedText =
      plainText.length > maxLength
        ? `${plainText.slice(0, maxLength)}...`
        : plainText;

    return truncatedText;
  };

  const plainTextDescription = truncateDescription(description, 150);

  return (
    <div
      className={`news-cards-container ${
        enlarged ? "enlarged enlarged-visible" : ""
      }`}
    >
      <div className='news-cards'>
        {enlarged ? (
          <button className='close-button' onClick={handleClose}>
            X
          </button>
        ) : (
          <img src={image} alt={title} />
        )}
        <div className='news-card'>
          {enlarged ? (
            <div>
              <h3>{title}</h3>
              {description} {/* Here, remove the <p> tags */}
            </div>
          ) : (
            <div>
              <h3>{title}</h3>
              {plainTextDescription} {/* Here, remove the <p> tags */}
            </div>
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
