import './Dashboard.css'
import React, { useEffect, useState } from 'react'
import { PieChartOutlined, TeamOutlined } from '@ant-design/icons'

import { Menu } from 'antd'
import {
  DashboardOutlined,
  UserOutlined,
  PoweroffOutlined,
} from '@ant-design/icons/lib/icons'

import { FaRegBell } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'
import Content from './Content'
import { Header } from 'antd/es/layout/layout'
import { Footer } from 'antd/es/modal/PurePanel'

const Dashboard = () => {
  const [connectedUser, setConnctedUser] = useState({})
  const navigate = useNavigate()
  const getConectedUser = () => {
    setConnctedUser(JSON.parse(localStorage.getItem('user_data')))
  }
  useEffect(() => {
    getConectedUser()
  }, [])

  return (
    <div>
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

        <div style={{ position: 'relative', top: '30px' }}>
          {/* <EmployeesList /> */}
        
        </div>
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
          <span style={{ color: 'black' }}>{connectedUser.role}:</span>
          {connectedUser.email}
        </h3>
      </Footer>
    </div>
  )
}

export default Dashboard
