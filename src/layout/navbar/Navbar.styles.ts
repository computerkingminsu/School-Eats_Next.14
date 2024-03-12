import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 67px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  width: 500px;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.05);
  background-color: white;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const ButtonWrapper = styled.div`
  width: 500px;
  height: 67px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 8%;
  padding-right: 8%;
  @media only screen and (max-width: 400px) {
    width: 100vw;
    padding-left: 1%;
    padding-right: 1%;
  }
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const Button = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 900;
  color: #000000;
  cursor: pointer;
`;

export const Div = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LineDiv = styled.div`
  width: 60px;
  height: 5px;
`;
