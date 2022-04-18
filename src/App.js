import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Cryptocurrencies, Homepage, Navbar, News } from './components';



function App() {
  
  return (
    <div className="app">
     <div className='navbar'>
        <Navbar />
     </div>
     <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<Homepage />} />                
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
     <div className='footer'>
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
          Yajra <br />
          All Rights Reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
     </div>     
     </div>
    </div>
  );
}

export default App;
