import React from 'react';
import styled from 'styled-components';
import JoraengColor from '../../components/ItemContainer/Joraengcolor';

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: var(--small-border-radius);

  /* width: 228px; */
  flex: 1 1 calc(33.3333% - 40px);
  min-width: 210px;
  max-width: calc(33.3333% - 40px);
  height: 260px;
  margin: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  @media (min-width: 612px) and (max-width: 1024px) {
    max-width: calc(50% - 40px);
  }
  @media (max-width: 612px) {
    max-width: inherit;
  }

  display: flex;
  flex-direction: column;

  cursor: ${(props) => (props.className === 'setItem' ? '' : 'pointer')};
  transition: 0.125s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.className === 'setItem' ? '' : 'rgba(0, 0, 0, 0.2)'};
  }
`;

const SetItemWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: var(--small-border-radius);

  width: 100%;
  height: 100%;
  z-index: 2;
`;

const ItemImageBox = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemInfoBox = styled.div`
  display: block;
  width: 100%;
  max-height: 100px;
`;

const ItemName = styled.div`
  font-size: 18px;
  padding: 0.5rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemPrice = styled.div`
  flex: 1;
  font-size: 14px;
  padding: 0.5rem 1rem;
  text-align: left;
`;

const ItemBox = ({ item, applyItem }) => {
  return (
    <>
      {item.apply === true ? (
        <Wrapper className="setItem">
          <SetItemWrapper>
            <ItemImageBox>
              <JoraengColor color={item.color}></JoraengColor>
            </ItemImageBox>
            <ItemInfoBox>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{`${item.price} 코인`}</ItemPrice>
            </ItemInfoBox>
          </SetItemWrapper>
        </Wrapper>
      ) : (
        <Wrapper onClick={() => applyItem(item)}>
          <ItemImageBox>
            <JoraengColor color={item.color}></JoraengColor>
          </ItemImageBox>
          <ItemInfoBox>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{`${item.price} 코인`}</ItemPrice>
          </ItemInfoBox>
        </Wrapper>
      )}
    </>
  );
};
export default ItemBox;
