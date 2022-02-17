import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from './Loading';

const Giphy = () => {
    //manages data from API
    const [content, setContent] = useState([])
    //manages the loading animation
    const [loading, setLoading] = useState(false)
    //manages error message when content cannot load
    const [error, setError] = useState(false)

    //calling giphy api
    const giphyResponse = async () => {
        setError(false)
        setLoading(true)
        //trying to run API call fro content but throw error if not possible    
        try {
            const { data } = await axios.get(`https://5api.giphy.com/v1/gifs/trending?api_key=LWWhHBcSHdmy5Nshmkte5jUOYsozacsy`)
            //console.log(data)
            setContent(data.data)
            //dismounts Loading component by setting state to false 
            setLoading(false)
        } catch (error) {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
    }
    //passing API response through useEffect
    useEffect(() => {
        giphyResponse()
    }, [])

    //renders GIFS through .map
    const renderGifs = () => {
        //if the loading state is true, render the Loading animation
        if (loading) {
            return <Loading />
        }
        // iterating over captured data from API by accessing the state variable
        return (
            <div className='gifs'>
                {content.map((i) =>
                    <div key={i.id} className='gif'>
                        <img src={i.images.fixed_height.url} alt='gif' />
                    </div>
                )}
            </div>
        )
    }
    
    //renders error from bootstrap if state variable is true
    const renderError = () => {
        if (error) {
            return (
                <div class="alert alert-danger alert-dismissable fade show" role="alert">
                    Something fucked up and it could be your fault ‼️😯
                </div>
            )
        }
    }

    return (
        <div className='m-2'>
            {renderError()}
            <div className='container gifs'>
                {renderGifs()}
            </div>
        </div>
    )
}

export default Giphy