import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Giphy = () => {

    const giphyResponse = () => {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}`)
    }
  return (
    <>
    giphy
    </>
  )
}

export default Giphy