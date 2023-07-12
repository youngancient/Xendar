import { styled } from "styled-components";

// padding-top padding-right padding-bottom padding-left

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  .desktop {
    display: none;
  }
  .mobile-nav-links {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  @media screen and (min-width: 728px) {
    display: flex;
    padding: 1rem 1rem;
    flex-shrink: 0;
    .desktop {
      display: flex;
      align-items: center;
    }
    .mobile {
      display: none;
    }
    .icons-group {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    .icons {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .desktop-nav-links {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 998px) {
    padding: 1rem 4.5rem;
    .icons {
      gap: 1rem;
    }
    .icons-group {
      gap: 2rem;
    }
    .desktop-nav-links {
      gap: 1.5rem;
    }
  }
`;
