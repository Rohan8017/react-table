import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai';
import {AiOutlineArrowUp} from 'react-icons/ai';

const Body = ({ paginatedData,handleSort,handleSortName,sorType,sortName }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={()=>handleSortName('brand')}>Brand Name { sortName=== 'asc' ?  <AiOutlineArrowDown/> : <AiOutlineArrowUp/>}</th>
                    <th onClick={()=>handleSortName('category')}>Category { sortName=== 'asc' ?  <AiOutlineArrowDown/> : <AiOutlineArrowUp/>}</th>
                    <th onClick={()=>handleSort('price')}>Price { sorType=== 'asc' ?  <AiOutlineArrowDown/> : <AiOutlineArrowUp/>}</th>
                    <th onClick={()=>handleSort('rating')}>Rating { sorType=== 'asc' ?  <AiOutlineArrowDown/> : <AiOutlineArrowUp/>}</th>
                    <th onClick={()=>handleSort('stock')}>Stock { sorType=== 'asc' ?  <AiOutlineArrowDown/> : <AiOutlineArrowUp/>}</th>
                </tr>
            </thead>
            <tbody>
                {
                    paginatedData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.brand}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.rating}</td>
                                <td>{item.stock}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Body
