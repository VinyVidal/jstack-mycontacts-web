import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  span {
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-all;
  }
`;
