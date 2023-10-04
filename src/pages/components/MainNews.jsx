import { useLoaderData } from "react-router-dom";
import NewsCard from "../Home/NewsCard";

const MainNews = () => {
  const news = useLoaderData();
  return (
    <div>
      {news.map((aNews) => (
        <NewsCard key={aNews._id} aNews={aNews} />
      ))}
    </div>
  );
};

export default MainNews;
