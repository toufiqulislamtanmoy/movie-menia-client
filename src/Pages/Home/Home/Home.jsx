import useTitle from "../../../hooks/useTitle";
import LetestMovie from "../LetestMovie/LetestMovie";
import Banner from "../Banner/Banner";
import AllMovies from "../AllMovies/AllMovies";
import BlockBusterMovies from "../BlockBusterMovies/BlockBusterMovies";


const Home = () => {
    useTitle('Home');
    return (
        <>
            <Banner />
            <BlockBusterMovies />
            <LetestMovie />
            <AllMovies />

        </>
    );
};

export default Home;