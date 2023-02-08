import { useSelector } from "react-redux";
import { Slider, Section } from "../../components";

const Home = () => {
    const { friday, newEveryday, top100, topArtist, newMusic } = useSelector(
        (state) => state.app
    );
    return (
        <div className="overflow-y-auto w-full">
            <Slider />
            <Section data={friday} />
            <Section data={newEveryday} />
            <Section data={top100} isTrue={true} />
            <Section data={topArtist} />
            <Section data={newMusic} />
            <div className="w-full h-[500px]"></div>
        </div>
    );
};
export default Home;
