import styled from 'styled-components';

export const Container = styled.header`
    grid-area: 'header';
    
    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.COLOR_BORDER};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 123px;

`

export const Logo = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    >h1{
        font-size: 24px;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.COLOR_TITLE}
    };
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  >input{
    width: 630px;
    height: 56px;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.COLORS.COLOR_PLACEHOLDER};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_SEARH};
    padding: 19px 471px 19px 24px;
    margin: 30px 64px;
    };

    >input:focus{
        outline: none;    
    };

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border-width: 1px;
        border-style: solid;
        border-color: ${({ theme }) => theme.COLORS.COLOR_BORDER};

    };

    >div{
        display: flex;
        flex-direction: column;
        font-size: 14px;

        margin-right:10px;
        align-items: flex-end;

    };
`;

export const  Logout = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.COLOR_PLACEHOLDER};
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-size: 14px;

`;