import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux';
import HorizontalScroll from '../components/HorizontalScroll';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const tradingData = useSelector(state => state.movieoData.bannerData)
    const { data: nowPlayingData } = useFetch('movie/now_playing')
    const { data: topRatedData } = useFetch('/movie/top_rated')
    const { data: popularTvShowData } = useFetch('/tv/popular')
    const { data: onTheAirShowData } = useFetch('/tv/on_the_air')


    return (
        <div>
            <BannerHome />
            <HorizontalScroll data={tradingData} heading={"Trading Show"} trending={true} />
            <HorizontalScroll data={nowPlayingData} heading={"Now Playing"} media_type={"movie"} />
            <HorizontalScroll data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"} />
            <HorizontalScroll data={popularTvShowData} heading={"Popular Tv Show"} media_type={"tv"} />
            <HorizontalScroll data={onTheAirShowData} heading={"On The Air"} media_type={"tv"} />

        </div>
    )
}

export default Home