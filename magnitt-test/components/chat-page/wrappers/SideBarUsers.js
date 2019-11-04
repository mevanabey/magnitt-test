import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ErrorBoundary from "@common/ErrorBoundary";
import Loader from '@common/Loader';
import ChatHead from '@common/chat-components/ChatHead';

import { API_URL } from '../constants';

const SideBarUsers = ({ threads, activeThread, searchTrigger, _updateActiveThread }) => {
  const [ endpointError, setEndpointError ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const [ users, setUsers ] = useState(null);

  useEffect(() => {
    let userIds = [];

    threads.map((thread) => {
      userIds.push(thread.receiver_id);   
    });
    
    const params = userIds.join('&id=');
    getUserDetails(params);
  }, [threads]);

  const getUserDetails = async (params) => {
    setLoading(true);
    const users = await axios.get(`${API_URL}/users?id=${params}`);

    if(users.data){
      setUsers(users.data);
      setLoading(false);
    }
  }

  const updateActiveThread = (userid) => {
    const thread = threads.findIndex((thread) => thread.receiver_id == userid);
    
    if(thread !== -1) _updateActiveThread(threads[thread].thread_id, 'personal');
  }

  return (
    <>
      <span className="sidebar_title">People</span>
      { users && !searchTrigger && !loading &&
        users.map((user) => (
          <ChatHead
            key={user.id} 
            name={`${user.first_name} ${user.last_name}`} 
            user_type="person" 
            user_id={user.id} 
            icon_color={user.icon_color} 
            active={activeThread.receiver_id && activeThread.receiver_id == user.id}
            status 
            last_online={new Date()}
            onPress={updateActiveThread}
          />
        ))
      }

      { users && !searchTrigger && !loading && users.length === 0 &&
        <p>No people found.</p>
      }

      { (searchTrigger || loading) &&
        <Loader />
      }

      <style jsx>{`
        .sidebar_title {
          color: #fff;
          display: block;
          font-size: 14px;
          font-weight: 700;
          margin: 40px 0 15px 0;
          text-transform: uppercase;
        }
      `}</style>
    </>
  )
}

export default SideBarUsers;
