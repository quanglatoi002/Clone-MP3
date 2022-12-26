import { useEffect } from "react";

import { Header } from "../../components";
import * as apis from "../../apis";

const Home = () => {
    useEffect(() => {
        const fetchDataHome = async () => {
            const response = await apis.getHome();
            console.log(response);
            return response.data;
        };
        fetchDataHome();
    }, []);

    return (
        <div className="overflow-y-auto">
            <div
                className="h-[70px] px-[59px] flex
         items-center "
            >
                <Header />
            </div>
        </div>
    );
};
export default Home;
