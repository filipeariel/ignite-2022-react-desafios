import styled from "styled-components";

import backgroundImg from "../../../assets/background.png";

export const IntroContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 5.75rem 10rem 8rem;

  background-image: url(${backgroundImg});

  h1 {
    font-family: "Baloo 2";
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 3.9rem;
    color: ${(props) => props.theme["gray-900"]};
  }

  p {
    margin-top: 1rem;
    font-size: 1.125rem;
    line-height: 1.625rem;
  }

  > div > div {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      :nth-child(1) > div {
        background-color: ${(props) => props.theme["yellow-700"]};
      }

      :nth-child(2) > div {
        background-color: ${(props) => props.theme["gray-700"]};
      }

      :nth-child(3) > div {
        background-color: ${(props) => props.theme["yellow-500"]};
      }

      :nth-child(4) > div {
        background-color: ${(props) => props.theme["purple-500"]};
      }

      div {
        padding: 0.5rem;
        border-radius: 50%;

        color: white;
      }
    }
  }
`;
