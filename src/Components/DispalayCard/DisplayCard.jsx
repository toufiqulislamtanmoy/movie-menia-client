import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const DisplayCard = ({ item,itemAge }) => {
    AOS.init();
    const { _id,banner, imdbRating, movieName } = item;
    return (
        <Link className="tooltip" data-tip={movieName} to={`/movieDetails/${_id}`}>
            <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-down">
                <div className="relative">
                    <figure>
                        <img className="rounded-xl h-[220px]" src={banner} alt="Shoes" />
                    </figure>
                    <div className="absolute top-0 left-0 badge badge-secondary">{itemAge}</div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {movieName.length > 10 ? movieName.slice(0, 10) : movieName}..
                    </h2>
                    <p className="flex items-center gap-2" >{imdbRating} <span className=" text-[#bebb01]"><FaStar /></span></p>
                </div>
            </div>
        </Link>
    );
};

export default DisplayCard;