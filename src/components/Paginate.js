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
        <ul className="pagination pagination-sm justify-content-end border-0">
            {pageNumbers.map(number => {
                let classes="page-item"
                if(number === props.currentPage){
                    classes += "active"
                }
                return(
                    <li className={classes}>
                        <a onClick={()=> props.pageSelected(number)} href='!#' className='page-link'>{number}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Paginate