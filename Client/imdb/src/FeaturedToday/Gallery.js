import './Gallery.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useContext } from "react";
import { MoviesContext } from "../MoviesContext";
import { UserContext } from '../User.context';
import MovieCard from "./MovieCard";
import star from '../Images/YellowStar.png';
import WishList from '../WishList/WishList';

export default function Gallery(isColored) {

    const {featured, fetchData} = useContext(MoviesContext);


    return(
        <InfiniteScroll
             dataLength={featured.length}
             next={fetchData}
             hasMore={true}
             loader={<h4>Loading...</h4>}
             endMessage={
                 <p style={{ textAlign: 'center' }}>
                 <b>Yay! You have seen it all</b>
                 </p>
            }
        >
                <div className='gallery'>
                    {featured.map(movie => <MovieCard  starSrc={star}
                    vote_average={movie.vote_average}
                    original_title={movie.original_title}
                    id={movie.id}
                    movieId={`/MovieToday/${movie.id}`}
                    imgUrl={
                        `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    />)}
                </div>
        </InfiniteScroll>
                

 
    )
}




