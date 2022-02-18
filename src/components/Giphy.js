import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from './Loading';
import Paginate from './Paginate';

const Giphy = () => {
    //manages data from API
    const [content, setContent] = useState([])
    //manages search term
    const [search, setSearch] = useState('')
    //manages the loading animation
    const [loading, setLoading] = useState(false)
    //manages error message when content cannot load
    const [error, setError] = useState(false)
    //manages which page user is currently on in pagination
    const[currentPage, setCurrentPage] = useState(1)
    //manages how many gifs will display per page
    const[itemsPerPage, setItemsPerPage] = useState(25)
    //if there are 25 items per page, multiplying that number by the actual page will give us the idexed last item
    const indexOfLastItem = currentPage * itemsPerPage
    //to find the first indexed item per-page, when need to subtract the last item by the items per page (25)
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    //taking the content state and slicing all GIFS from the first, to last index in the array and displaying them on each page
    const currentItems = content.slice(indexOfFirstItem, indexOfLastItem)

    //calling giphy API
    const giphyResponse = async () => {
        setError(false)
        setLoading(true)
        //trying to run API call fro content but throw error if not possible    
        try {
            const { data } = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=LWWhHBcSHdmy5Nshmkte5jUOYsozacsy&limit=1000`)
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
                {currentItems.map((i) =>
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

    //handles onChange functionality from the input tag
    const searchChange = event => {
        setSearch(event.target.value)
    }

    //handles button submit for search passing in deconstructed state from the search term
    const submitChange = async event => {
        event.preventDefault();
        setError(false)
        setLoading(true)
        try {
            const { data } = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=LWWhHBcSHdmy5Nshmkte5jUOYsozacsy&q=${search}`)
            setContent(data.data)
            setLoading(false)
        } catch (error) {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }

    }

    const pageSelected = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div className="container">
            {renderError()}
            <form className="form">
                <input
                    className='form-control'
                    value={search}
                    type='text'
                    placeholder='Search for GIFS!!!'
                    onChange={searchChange}
                />
                <button
                    type='submit'
                    onClick={submitChange}
                    className="btn btn-primary mx-2">
                    Go!
                </button>
            </form>
            <Paginate
            pageSelected={pageSelected}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={content.length} />
            <div className='container gifs'>
                {renderGifs()}
            </div>
        </div>
    )
}

export default Giphy