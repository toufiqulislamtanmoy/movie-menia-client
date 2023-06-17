import DisplayCard from "../../Components/DispalayCard/DisplayCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMovies from "../../hooks/useMovies";
import useTitle from "../../hooks/useTitle";

const TvSerise = () => {
    useTitle('TV Series')
    const [movies] = useMovies();
    const tvSeries = movies.filter(series => series.type === 'webSeries')
    return (
        <div className="max-w-7xl mx-auto px-10 lg:px-5 my-36">
            <SectionTitle title="TV Series" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {
                    tvSeries.map(item => <DisplayCard
                        key={item._id}
                        item={item}
                        itemAge={item.type}
                    />)
                }
            </div>
        </div>
    );
};

export default TvSerise;