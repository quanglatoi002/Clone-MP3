import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Slider from "react-slick";
import { AudioCircles } from "../../components";

//
import {
    Slider as MySlider,
    Section,
    NewRelease,
    ChartSection,
    Artist,
} from "../../components";

const SliderLazy = lazy(() => import("../../components/Slider"));

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
    console.log(top100);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    return (
        <div className="overflow-y-auto xl:px-[35px] px-[15px] w-full">
            <div className="w-full h-[70px]"></div>
            <Suspense fallback={<div>Loading...</div>}>
                <SliderLazy />
            </Suspense>
            {friday?.item && <Section data={friday} />}
            {newEveryday && <Section data={newEveryday} />}
            <NewRelease />
            <Section data={top100} isTrue={true} />
            <ChartSection />
            {singers && (
                <div className="w-full mt-12">
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
            <div className="flex items-center w-full mt-12">
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
        </div>
    );
};
export default Home;
