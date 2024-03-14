import styled from 'styled-components';
import { Skeleton } from 'antd';

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
  padding-left: 3%;
  padding-right: 3%;
  min-height: 430px;
`;

//
export const Notice = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 7%;
  padding-left: 3%;
`;

export const SubNotice = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-top: 2%;
  color: #8f8f8f;
  padding-left: 3%;
`;

export const Bookmarktitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
export const BookmarkText = styled.span`
  font-size: 13px;
`;

export const BookmarkWrapper = styled.div`
  line-height: 1.5;
  margin-top: 4%;
  height: auto;
  border: 2px solid #e6e6e6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 0;
  padding-left: 3%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03); // slightly darken on hover
  }
`;

export const RateWrapper = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1px;
`;

export const StyledSkeleton = styled(Skeleton)`
  margin-top: 10%;
`;
