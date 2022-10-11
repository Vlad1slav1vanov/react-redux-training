import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/redusers/ActionCreators';
import { userSlice } from './store/redusers/UserSlice';

function App() {
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])
  return (
    <div>
      {/* {isLoading && <h1>LOADING</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{display: 'flex'}}>
        <PostContainer/>
        <PostContainer2/>
      </div>
    </div>
  );
}

export default App;
