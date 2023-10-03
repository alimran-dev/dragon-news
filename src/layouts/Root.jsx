import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins w-10/12 max-w-6xl mx-auto">
            <Outlet/>
        </div>
    );
};

export default Root;