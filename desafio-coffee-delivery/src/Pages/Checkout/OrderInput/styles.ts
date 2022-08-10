import styled from "styled-components";

export const OrderInputContainer = styled.div`
  width: 55%;

  span {
    font-family: "Baloo 2";
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme["gray-800"]};
  }

  & > div:first-of-type {
    margin-top: 1rem;
    padding: 2.5rem;
    background-color: ${(props) => props.theme["gray-200"]};
    border-radius: 6px;

    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme["yellow-500"]};
      }

      strong {
        font-weight: normal;
        color: ${(props) => props.theme["gray-800"]};
        line-height: 130%;
      }

      span {
        font-size: 0.875rem;
        font-family: "roboto";
        font-weight: normal;
      }
    }
  }
`;

export const FormContainer = styled.form`
  display: grid;
  max-width: 100%;
  margin: 2rem 0 0;
  grid-template-columns: 10.5rem 14.5rem 2.8rem;
  gap: 1rem 0.75rem;
  grid-auto-flow: dense;

  > div {
    display: flex;
    flex-direction: column !important;
    height: 2.625rem;
  }

  div.cep {
    grid-column: span 3 / auto;
    max-width: 10.5rem;
    height: 100%;

    > span {
      color: #ff0000;
    }

    div {
      border: 1px solid ${(props) => props.theme["gray-400"]};
      border-radius: 4px;
      background-color: ${(props) => props.theme["gray-300"]};

      &.required {
        border: 1px solid #ff0000;
      }
      :focus-within {
        border: 1px solid ${(props) => props.theme["yellow-700"]};
        transition: border 0.4s;
      }
    }
  }

  div.street {
    grid-column: span 3 / auto;
    height: 100%;

    > span {
      color: #ff0000;
    }

    div {
      border: 1px solid ${(props) => props.theme["gray-400"]};
      border-radius: 4px;
      background-color: ${(props) => props.theme["gray-300"]};

      &.required {
        border: 1px solid #ff0000;
      }

      :focus-within {
        border: 1px solid ${(props) => props.theme["yellow-700"]};
        transition: border 0.4s;
      }
    }
  }

  div.number {
    grid-column: span 1 / auto;
    height: 100%;

    > span {
      color: #ff0000;
    }

    div {
      border: 1px solid ${(props) => props.theme["gray-400"]};
      border-radius: 4px;
      background-color: ${(props) => props.theme["gray-300"]};

      &.required {
        border: 1px solid #ff0000;
      }

      :focus-within {
        border: 1px solid ${(props) => props.theme["yellow-700"]};
        transition: border 0.4s;
      }
    }
  }

  div.complement {
    grid-column: span 2 / auto;
    flex-direction: row !important;
    border: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 4px;
    background-color: ${(props) => props.theme["gray-300"]};

    :focus-within {
      border: 1px solid ${(props) => props.theme["yellow-700"]};
      transition: border 0.4s;
    }

    p {
      line-height: 2.625rem;
      padding: 0 0.75rem 0 0;
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-600"]};
      font-style: italic;
    }
  }

  div.neighborhood {
    grid-column: span 1 / auto;
    height: 100%;

    > span {
      color: #ff0000;
    }

    div {
      border: 1px solid ${(props) => props.theme["gray-400"]};
      border-radius: 4px;
      background-color: ${(props) => props.theme["gray-300"]};

      &.required {
        border: 1px solid #ff0000;
      }

      :focus-within {
        border: 1px solid ${(props) => props.theme["yellow-700"]};
        transition: border 0.4s;
      }
    }
  }

  div.city {
    grid-column: span 1 / auto;
    height: 100%;

    > span {
      color: #ff0000;
    }

    div {
      border: 1px solid ${(props) => props.theme["gray-400"]};
      border-radius: 4px;
      background-color: ${(props) => props.theme["gray-300"]};

      &.required {
        border: 1px solid #ff0000;
      }

      :focus-within {
        border: 1px solid ${(props) => props.theme["yellow-700"]};
        transition: border 0.4s;
      }
    }
  }

  div.uf {
    grid-column: span 1 / auto;
    height: 100%;
    width: 10rem;

    > span {
      color: #ff0000;
    }

    div {
      border: 1px solid ${(props) => props.theme["gray-400"]};
      border-radius: 4px;
      background-color: ${(props) => props.theme["gray-300"]};

      &.required {
        border: 1px solid #ff0000;
      }

      :focus-within {
        border: 1px solid ${(props) => props.theme["yellow-700"]};
        transition: border 0.4s;
      }
    }
  }

  input {
    border: none;
    background-color: transparent;
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-700"]};
    line-height: 2.625rem;
    font-family: "roboto";

    padding: 0 0.75rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const PaymentContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  span.missing-method {
    margin-top: 0.5rem;
    color: #ff0000;
    font-family: "Roboto";
    font-weight: normal;
    font-size: 0.875rem;
  }

  & > div:first-of-type {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme["purple-500"]};
    }

    strong {
      font-weight: normal;
      color: ${(props) => props.theme["gray-800"]};
      line-height: 130%;
    }

    span {
      font-size: 0.875rem;
      font-family: "roboto";
      font-weight: normal;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.5rem;

    button {
      display: flex;
      align-items: center;
      padding: 1rem 0.5rem;
      gap: 0.5rem;

      color: ${(props) => props.theme["gray-700"]};
      border: 1px solid ${(props) => props.theme["gray-300"]};
      border-radius: 4px;
      background-color: ${(props) => props.theme["gray-300"]};
      transition: all 0.4s;
      cursor: pointer;

      font-family: "Roboto";
      font-size: 12px;
      font-weight: 400;
      text-transform: uppercase;

      &.selected {
        border: 1px solid ${(props) => props.theme["purple-500"]};
        background-color: ${(props) => props.theme["purple-200"]};
        transition: all 0.4s;
      }

      &:hover:not(.selected) {
        background-color: ${(props) => props.theme["gray-500"]};
        transition: background-color 0.4s;
      }

      svg {
        color: ${(props) => props.theme["purple-500"]};
      }
    }
  }
`;
