import styled from "styled-components";

export const StyledFlexContainer = styled.div<{
  $jc?: string, $ai?: string, $gap?: number, $fw?: boolean,  $height?: number,
}>`
  display: flex;
  justify-content: ${props => props.$jc || "flex-start"};
  align-items: ${props => props.$ai || "stretch"};
  flex-wrap: ${$fw => $fw ? "wrap" : "nowrap"};
  height: ${props => props.$height ? `${props.$height}px` : "fit-content"};
  gap: ${props => props.$gap ? `${props.$gap}px` : "normal"};
`

export const StyledContainer = styled.div<{ $width: number, $dw: number }>`
  width: ${props => props.$width}%;

  @media screen and (max-width: 1200px) {
    width: ${props => props.$dw}%;
  }
`

export const StyledLogo = styled.img<{ $light?: boolean }>`
  width: 90px;
  height: fit-content;
  
  background: #fafafa;
  border-radius: 50%;
  cursor: pointer;
  margin: 5px 0;

  @media screen and (max-width: 1024px) {
    transform: rotate(270deg);
  }
`