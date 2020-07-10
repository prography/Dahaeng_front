import React, { useState } from 'react';
import styled from 'styled-components';
import ground from 'assets/main/ground.jpg';
import postbox from 'assets/main/notification.png';
import postboxOn from 'assets/main/notificationOn.png';
import closet from 'assets/main/itembox.png';
import Moment from 'moment';
import NoticeModal from '../../components/NoticeModal';
import MainJoraeng from '../../components/Joraeng/MainJoraeng';
import { useSelector } from 'react-redux';
import SliderJoraeng from '../../components/Joraeng/SliderJoraeng';

//Modal
const Date = styled.div`
  font-size: 18px;
`;

const ModalTitle = styled.div``;

const Reminder = styled.div`
  width: 90%;
  height: 2rem;
  border: 1px solid black;
`;

const Notice = styled.div`
  width: 85%;
  height: 1.5rem;
  border: 1px solid black;
`;

const ModalQuestion = styled.div`
  font-size: 18px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffede5 40%);
  display: inline;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalCharacter = styled.div`
  box-sizing: border-box;
  width: 10rem;
  height: 10rem;
  border: 1px solid #e9e9e9;
  margin: 5% auto;
  overflow: hidden;
`;

const ModalCharacterImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const ModalCharacterDefaultImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin-left: 3rem;
`;

const ModalInput = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  border: none;
  outline: none;
  resize: none;

  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 30px,
      #e9e9e9 30px,
      #e9e9e9 31px,
      white 31px
    );
  line-height: 31px;
  padding: 8px;
`;

//Modal
const Wrapper = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 664px;
  position: relative;

  @media screen and (max-width: 480px) {
    height: 220px;
  }
  @media screen and (max-width: 440px) {
    height: 200px;
  }
`;

const PostBox = styled.button`
  position: absolute;
  width: 90px;
  top: 80px;
  left: 120px;
  z-index: 2;
  @media screen and (max-width: 664px) {
    top: 100px;
    left: 60px;
  }
  @media screen and (max-width: 480px) {
    width: 50px;
    top: 70px;
    left: 20px;
  }
`;

const PostBoxImg = styled.img`
  width: 100%;
`;

const Character = styled.button`
  position: absolute;
  right: 100px;
  width: 160px;
  z-index: 2;
  top: 40px;
  @media screen and (max-width: 480px) {
    right: 70px;
    top: 20px;
    width: 100px;
  }
`;

const Closet = styled.button`
  position: absolute;
  width: 60px;
  top: 145px;
  right: 70px;
  z-index: 3;
  @media screen and (max-width: 480px) {
    width: 50px;
    top: 80px;
    right: 50px;
  }
`;

const ClosetImg = styled.img`
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
  width: 100%;

  @media (min-width: 481px) and (max-width: 520px) {
    bottom: 50px;
  }
  @media screen and (max-width: 380px) {
    bottom: 10px;
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
`;

//hasItems: 서버에서 받아온 실제 착용한 아이템, applyItems: 옷장에서 테스팅해볼 아이템
const Room = ({ notice, reminder, history, hasItems, applyItems }) => {
  const user = useSelector((state) => state.user.user);
  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  const moveCloset = () => {
    history.push('/closet');
  };

  const moveMain = () => {
    history.push('/');
  };
  return (
    <Wrapper>
      <PostBox>
        {notice ? (
          <PostBoxImg onClick={setModal} src={postboxOn} alt="" />
        ) : (
          <PostBoxImg src={postbox} alt="" />
        )}
      </PostBox>
      <Character onClick={moveMain}>
        {/*TODO: Dynamic color binding*/}
        <MainJoraeng
          age={user.joraengStatus}
          color={
            applyItems !== null
              ? applyItems.color
              : hasItems &&
                hasItems
                  .filter((item) => item.item_type === 'jorang_color')
                  .filter((item) => item.is_worn === true)[0].item_detail
          }
        />
      </Character>
      <Closet onClick={moveCloset}>
        <ClosetImg src={closet} alt="" />
      </Closet>
      <Background>
        <BackgroundImg src={ground} alt="" />
      </Background>
      <NoticeModal
        openModal={openModal}
        setModal={setModal}
        title={<ModalTitle>{'공지사항'}</ModalTitle>}
        notice={
          notice &&
          notice.map((notice) => {
            return <Notice>{notice && notice.title}</Notice>;
          })
        }
        reminder={
          <Reminder>{'1년 전, 나는 이렇게 행복했어요! 함께 볼까요?'}</Reminder>
        }
      ></NoticeModal>
    </Wrapper>
  );
};

export default Room;
