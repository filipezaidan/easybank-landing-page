import styled from "styled-components";
import bgMockups from '../../assets/images/bg-intro-desktop.svg'

export const Container = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    height: 100%;
    padding: 0  0 0 12% ;
    background-color:#fafafa;
`;
export const InfoSection = styled.div`
    display:flex;
    justify-content:center;
    gap: 3em;
    width: 45%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
`
export const ImagesSection = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    width: 55%;
    height: 100%;
    background-image: url(${bgMockups});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: -70px -180px;
`
export const Image = styled.img`
    width: 90%;
    height: 100%;
    object-fit: cover;
`
export const Title = styled.h1`
    font-weight: 400;
    font-size: 5em;
    color: var(--darkblue-color);
`
export const Description = styled.p`
    color: hsl(233, 8%, 62%);
    font-weight: 400;
    font-size: 1.4em;
    width: 75%;
    text-align: start;
`
