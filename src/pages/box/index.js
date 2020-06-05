import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecords } from 'store/box';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import FeedBox from './FeedBox.js';
import ThreadBox from './ThreadBox.js';
import Header from 'components/Header';
import search from 'assets/icon/search.png';
import feed from 'assets/icon/feed.png';
import thread from 'assets/icon/thread.png';
import Responsive from '../../components/common/Responsive.js';

const SortingBar = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  background-color: white;
  height: 2rem;
`;

const SortingBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ListModeIcon = styled.div`
  width: 1.5rem;
  height: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.sortingType === 'feed' ? 'row' : 'column')};
  flex-wrap: ${(props) => (props.sortingType === 'feed' ? 'wrap' : 'inherit')};
  justify-content: ${(props) => (props.sortingType === 'feed' ? 'flex-start' : 'center')};
  padding: 20px;
  height: calc(100vh - 10rem - 16px);
  overflow-y: auto;
  
  @media screen and (max-width: 480px){
    padding: 10px;  
  }
`;

const Box = () => {
  const [sortingType, setSortingType] = useState('feed'); //search, feed, thread

  const records = useSelector((state) => state.box.records);
  //const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecords());
  }, [dispatch]);

  return (
    <>
      <Header></Header>
      <Responsive style={{ color: '#333333' }}>
        <SortingBar>
          <SortingBox>
            <ListModeIcon onClick={() => setSortingType('search')}>
              <img
                alt=""
                src={search}
                style={{
                  width: '1rem',
                  height: '1rem',
                  objectFit: 'scale-down',
                }}
              ></img>
            </ListModeIcon>
            <ListModeIcon onClick={() => setSortingType('feed')}>
              <img
                alt=""
                src={feed}
                style={{
                  width: '1rem',
                  height: '1rem',
                  objectFit: 'scale-down',
                }}
              ></img>
            </ListModeIcon>
            <ListModeIcon onClick={() => setSortingType('thread')}>
              <img
                alt=""
                src={thread}
                style={{
                  width: '1rem',
                  height: '1rem',
                  objectFit: 'scale-down',
                }}
              ></img>
            </ListModeIcon>
          </SortingBox>
        </SortingBar>

        <Content sortingType={'feed'}>
          {sortingType === 'thread' ? (
            records &&
            records.map((record, index) => {
              return <ThreadBox record={record} key={index}></ThreadBox>;
            })
          ) : sortingType === 'feed' ? (
            records &&
            records.map((record, index) => {
              return <FeedBox record={record} key={index}></FeedBox>;
            })
          ) : (
            <ListModeIcon></ListModeIcon>
          )}
        </Content>
      </Responsive>
    </>
  );
};

export default Box;
