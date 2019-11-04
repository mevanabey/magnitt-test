import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ErrorBoundary from "@common/ErrorBoundary";
import Loader from '@common/Loader';
import ChatHead from '@common/chat-components/ChatHead';

import { API_URL } from '../constants';

const SideBarOrganizations = ({ threads, activeThread, searchTrigger, _updateActiveThread }) => {
  const [ endpointError, setEndpointError ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const [ organizations, setOrganizations ] = useState(null);

  useEffect(() => {
    let orgIds = [];

    threads.map((thread) => {
      orgIds.push(thread.organization_id);   
    });
    
    const params = orgIds.join('&id=');
    getOrgDetails(params);
  }, [threads]);

  const getOrgDetails = async (params) => {
    setLoading(true);
    const organizations = await axios.get(`${API_URL}/organizations?id=${params}`);

    if(organizations.data){
      setLoading(false);
      setOrganizations(organizations.data);
    }
  }

  const updateActiveThread = (orgid) => {
    const thread = threads.findIndex((thread) => thread.organization_id == orgid);
    
    if(thread !== -1) _updateActiveThread(threads[thread].thread_id, 'organizations');
  }

  return (
    <>
      <span className="sidebar_title">Organizations</span>
      { organizations && !searchTrigger && !loading && 
        organizations.map((org) => (
          <ChatHead
            key={org.id} 
            name={org.organization_name} 
            user_type="org"
            user_id={org.id} 
            icon_color={org.icon_color} 
            active={activeThread.organization_id && activeThread.organization_id == org.id}
            status 
            last_online={new Date()}
            onPress={updateActiveThread}
          />
        ))
      }

      { organizations && !searchTrigger && !loading && organizations.length === 0 &&
        <p>No organizations found.</p>
      }

      { (searchTrigger || loading) &&
        <Loader />
      }
      {/* <div className="toggle_expand">See All</div> */}

      <style jsx>{`
        .sidebar_title {
          color: #fff;
          display: block;
          font-size: 14px;
          font-weight: 700;
          margin: 30px 0 15px 0;
          text-transform: uppercase;
        }
      `}</style>
    </>
  )
}

export default SideBarOrganizations;
