import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import 'react-awesome-button/dist/styles.css';
import useTitle from '../../hooks/useTitle';
import ButtonPrivet from '../ButtonPrivet/ButtonPrivet';
const MovieDetails = () => {
    useTitle("Details")
    const movieDetails = useLoaderData();
    const { releaseDate, banner, imdbRating, movieName, storyLine, starCast, category, languages, youtubeTrailer, hostingUrl } = movieDetails;
    return (
        <div className='bg-base-100 shadow-xl max-w-7xl mx-auto my-24 lg:p-10 p-0 overflow-x-hidden'>
            <div className=" lg:flex items-center">
                <div className='mx-10 lg:mx-0'>
                    <figure><img src={banner} /></figure>
                    <p className=""><span className='font-semibold'>Release Date: </span> {releaseDate}</p>
                </div>
                <div className="card-body space-y-5">
                    <div>
                        <h2 className="card-title" title={movieName}>{movieName}</h2>
                        <p >{storyLine}</p>
                    </div>
                    <div className='space-x-3'>
                        <p className="badge badge-accent">{category}</p>
                        <p className="badge badge-accent">{languages}</p>
                    </div>
                    <div>
                        <span className='text-2xl font-bold'>Star Cast:</span>
                        <p className="">{starCast}</p>
                        <p className='flex items-center gap-3'> <span className='text-xl font-bold'>IMDB: </span>{imdbRating}<FaStar /></p>
                    </div>
                    <div className="">
                        <iframe
                            className='lg:w-1/2 lg:h-[280px]'
                            src={youtubeTrailer}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>


            </div>
            <div className='text-center'>
                <ButtonPrivet hostingUrl={hostingUrl} />
            </div>
        </div >
    );
};

export default MovieDetails;