import "./NewsCard.css";
import { useState } from "react";
import ImageLoader from "./loader/image_loader/ImageLoader";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { formatTimeAgo } from "../util/DateFromatter";

export default function NewsCard({ objectID, title, imageUrl, updatedAt }) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="news-card">
      <div className="news-card__image-wrapper">
        {imageLoading && (
          <div className="news-card__image-loader-wrapper">
            {" "}
            <ImageLoader />
          </div>
        )}
        <img
          className={imageLoading ? "loading" : "loaded"}
          src={imageUrl[0]}
          onLoad={() => setImageLoading(false)}
        />
      </div>
      <div className="content">
        <Link to={objectID}>{title}</Link>
      </div>
      <div className="news-card__date-container">
        <div className="date">
          <img src="/svg/calendar.svg" />
          <span>{formatTimeAgo(updatedAt)}</span>
        </div>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  objectID: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.array,
  createdAt: PropTypes.number,
  updatedAt: PropTypes.number,
};
