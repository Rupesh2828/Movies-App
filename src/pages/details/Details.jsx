import React from 'react';
import VideosSection from './videoSection/VideosSection';
import Cast from './cast/Cast';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendation'; 
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';
import './style.scss'

const Details = () => {
  const {mediaType, id} = useParams()
  const { data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creaditsLoading} = useFetch(`/${mediaType}/${id}/credits`)
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]}
      crew = {credits?.crew} 
      />
      <Cast data={credits?.cast} loading={creaditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details
