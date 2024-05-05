import React from 'react'
import Main from '../components/main.jsx';
import Row from '../components/row.jsx';
import requests from '../Requests.js';
const Home = () => {
  return (
    <>
    <Main/>
    <Row rowId='1' title='Upcoming' fetchURL={requests.requestUpcoming}/>
    <Row rowId='2' title='TopRated' fetchURL={requests.requestTopRated}/>
    <Row rowId='3' title='Sci-Fi' fetchURL={requests.requastSciFi}/>
    <Row rowId='4' title='Popular' fetchURL={requests.requestPopular}/>
    </>
  )
}

export default Home
