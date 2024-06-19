import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.COLOR_TITLE};
    color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 10px;
    padding: 16.8px 145px 15.68px 146px;
    border: 0;
    height: 56px;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }
`;