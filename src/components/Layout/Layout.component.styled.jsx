import styled from 'styled-components'

export const MainContainer =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0;
  background-color: #064476;
  margin: 0;
  display: flex;
  justify-content: space-between;
  height: 60px;

`;

export const LeftSection = styled.div`
  width: 500px;
  display: flex;
  align-items: center;

`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
`;

export const TextMode = styled.p`
  color: #fafafa;
  font-size: 15px;
`;

export const ToggleContainer = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: 15px;
`

export const AvatarContainer = styled.div`
  margin-left: 30px;
  margin-right: 10px;
  color: darkgrey;
`;

export const ContainerBars = styled.div`
  margin-left: 15px;
  margin-right: 25px;
`;
