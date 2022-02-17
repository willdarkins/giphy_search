import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Giphy = () => {
    //useState to store data from API
    const [content, setContent] = useState([])
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
        // iterating over captured data from API by accessing the state variable
        <div className='container-gifs'>
            {content.map((i) => 
                <div key={i.id} className='gif'>
                    <img src={i.images.fixed_height.url} alt='gif' />
                </div>
            )}
        </div>
    )
}

export default Giphy