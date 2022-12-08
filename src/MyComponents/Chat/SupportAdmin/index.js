import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import {Navigate} from 'react-router-dom';
import Sidebar from '../../Dashboards/AdminDashboard/Sidebar';

const SupportAdmin = () => {
  return (
    <>
    {localStorage.getItem('role') == 'admin' ? null : <Navigate to="/" />}
    <Sidebar />
    <main style={{height: '100vh'}}> 
    <ChatEngine 
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName='admin'
      userSecret='adminpassword'
      height='calc(100vh - 20px)'
    />
    </main>
    </>
  );
}

export default SupportAdmin;
