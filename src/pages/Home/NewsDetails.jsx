import { useParams } from "react-router-dom";
import Header from "../components/Header";
import RightSideNav from "../components/RightSideNav";
import Navbar from "../components/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-3xl font-semibold">News details here</h1>
          <p>{id}</p>
        </div>
        <RightSideNav />
      </div>
    </div>
  );
};

export default NewsDetails;
