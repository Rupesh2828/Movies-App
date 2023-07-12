import React, { useState, useEffect } from 'react';
import { useNavigate, BrowserRouter as Router } from 'react-router-dom';
import './style.scss';
import {  useSelector } from 'react-redux';
import Img from '../../../components/lazyLoading/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const {url} = useSelector((state)=> state.home)

  const {data, loading} = useFetch("/movie/upcoming");
  
  useEffect(()=>{
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random()* 20)]?.backdrop_path;
    setBackground(bg);

  },[data]);

  const searchQueryHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchQueryHandler();
    }
  };

  return (
    <div className='heroBanner'>

      {!loading && (<div className="backdrop-img">
        <Img src={background}/>
      </div>
      )}
       
       <div className="opacity-layer">
        
       </div>
       <ContentWrapper>

        <div className="heroBannerContent">
          <span className='title'>Welcome.</span>
          <span className='subTitle'>Millions of Movies, Tv Shows and People to discover. Explore Now</span>
          <div className="searchInput">
            <input
              type="text"
              placeholder='Search for a movie or TV Show'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleKeyPress}
            />
            <button onClick={searchQueryHandler}>Search</button>
          </div>
      </div>
       </ContentWrapper>
    </div>
  );
};



export default HeroBanner;
