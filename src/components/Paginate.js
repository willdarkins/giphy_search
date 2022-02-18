import React from 'react'

const Paginate = (props) => {
    //variable to hold page numbers
    const pageNumbers= []
    //for loop will iterate over the total items on each page and divde them over the total items per each page
    //it's at that point we'll then push each item in the empty array 
    for(let i = 1; i <= Math.ceil(props.totalItems/props.itemsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number => {
                return(
                    <li className='page-item'>
                        <a href='!#' className='page-link'>{number}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Paginate