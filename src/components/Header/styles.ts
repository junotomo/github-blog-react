import styled from "styled-components";


export const HeaderContainer = styled.div`
    background: ${props => props.theme["base-profile"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 18.5rem;
    overflow: hidden;
`
interface BlurredSpotProps {
    place: 'right' | 'left'
}

export const BlurredSpot = styled.div<BlurredSpotProps>`
    position: absolute;
    left: ${props => props.place === 'right' ? '95%' : '0'};
    width: 6rem;
    height: 4rem;
    background: ${props => props.theme["blue"]};
    filter: blur(100px);
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;
    height: 100%;
    img{
        margin-top: 4rem;
    }

    div {
        background: #14589C;
        height: 52px;
        width: 46rem;
        filter: blur(107px);

    }
`