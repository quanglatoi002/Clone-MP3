import { useSelector } from "react-redux";
import { Slider, Section } from "../../components";

const Home = () => {
    const { friday } = useSelector((state) => state.app);
    return (
        <div className="overflow-y-auto">
            <Slider />
            <Section data={friday} />
        </div>
    );
};
export default Home;
