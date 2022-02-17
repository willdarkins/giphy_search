import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Giphy = () => {
    // calling giphy api
    const giphyResponse = async () => {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=LWWhHBcSHdmy5Nshmkte5jUOYsozacsy`)
        console.log(data)
    }

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