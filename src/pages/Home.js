import React from 'react'
import BannerHome from '../components/BannerHome'
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import HorizontalScroll from '../components/HorizontalScroll';

const Home = () => {
    const tradingData = useSelector(state => state.movieoData.bannerData)

    return (
        <div>
            <BannerHome />
            <HorizontalScroll data={tradingData} heading={"Trading Show"} />

        </div>
    )
}

export default Home