import React from 'react'

const Pagination = ({numbers,setPage,handleNextpage,handlePrevpage,currentPage,numberofPage}) => {
  return (
    <div>
      <ul className='pagination'>
        <li>
            <button disabled={currentPage === 1} onClick={handlePrevpage}>Prev</button>
        </li>
        {
            numbers.map((number,index)=>{
                return(
                <li>
                    <button className={currentPage === number ? 'active' : ''} onClick={()=>setPage(number)}>{number}</button>
                </li>
                )
            })
        }
        <li>
            <button disabled={currentPage === numberofPage} onClick={handleNextpage}>Next</button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
