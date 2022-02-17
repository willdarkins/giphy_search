import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Giphy = () => {
    //useState to store data from API
    const [ content, setContent ] = useState([])
    // calling giphy api
    const giphyResponse = async () => {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=LWWhHBcSHdmy5Nshmkte5jUOYsozacsy`)
        // console.log(data)
        setContent(data.data)
    }
    //passing API response through useEffect
    useEffect(() => {
        giphyResponse()
    }, [])

    return (
        <>
            giphy
        </>
    )
}

export default Giphy