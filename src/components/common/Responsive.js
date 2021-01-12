import styled from 'styled-components';

const Responsive = styled.div`
  /* padding-left: 1rem;
  padding-right: 1rem; */
  max-width: 768px;
  margin: 0 auto;
  max-height: 100%;
  overflow-y: hidden;
`;

// const Responsive = ({ children, ...rest }) => {
//   //propr를 사용할 수 있도록 ...rest 를 사용하여 ResponsiveBlock에게 전달
//   return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
// };

export default Responsive;
