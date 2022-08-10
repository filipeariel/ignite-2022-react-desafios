import styled from "styled-components";

export const CoffeesContainer = styled.main`
  margin: 0 10rem 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4rem 2rem;
`;

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;

  background-color: ${(props) => props.theme["gray-200"]};

  border-radius: 6px 36px;

  img {
    margin: -1.25rem auto 0.875rem;
  }

  & > div:first-of-type {
    display: flex;
    gap: 0.25rem;
    margin: 0 auto;

    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.813rem;

    color: ${(props) => props.theme["yellow-700"]};

    span {
      background-color: ${(props) => props.theme["yellow-200"]};
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
      text-transform: uppercase;
    }
  }

  h2 {
    font-family: "Baloo 2";
    font-weight: 700;
    margin-top: 1rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme["gray-800"]};
  }

  p {
    margin-top: 0.5rem;
    padding: 0 1.25rem;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.138rem;

    color: ${(props) => props.theme["gray-600"]};
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 1.5rem 1.5rem;

    span {
      width: 100%;
      font-size: 0.875rem;
      line-height: 1.138rem;
      margin-right: 0.5rem;

      strong {
        font-family: "Baloo 2";
        font-size: 1.5rem;
        line-height: 1.95rem;
      }
    }

    > div:nth-of-type(1) {
      padding: 0.5rem;
      background-color: ${(props) => props.theme["gray-400"]};
      width: 100%;
      border-radius: 6px;

      display: flex;
      justify-content: center;
      align-items: center;

      input {
        width: 50%;
        text-align: center;
        -webkit-appearance: none;

        background-color: ${(props) => props.theme["gray-400"]};
        border: 0;
        cursor: default;

        color: ${(props) => props.theme["gray-900"]};
        line-height: 1.3rem;

        &:focus {
          outline: none;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      button {
        border: none;
        background-color: ${(props) => props.theme["gray-400"]};

        cursor: pointer;
        color: ${(props) => props.theme["purple-500"]};

        &:hover {
          color: ${(props) => props.theme["purple-700"]};
          transition: color 0.2s;
        }
      }
    }

    > button {
      margin-left: 0.5rem;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme["purple-700"]};

      border-radius: 8px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme["purple-500"]};
        transition: background-color 0.2s;
      }
    }
  }
`;
