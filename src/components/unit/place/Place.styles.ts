import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 2%;
  color: #8f8f8f;
  padding-left: 3%;
  padding-right: 3%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 4%;
  margin-bottom: 3%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const SelectButton = styled.button`
  border-radius: 17px;
  border: none;
  color: white;
  /* width: 56px; */
  min-width: 56px;
  height: 34px;
  background-color: #f6786f;
  font-weight: 600;
  font-size: 13px;
  margin-right: 1.5%;
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

export const Button = styled.button`
  border-radius: 17px;
  border: 1px solid #bdbdbd;
  color: #2f2f2f;
  min-width: 56px;
  height: 34px;
  background-color: white;
  font-weight: 600;
  font-size: 12px;
  margin-right: 1.5%;
  cursor: pointer;
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
`;

export const ContentsItem = styled.div`
  flex: 1 1 49%; // flex-basis를 48%로 설정하여 한 열에 두 개씩 나오도록 합니다.
  max-width: 49%; // 최대 너비도 48%로 설정합니다.
  border-radius: 10px;
  margin-top: 4%;
  :hover {
    filter: brightness(96%);
  }
`;

export const ContentsImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 23 / 24;
  position: relative;
  object-fit: contain;
`;

export const ContentsTitleWrapper = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3%;
`;

export const RateWrapper = styled.div`
  color: #424242;
  font-size: 15px;
  padding-bottom: 1px;
`;

export const ContentsTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;
export const ContentsBreakTime = styled.div`
  font-size: 12px;
  margin-top: 2%;
  color: #6f6f6f;
`;

export const ContentsMenu = styled.div`
  font-size: 13px;
  margin-top: 2%;
  font-weight: 700;
  color: #424242;
`;

export const SpinDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

export const SelectDiv = styled.div`
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 3%;
  display: flex;
  justify-content: flex-end;
`;
