import styled from "styled-components";

export const HeaderStyled =styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    background-color: ${({color})=>color};

    & > div:last-child {
    display: flex;
    align-items: center;
    }

  & > div:last-child svg:first-child {
    margin-right: 10px;
    }

  & > div:last-child > *:last-child {
    margin-left: auto;
    }

`