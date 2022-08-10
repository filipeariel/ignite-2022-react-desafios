import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin: 2.5rem 10rem 2rem;

  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme["yellow-700"]};
    font-family: "Baloo 2";
  }

  span {
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.25rem;
  }

  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  div {
    max-width: 32rem;
    margin-top: 2.5rem;
    padding: 2.5rem;
    border-radius: 6px 36px;
    position: relative;
    background-color: ${(props) => props.theme["gray-100"]};

    &::before {
      content: "";
      position: absolute;
      inset: -1px;
      z-index: -1;
      border-radius: 7px 37px;
      border-top-left-radius: 7px;
      border-top-right-radius: 37px;
      border-bottom-right-radius: 7px;
      border-bottom-left-radius: 37px;
      background: linear-gradient(
        102.89deg,
        rgb(219, 172, 44) 2.61%,
        rgb(128, 71, 248) 98.76%
      );
    }

    div {
      margin: 0;
      padding: 0;
      border: none;

      display: flex;
      gap: 1rem;

      p {
        line-height: 130%;
        display: block;
      }

      :nth-child(1) > div {
        color: ${(props) => props.theme.white};
        height: 100%;
        background-color: ${(props) => props.theme["purple-500"]};
        margin: 0 0 2rem;

        padding: 0.5rem;
        border-radius: 50%;
      }

      :nth-child(2) > div {
        color: ${(props) => props.theme.white};
        height: 100%;
        background-color: ${(props) => props.theme["yellow-500"]};
        margin: 0 0 2rem;

        padding: 0.5rem;
        border-radius: 50%;
      }

      :nth-child(3) > div {
        color: ${(props) => props.theme.white};
        height: 100%;
        background-color: ${(props) => props.theme["yellow-700"]};
        margin: 0;

        padding: 0.5rem;
        border-radius: 50%;
      }
    }
  }

  img {
    top: 10px;
  }
`;
