import styled from 'styled-components';

export const Container = styled.header`
    grid-area: 'header';
    
    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.COLOR_BORDER};

    display: flex;
    justify-content: flex-end;

    padding: 0 123px;

`

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
    
    > div{
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        align-items: flex-end;

        h1{
            font-size: 14px;
            font-weight: bold;
        };

        a{
            font-size: 14px;
            font-weight: normal;
            color: ${({ theme }) => theme.COLORS.COLOR_PLACEHOLDER};
        };


    };


`;