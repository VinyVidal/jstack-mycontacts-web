import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      width: 24px;
      height: auto;
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;
