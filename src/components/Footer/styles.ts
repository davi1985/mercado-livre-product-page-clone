import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 62px;
  background: var(--color-footer);
  border-top: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 30px;

  > a {
    font-weight: 600;
    text-decoration: none;
    color: var(--color-blue);
  }
`;
