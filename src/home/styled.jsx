import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(217,109,90);
    background: linear-gradient(162deg, rgba(217,109,90,1) 12%, rgba(158,45,45,1) 41%, rgba(172,80,44,1) 66%, rgba(103,78,14,1) 100%);

    display: flex;
    align-items: center;
    justify-content: center;
 
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 21.7%;
    min-height: 60.0rem;

    background-color: #f3f3f3;
    padding: 0.6rem;
    border-radius: 3rem;
    color: black;
`

export const ContainerInput = styled.div`
    background-color: #0f1b36;
    width: 94.3%;
    min-height: 25.0rem;

    border-radius: 3rem 3rem 0 0;
`
export const ContainerButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.2rem;

    background-color: #0f1b36;
    max-width: 94.5%;
    height: 100%;

    border: 0.1rem solid #f3f3f3;
    border-radius: 0 0 3rem 3rem;

    padding: 1.2rem;

    button{
        font-size: 2.5rem;
    }

`
export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
`