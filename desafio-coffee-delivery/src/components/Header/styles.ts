import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;

  padding: 2rem 10rem;

  background-color: ${(props) => props.theme["gray-100"]};

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: 0.875rem;
      color: ${(props) => props.theme["purple-500"]};
    }

    div > div {
      display: flex;
      gap: 0.25rem;

      padding: 0.5rem;
      border-radius: 8px;
      background-color: ${(props) => props.theme["purple-200"]};
    }

    div {
      display: flex;
      align-items: center;
    }

    div > a {
      position: relative;
      padding: 0.5rem;
      border-radius: 8px;

      color: ${(props) => props.theme["yellow-700"]};
      background-color: ${(props) => props.theme["yellow-200"]};

      span {
        font-size: 0.75rem;
        font-weight: bold;
        color: ${(props) => props.theme.white};

        display: flex;
        align-items: center;
        justify-content: center;

        height: 1.5rem;
        width: 1.5rem;
        position: absolute;
        top: -0.625rem;
        right: -0.625rem;
        border-radius: 50%;
        background-color: ${(props) => props.theme["yellow-700"]};
      }
    }
  }
`;
