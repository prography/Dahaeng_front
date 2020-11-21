import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from 'store/auth';
import styled from 'styled-components';
import SignResponsive from '../../components/common/SignResponsive';
// import MyJoraeng from 'assets/joraeng/egg/purpleegg.png';
import MainJoraeng from '../../components/Joraeng/MainJoraeng';

const Title = styled.div`
  font-size: 32px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const TextBox = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 3rem;
`;

//왜 이 친구는 이렇게 크게 나오는 부분이지
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 1rem;
`;

// const JoraengImg = styled.img`
//   object-fit: cover;
//   height: 160px;
//   align-items: center;
//   justify-content: center;
// `;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
`;

const NicknameInput = styled.input`
  border: none;
  border-bottom: 1px solid #bbbbbb;
  text-align: center;
  padding: 4px 8px 6px;
  width: 300px;
`;

const ButtonBox = styled.div`
  margin-top: 2rem;
  flex: 1;
  margin-left: none;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
  outline: none;
  background: var(--primary-color);
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: 3rem;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 2rem;
`;

const Create = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const has_jorang = useSelector((state) => state.auth.has_jorang);

  useEffect(() => {
    if (has_jorang === true) {
      history.push('/');
    }
  }, [has_jorang, history]);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    console.log('submit');
    dispatch(create({ nickname: name, color: 'FFFFFF' }));
    // dispatch(create({ nickname: 'asd', ... }))
    //history.push('/');
  };

  return (
    <>
      <SignResponsive>
        <Title>Da:haeng</Title>
        <TextBox>
          <div>짜잔- 나만의 반려조랭이에요</div>
          <div>조랭이의 이름을 지어주세요</div>
        </TextBox>
        <ImageBox>
          {/* <JoraengImg
            id="joraengImg"
            src={}
            alt=""
          /> */}
          <MainJoraeng age={'2'} color="#FC9285"></MainJoraeng>
        </ImageBox>
        <InputBox>
          <NicknameInput
            value={name}
            onChange={onChange}
            placeholder="조랭이 이름을 적어주세요!"
          />
        </InputBox>
        <TextBox>
          <div>매일 매일 행복을 기록하면, </div>
          <div>나의 반려 조랭이가 무럭무럭 자랍니다</div>
        </TextBox>
        <ButtonBox>
          <LoginButton onClick={onSubmit}>
            오늘의 행복 기록하러 가기
          </LoginButton>
        </ButtonBox>
      </SignResponsive>
    </>
  );
};

export default Create;
