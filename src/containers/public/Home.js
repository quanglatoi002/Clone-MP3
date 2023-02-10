import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//
import { Slider, Section, NewRelease, ChartSection } from "../../components";

const Home = () => {
    const { friday, newEveryday, top100, topArtist, newMusic, weekChart } =
        useSelector((state) => state.app);
    return (
        <div className="overflow-y-auto w-full">
            <Slider />
            <Section data={friday} />
            <Section data={newEveryday} />
            <NewRelease />
            <Section data={top100} isTrue={true} />
            <ChartSection />
            <Section data={topArtist} />
            <Section data={newMusic} />
            <div className="flex items-center px-[43px] w-full mt-12">
                {weekChart?.items?.map((item) => (
                    <Link
                        to={item?.link?.split(".")[0]}
                        key={item?.link}
                        className="flex-1 px-4"
                    >
                        <img
                            src={item.cover}
                            alt="cover"
                            className="w-full object-cover rounded-md"
                        />
                    </Link>
                ))}
            </div>
            <div className="w-full h-[500px]"></div>
        </div>
    );
};
export default Home;
