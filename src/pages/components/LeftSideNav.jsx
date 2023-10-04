import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res=> res.json())
            .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h1 className="text-xl font-semibold">All Category -{categories.length}</h1>
            {
                categories.map(category => <Link key={category.id} className="block p-3 font-semibold">{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;