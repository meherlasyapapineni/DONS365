import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import EditItemDetails from './EditItemDetails';
import axios from 'axios';


function ItemTable() {
const [listOfItems, setListOfItems] = useState([]);

useEffect(() => {
    axios.get("http://3.134.86.20/api/items/getItems")
    .then((response) => {
        const allItems = response.data.response;
        
        setListOfItems(allItems)
       
        // console.log(items)
    })
    .catch(error => {
        console.log(error)
    })
}, [])
return listOfItems.map((item)=>(
    item.userId === JSON.parse(sessionStorage.getItem('userId')) ?
        <tr>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td><EditItemDetails item = {item} /></td>
        </tr>
        :
        <tr>
            
        </tr>
  ))
}

export default ItemTable
