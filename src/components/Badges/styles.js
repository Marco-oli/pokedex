import styled from 'styled-components';

export const ContainerBadge = styled.View`
  flex-direction: row;
  align-items: center;
  width: 61px;
  height: 25px;
  border-radius: 3px;
  padding: 5px;
  background-color: ${props => props.background};
`;

export const BadgeImage = styled.Image`
  width: 13.8px;
  height: 15px;
  margin-right: 5px;
`;
