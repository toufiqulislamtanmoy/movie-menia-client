import DisplayCard from '../../../Components/DispalayCard/DisplayCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMovies from '../../../hooks/useMovies';

const AllMovies = () => {
  const [movies] = useMovies();
  return (
    <div className="max-w-7xl mx-auto px-10 lg:px-5 my-20">
      <SectionTitle title="All Movie And Series" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {
          movies.map(item => <DisplayCard
            key={item._id}
            item={item}
            itemAge={item.type}
          />)
        }
      </div>
    </div>
  );
};

export default AllMovies;
