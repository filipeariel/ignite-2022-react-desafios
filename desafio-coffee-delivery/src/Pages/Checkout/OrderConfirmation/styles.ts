import styled from "styled-components";

export const Title = styled.span``;

export const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-family: "Baloo 2";
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme["gray-800"]};
  }

  > div {
    background-color: ${(props) => props.theme["gray-200"]};
    border-radius: 6px 36px;
    margin-top: 1rem;
    padding: 2.5rem;
  }
`;

export const CoffeeContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};

  > strong {
    display: block;
    width: 100%;
    text-align: right;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  & > div:first-of-type {
    display: grid;
    grid-template-columns: 50% auto;

    > span {
      color: ${(props) => props.theme["gray-800"]};
      grid-column: span 2 / auto;
    }

    > div {
      grid-column: span 1 / auto;
      background-color: ${(props) => props.theme["gray-400"]};
      width: 4.5rem;
      border-radius: 6px;

      display: flex;
      justify-content: center;
      align-items: center;

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

      input {
        width: 2rem;
        text-align: center;
        -webkit-appearance: none;

        background-color: ${(props) => props.theme["gray-400"]};
        border: 0;
        cursor: default;

        color: ${(props) => props.theme["gray-900"]};

        &:focus {
          outline: none;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }

    > button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 0.5rem;

      font-size: 12px;
      color: ${(props) => props.theme["gray-700"]};
      background-color: ${(props) => props.theme["gray-400"]};

      cursor: pointer;
      border: none;
      border-radius: 6px;

      &:hover {
        background-color: ${(props) => props.theme["gray-500"]};

        transition: background-color 0.3s;
      }

      svg {
        color: ${(props) => props.theme["purple-500"]};
      }
    }
  }
`;

export const Total = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  button {
    margin-top: 0.75rem;
    border: none;
    border-radius: 6px;
    padding: 0.75rem 0;
    width: 100%;
    font-size: 0.875rem;
    font-weight: bold;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["yellow-500"]};
    transition: background-color 0.3s;

    cursor: pointer;

    &:disabled {
      opacity: 0.8;
    }

    &:disabled:hover {
      cursor: not-allowed;
      background-color: ${(props) => props.theme["yellow-500"]};
    }

    &:hover {
      background-color: ${(props) => props.theme["yellow-700"]};
    }
  }
`;
