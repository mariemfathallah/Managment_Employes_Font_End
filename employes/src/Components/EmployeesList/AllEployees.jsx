import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import instanceAxios from '../instanceAxios/ApiGlobal'
import axios from 'axios';
import jwtDecode from "jwt-decode";
const AllEployees = () => {
  const [data , setData] = useState([])
  //   const [filteredInfo, setFilteredInfo] = useState({});
//   const [sortedInfo, setSortedInfo] = useState({});
//   const [totalUsersData, setTotalUsers] = useState(null)
//   const [createdAtAfter, setCreatedAtAfter] = useState('')
//   const [createdAtBefore, setCreatedAtBefore] = useState('')
//   const [limit, setLimit] = useState(null)
//   const [sortBy, setSortBy] = useState(null)

  const columns=[
    {
      key:'1',
      title: 'firstname',
      dataIndex : 'firstName'
    },
    {
      key:'2',
      title: 'lastname',
      dataIndex : 'lastName'
    },

        {
      key:'3',
      title: 'Email',
      dataIndex : 'email'
    },
    {
      key:'4',
      title: 'Role',
      dataIndex : 'role'
    },
    {
      key:'5',
      title: 'Phone',
      dataIndex : 'phone'
    }
  ]

const token= localStorage.getItem('token');
const decodedToken =  jwtDecode(token)
const admin = decodedToken.role







useEffect(()=>{
  if(admin === 'Super Admin'){

    instanceAxios.get('/users').then((response)=>
    {
      console.log(response)
      setData(response.data.users)
      console.log(response.data.users)
    
 
    })
  }
 


},[])

  return (

 
    <div>
   
      <Table
         columns={
          columns
        }
        dataSource={data}
        size="small"
        pagination={false}
      >
     
      </Table>

    </div>
  )
}

export default AllEployees