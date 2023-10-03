import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 bg-[#F3F3F3] p-2 rounded-md my-3">
      <Link to={"/latest"}>
        <button className="bg-[#D72050] text-white py-2 px-4 rounded">
          Latest
        </button>
      </Link>
          <Marquee speed={70}>
              <Link to={'/'} className="mr-10">I can be a React component, multiple React components, or just some
        text.</Link>
              <Link to={'/'} className="mr-10">I can be a React component, multiple React components, or just some
        text.</Link>
              <Link to={'/'} className="mr-10">I can be a React component, multiple React components, or just some
        text.</Link>
              <Link to={'/'} className="mr-10">I can be a React component, multiple React components, or just some
        text.</Link>
        
      </Marquee>
    </div>
  );
};

export default LatestNews;
