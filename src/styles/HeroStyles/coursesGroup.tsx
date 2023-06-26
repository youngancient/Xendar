import { styled } from "styled-components";

export const CoursesGroupStyle = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-top : 1rem;
  gap: 1rem;
  padding : 0.5rem 0.25rem 0.5rem 0.25rem;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media screen and (min-width: 728px) {
    gap: 1.5rem;
  }
  @media screen and (min-width: 998px) {
    
  }
`;
