import { useQuery } from "@tanstack/react-query";


const useMovies = () => {
    const {data: movies = [], isLoading:loading, refetch} = useQuery({
        queryKey:['movies'],
        queryFn: async () =>{
            const res = await fetch('https://movie-site-server.vercel.app/movies');
            return res.json();
        }
    })
    
    return [movies,loading,refetch];
};

export default useMovies;