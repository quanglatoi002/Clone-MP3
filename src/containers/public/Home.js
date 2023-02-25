import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
//
import {
    Slider as MySlider,
    Section,
    NewRelease,
    ChartSection,
    Artist,
} from "../../components";

const Home = () => {
    const {
        friday,
        newEveryday,
        top100,
        topArtist,
        newMusic,
        weekChart,
        singers,
    } = useSelector((state) => state.app);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    return (
        <div className="overflow-y-auto w-full">
            <MySlider />
            <Section data={friday} />
            <Section data={newEveryday} />
            <NewRelease />
            <Section data={top100} isTrue={true} />
            <ChartSection />
            {singers && (
                <div className="px-[43px] w-full mt-12">
                    <Slider {...settings}>
                        {singers.map((item) => (
                            <div key={item.id} className="px-4">
                                <Artist
                                    image={item.thumbnail}
                                    follower={item.totalFollow}
                                    link={item.link}
                                    title={item.name}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
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
            <Section data={topArtist} />
            <Section data={newMusic} />

            <div className="w-full h-[500px]"></div>
        </div>
    );
};
export default Home;
