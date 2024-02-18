import styled from "styled-components";
import { mixins } from "../../styles/mixin";


export const TitleCardContainer = styled.div`
    max-width: 54rem;
    border: 0;
    display: flex;
    gap: 2rem;
    background: ${props => props.theme["base-profile"]};
    padding: 2rem;
    position: relative;
    border-radius: 10px;
    transform: translateY(-30%);

    img {
        width: 9.25rem;
        height:9.25rem;
        border-radius: 8px;
        border: 0;
   }
`


export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

`
export const ProfileHeader= styled.div`
    display: flex;
    justify-content: space-between;

    span {
        ${mixins.fonts.titleL}
        color: ${props => props.theme["base-title"]};
    }

    a {
        display: flex;
        gap: 0.5rem;
        text-decoration: none;
        border-bottom:1px solid transparent ;
        margin: auto 0;
        &:hover {
            border-bottom:1px solid ${props => props.theme["blue"]};

        }

        span {
            ${mixins.fonts.link}
            color: ${props => props.theme["blue"]};
        }

        img {
            width: 0.75rem;
            height: 0.75rem;
        }
    }
` 
export const ProfileDescription = styled.span`
    ${mixins.fonts.textM}
    color: ${props => props.theme["base-text"]};
    height: 100%;
`
export const CardIcons = styled.div`
    display: flex;
    gap: 1.5rem;

    img {
        width: 1.125rem;
        height: 1.125rem;
    }

    svg:nth-of-type(1) {
        color: ${props => props.theme["base-background"]};
        background: ${props => props.theme["base-label"]};;
    }

    svg {
        margin: auto;
        border-radius: 99px;
        color: ${props => props.theme["base-label"]};
    }
    span {
        display: flex;
        gap: 0.5rem;
    }
`