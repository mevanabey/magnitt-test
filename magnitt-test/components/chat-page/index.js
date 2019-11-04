import React, { useState, useEffect, useRef } from 'react'
import { throttle } from 'lodash';
import { useDebounce } from 'use-lodash-debounce'
import axios from 'axios';

import ErrorBoundary from "@common/ErrorBoundary";
import Search from "@common/Search";
import Loader from '@common/Loader';
import UserHead from '@common/chat-components/UserHead';

import SideBarOrganizations from './wrappers/SideBarOrganizations';
import SideBarUsers from './wrappers/SideBarUsers';
import Thread from './wrappers/Thread';
import SideBar from './layout/SideBar';
import MainContent from './layout/MainContent';

import { API_URL } from './constants';

const ChatPage = () => {
  const [ endpointError, setEndpointError ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  
  const [ searchValue, setSearchValue ] = useState(null);
  const [ searching, setSearching ] = useState(false);

  const [ loggedInUser, setLoggedInUser ] = useState(null);
  const [ usersThreads, setUsersThreads ] = useState(null);
  const [ resetThreads, setResetThreads ] = useState(false);
  const [ userOrganizations, setUserOrganizations ] = useState(null);
  const [ activeThread, setActiveThread ] = useState(null);

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    axios.get(`${API_URL}/users/1`)
      .then(res => {
        const user = res.data;

        setLoggedInUser(user);
        setActiveThread(user.organization_threads[0]);
        setUsersThreads({
          personal: user.personal_threads,
          organizations: user.organization_threads
        });

        setLoading(false);
      })
      .catch(err => {
        setEndpointError(true);
        setLoading(false);
        console.error('Error retreiving data - ', err);
      })
  }, [resetThreads]);

  useEffect(() => {
    if(searchValue && searchValue !== ""){
      searchUsers(searchValue);
    } else {
      setResetThreads(!resetThreads);
    }
  }, [debouncedSearch]);

  const searchUsers = async (value) => {
      setSearching(true);
      const people = await axios.get(`${API_URL}/users?q=${value}`);
      const organizations = await axios.get(`${API_URL}/organizations?q=${value}`);

      const peopleThreads = people.data.map((user) => {
        const existingThread = usersThreads.personal.findIndex((thread) => thread.receiver_id == user.id);
        
        user.thread_type = "personal";
        user.receiver_id = user.id;

        if(existingThread !== -1){
          user.thread_id = usersThreads.personal[existingThread].thread_id;
        } else {
          user.thread_id = user.id;
        }

        return user;
      });

      const organizationThreads = organizations.data.map((org) => {
        const existingThread = usersThreads.organizations.findIndex((thread) => thread.organization_id == org.id);

        org.organization_id = org.id;
        org.thread_type = "organization";
    
        if(existingThread !== -1){
          org.thread_id = usersThreads.organizations[existingThread].thread_id;
        } else {
          org.thread_id = org.id;
        }

        return org;
      });

      setUsersThreads({
        personal: peopleThreads,
        organizations: organizationThreads
      });

      setSearching(false);
  }

  const _updateActiveThread = (id, thread_type) => {
    const newThread = usersThreads[thread_type].findIndex((thread) => thread.thread_id == id);

    if(newThread !== -1) setActiveThread(usersThreads[thread_type][newThread]);
  }

  return (
    <>
      { !loading && !endpointError &&
        <>
          <SideBar>
            { loggedInUser &&
              <UserHead 
                name={`${loggedInUser.first_name} ${loggedInUser.last_name}`}
                status="online"
              />
            }
            <Search _updateSearchValue={setSearchValue} />
            { usersThreads && usersThreads.organizations &&
              <SideBarOrganizations 
                threads={usersThreads.organizations} 
                activeThread={activeThread}
                searchTrigger={searching} 
                _updateActiveThread={_updateActiveThread} />
            }
            { usersThreads && usersThreads.personal &&
              <SideBarUsers 
                threads={usersThreads.personal} 
                activeThread={activeThread}
                searchTrigger={searching} 
                _updateActiveThread={_updateActiveThread} 
              />
            }
          </SideBar>
          <MainContent>
            <Thread thread={activeThread} />
          </MainContent>
        </>
      }
      { loading &&
        <Loader />
      }
      { !loading && endpointError &&
        <>
          <p>Oops! Something is wrong with the API. Have you started the json-server yet?</p>
          <style jsx>{`
            p {
              width: 100%;
              font-size: 18px;
              text-align: center;

              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
          `}</style>
        </>
      }
    </>
  )
}

export default ChatPage;
