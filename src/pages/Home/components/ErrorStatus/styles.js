import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .details {
    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }

    margin-left: 16px;
  }
`;
