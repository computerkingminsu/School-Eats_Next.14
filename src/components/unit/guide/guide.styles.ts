import styled from 'styled-components';

export const TitleWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  position: absolute;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
`;

export const BackButton = styled.a`
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 26px;
  width: 26px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 50%;
`;

export const Notice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 8%;
  padding: 0 3%;
`;

export const SubNotice = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 5%;
  color: #6e6e6e;
  line-height: 2;
  padding: 0 3%;
`;

export const Divine = styled.div`
  background-color: #eaecf4;
  height: 8px;
  width: 100%;
  margin-top: 5%;
`;
