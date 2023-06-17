import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import img1 from "../../../assets/Blockbuster/img1.jpg"
import img2 from "../../../assets/Blockbuster/img2.jpg"
import img3 from "../../../assets/Blockbuster/img3.jpg"
import img4 from "../../../assets/Blockbuster/img4.jpg"
import img5 from "../../../assets/Blockbuster/img5.jpg"
import img6 from "../../../assets/Blockbuster/img6.jpg"
import img7 from "../../../assets/Blockbuster/img7.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const BlockBusterMovies = () => {
    return (
        <div className="max-w-7xl mx-auto my-14">
            <SectionTitle title="All Time Blockbuster"/>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <Link>
                        <div
                            style={{
                                backgroundImage: `url(${img1})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="lg:h-[600px] lg:w-[300px] h-[205px] w-full"
                        >
                            <h1 className="font-bold">Flash</h1>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div
                            style={{
                                backgroundImage: `url(${img2})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="lg:h-[600px] lg:w-[300px] h-[205px] w-full"
                        >
                            <h1 className="font-bold">Pathan</h1>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div
                            style={{
                                backgroundImage: `url(${img3})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="lg:h-[600px] lg:w-[300px] h-[205px] w-full"
                        >
                           <h1 className="font-bold">Jhon Wick CH4</h1>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div
                            style={{
                                backgroundImage: `url(${img4})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="lg:h-[600px] lg:w-[300px] h-[205px] w-full"
                        >
                            <h1>Movie Name</h1>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div
                            style={{
                                backgroundImage: `url(${img5})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="lg:h-[600px] lg:w-[300px] h-[205px] w-full"
                        >
                            <h1>Movie Name</h1>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div
                            style={{
                                backgroundImage: `url(${img6})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="lg:h-[600px] lg:w-[300px] h-[205px] w-full"
                        >
                            <h1>Movie Name</h1>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link>
                        <div
                            style={{
                                backgroundImage: `url(${img7})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="lg:h-[600px] lg:w-[300px] h-[205px] w-full"
                        >
                            <h1>Movie Name</h1>
                        </div>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default BlockBusterMovies;