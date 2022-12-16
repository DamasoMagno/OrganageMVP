import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(ctx) => ctx.theme.colors.white[900]};
  padding: 0.75rem 0.5rem;
  border-radius: 4px;
  width: 100%;
  height: 2.5rem;
  font-size: 0.93rem;
  border: 0;
  transition: filter 0.25s;

  strong {
    font-size: 1rem;
    color: ${(ctx) => ctx.theme.colors.gray[700]};
  }

  & + button {
    margin-top: 0.5rem;
  }

  &:hover {
    filter: brightness(0.99);
  }
`;
