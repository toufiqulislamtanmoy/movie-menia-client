import DisplayCard from "../../../Components/DispalayCard/DisplayCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMovies from "../../../hooks/useMovies";
const LetestMovie = () => {
    const [movies] = useMovies();
    // console.log(movies)
    // const latestMovie = movies.filter(lm => lm.isLatest === "latest");
    const currentDate = new Date();
    const previousDate = new Date();
    previousDate.setMonth(currentDate.getMonth() - 3);
    const latestMovie = movies.filter(movie => {
        const releaseDate = new Date(movie.releaseDate);
        return releaseDate <= currentDate && releaseDate >= previousDate;
      });
    // console.log(latestMovie);
    return (
        <div className="max-w-7xl mx-auto px-10 lg:px-5">
            <SectionTitle title="Latest Movies" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {
                    latestMovie.map(item => <DisplayCard
                        key={item._id} 
                        item = {item}
                        itemAge="Latest"
                    />)
                }
            </div>
        </div>
    );
};

export default LetestMovie;