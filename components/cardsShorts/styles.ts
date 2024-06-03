import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {Theme} from "../../theme";

export const CardVideo = styled(NavLink)`
  min-width: 100px;
  min-height: 300px;
  max-width: 160px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: flex-start;
`;

export const ThumbnailShortVideo = styled.img`
  width: 100%;
  min-height: 350px;
  border-radius: 10px;
`;

export const TitleShortVideo = styled.span`
  color: ${({theme}) => Theme.colors.primary};
  font-weight: 600;
`;

export const DetailsShortVideo = styled.span`
  color: #8c8c8c;
  font-size: 14px;
`;