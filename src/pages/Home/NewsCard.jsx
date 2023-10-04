import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { title, image_url, details, _id } = aNews;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-5">
      <figure>
        <img src={image_url} alt="news image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <>
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-blue-600 font-semibold">
                Read More
              </Link>
            </p>
          </>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
NewsCard.propTypes = {
  aNews: PropTypes.object.isRequired,
};
