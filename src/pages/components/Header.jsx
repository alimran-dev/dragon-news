import moment from "moment/moment";
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="text-center space-y-2 mt-5">
            <img src={logo} alt="logo" className="mx-auto"/>
            <h3>Journalism Without Fear or Favour</h3>
            <span>{ moment().format("dddd, MMMM DD,YYYY")}</span>
        </div>
    );
};

export default Header;