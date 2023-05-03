
import React, {useState,useEffect} from 'react';
import jwtDecode from "jwt-decode";
import {Table,Menu} from 'antd';
import instanceAxios from '../instanceAxios/ApiGlobal';
import { PieChartOutlined, TeamOutlined } from '@ant-design/icons'
import { FaRegBell } from 'react-icons/fa'
import axios from 'axios';


import {
    DashboardOutlined,
    UserOutlined,
    PoweroffOutlined,
  } from '@ant-design/icons/lib/icons'
import { useNavigate } from 'react-router-dom';
import { Content, Footer, Header } from 'antd/es/layout/layout';



const EmployeesList = () => {
    const [userData , setData] =useState([])
 const navigate = useNavigate()





const columns =[
{
    key:'2',
    title:'FirstName',
    dataIndex:'firstName'
},
{
    key:'3',
    title:'LastName',
    dataIndex:'lastName'
},
{
    key:'4',
    title:'Role',
    dataIndex:'role'
},
{
    key:'5',
    title:'isActive',
    dataIndex:'isActive'
},

]

const token= localStorage.getItem('token');
const decodedToken = jwtDecode(token)
const userId = decodedToken.userId;
const id = userId


 const setAuthToken = token => {
	if(token) {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

	} else{
		delete axios.defaults.headers.common["Authorization"]
	}
  }

    useEffect(()=>{
     
        if(token){
          
            console.log(token)
            setAuthToken(token)
           
           instanceAxios.get(`/users/${id}`).then((response)=>{
                console.log(response.data)
                setData(response.data)
            })
        }
   
    },[])
const data = userData
    return(
        <>
       <Header
        style={{
          height: 60,
          backgroundColor: 'lightskyblue',
          color: 'white',
          display: 'flex',

          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      >
        <h2>
          <DashboardOutlined /> Dashbord Admin
        </h2>{' '}
      </Header>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          height: '800px',
          bottom: '10px',
          position: 'relative',
        }}
      >
        <Menu
          theme="dark"
          onClick={({ key }) => {
            if (key === 'SignOut') {

            } else {
              navigate(key)
            }
          }}
          items={[
            {
              label: 'Profile',
              key: '/Profile',
              icon: <UserOutlined style={{ fontSize: '23px' }} />,
              children: [{ label: 'Admin', key: '/Profile' }],
            },
            {
              label: 'Employees',
              key: '/Employees',
              icon: <TeamOutlined style={{ fontSize: '20px' }} />,
            },
            {
              label: 'Requests',
              icon: <PieChartOutlined style={{ fontSize: '20px' }} />,
            },
            {
              label: 'Notifcation',
              icon: <FaRegBell style={{ fontSize: '20px' }} />,
            },
            {
              label: 'SignOut',
              icon: <PoweroffOutlined style={{ fontSize: '20px' }} />,
              danger: true,
            },
          ]}
          style={{
            fontSize: '20px',
            padding: '20px',
            margin: '10px',
            width: '30%',
          }}
        />

        <Content style={{ position: 'relative', top: '30px' }}>
        <Table key={data.id} columns={columns} dataSource={data}/>
          
        </Content>
      </div>
      <Footer
        style={{
          height: 60,
          backgroundColor: 'lightgray',
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          position: 'relative',
          bottom: '16px',
        }}
      >
        <h3>
          {/* <span style={{ color: 'black' }}>{connectedUser.role}:</span>
          {connectedUser.email} */}
        </h3>
      </Footer>
    

  
            
               
           

       
        </>
    )
}

export default EmployeesList