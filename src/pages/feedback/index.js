import React, { useState } from 'react';
import Responsive from '../../components/common/Responsive';
import styled from 'styled-components';
import Header from '../../components/Header';
import SubTitle from '../../components/SubTitle';
import { feedback } from '../../store/user';
import { useDispatch } from 'react-redux';
import Modal from '../../components/Modal';

const ContentBox = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
`;

const InfoBox = styled.div`
  width: 320px;
  margin: 0 auto;
`;

const Info = styled.div`
  font-size: 12px;
  margin: 0.5rem;
  word-break: keep-all;
`;

const ReportInputBox = styled.div`
  border: 1px solid var(--text-second);
  margin-top: 1rem;
  height: 130px;
`;

const ReportInput = styled.input`
  width: 100%;
  border: none;
  margin: 50px 0px;
`;

const ReportButton = styled.button`
  outline: none;
  background: var(--primary-color);
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  width: 6rem;
  margin: 0 auto;
  margin-top: 2rem;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  margin-bottom: 2rem;
  text-align: center;
`;

const ModalButton = styled.button`
  box-sizing: border-box;
  float: right;
  margin-top: 1rem;
  border: none;
  color: white;
  height: 2rem;
  background: var(--primary-color);
  border-radius: 4px;
  outline: none;
`;

const ModalText = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
  color: var(--text-second);
`;

const Feedback = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');
  const onTextChange = (e) => {
    setInputText(e.target.value);
  };

  const sendFeedback = () => {
    dispatch(feedback(inputText));
    setModal();
  };

  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Header></Header>
      <Responsive>
        <ContentBox>
          <SubTitle title={'조랭이에게 의견 보내기'} />
          <InfoBox>
            <Info>
              다행 서비스를 사용하면서 부족하거나 아쉬운 점을 발견하셨다면,
              망설이지 말고 의견을 보내주세요!
            </Info>
            <Info>소중한 의견으로 더욱 행복한 다행이 됩니다 :)</Info>
          </InfoBox>
          <ReportInputBox>
            <ReportInput />
          </ReportInputBox>
          <ReportButton onClick={sendFeedback}>의견 보내기</ReportButton>
        </ContentBox>
        <Modal
          className="popup"
          openModal={openModal}
          setModal={setModal}
          title={<ModalTitle>의견이 잘 전달되었어요!</ModalTitle>}
          content={<ModalText>앞으로도 많은 이용부탁드립니다 :)</ModalText>}
          button={<ModalButton onClick={setModal}>확인</ModalButton>}
        />
      </Responsive>
    </>
  );
};

export default Feedback;