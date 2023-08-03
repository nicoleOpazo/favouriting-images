import React from "react";

import { SideBarComponent } from "../components";
import Feed from "../components/CatFeed";

const Home = () => {
    return (
        <div>
            <SideBarComponent />
            <Feed/>
        </div>
    )
}
export default Home;