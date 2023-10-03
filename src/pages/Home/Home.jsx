import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSideNav from "../components/LeftSideNav";
import MainNews from "../components/MainNews";
import Navbar from "../components/Navbar";
import RightSideNav from "../components/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header />
            <LatestNews/>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div>
                    <LeftSideNav/>
                </div>
                <div className="col-span-2">
                    <MainNews/>
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;