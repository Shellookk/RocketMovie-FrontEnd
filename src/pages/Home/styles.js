import styled from "styled-components";

export const Container = styled.div`
    
`
export const Content = styled.div`
    margin: 0 106px 58px 123px;
    display: flex;
    justify-content: space-between;

`;

export const Add = styled.button`
    height: 48px;
    width: 207px;
    border-radius: 8px;
    color:  ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
    background-color:  ${({ theme }) => theme.COLORS.COLOR_TITLE};
    border: none;
    margin-top: 47px ;

    display: flex;
    justify-content: center;
    gap: 2.5px;
    align-items: center;

    font-size: 16px;
    font-weight: 400;
    line-height: 21px;

`;