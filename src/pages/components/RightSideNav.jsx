import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineGithub,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import adBg from "../../assets/bg1.png";

const RightSideNav = () => {
  const adStyle = {
    backgroundImage: `linear-gradient(180deg,rgba(5, 0, 29, 0.80),rgba(5, 0, 29, 0.80)),url('${adBg}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="space-y-6">
      {/* Side bar login with */}
      <div className="space-y-2">
        <h1 className="text-xl font-semibold mb-4">Login with</h1>
        <span className="flex items-center justify-center gap-2 border border-gray-600 p-2 rounded-lg hover:cursor-pointer">
          <FcGoogle /> Login with Google
        </span>
        <span className="flex items-center justify-center gap-2 border border-gray-600 p-2 rounded-lg hover:cursor-pointer">
          <AiOutlineGithub /> Login with Github
        </span>
      </div>
      {/* find us on */}
      <div>
        <h1 className="text-xl font-semibold mb-4">Find Us On</h1>
        <span className="flex items-center gap-2 border border-gray-600 p-2 pl-3 rounded-t-lg hover:cursor-pointer">
          <AiFillFacebook /> Facebook
        </span>
        <span className="flex items-center gap-2 border-x border-gray-600 p-2 pl-3 hover:cursor-pointer">
          <AiOutlineTwitter /> Twitter
        </span>
        <span className="flex items-center gap-2 border border-gray-600 p-2 pl-3 rounded-b-lg hover:cursor-pointer">
          <AiOutlineInstagram /> Twitter
        </span>
      </div>
      {/* QZone */}
      <div className="bg-[#F3F3F3] p-4">
        <h1 className="text-xl font-semibold mb-4">Q-Zone</h1>
        <img src={qZone1} alt="qZone1" />
        <img src={qZone2} alt="qZone2" />
        <img src={qZone3} alt="qZone3" />
        <div style={adStyle} className="space-y-5 p-10 mt-10">
          <h2 className="text-3xl font-bold text-white text-center">
            Create an Amazing Newspaper
          </h2>
          <p className="text-center text-white">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="bg-[#D72050] text-white py-3 px-4 block mx-auto">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
