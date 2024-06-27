import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.COLOR_TITLE};

  border: none;
  font-size: 16px;
  align-items: center;
  justify-content: center;

  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 24px;
`;