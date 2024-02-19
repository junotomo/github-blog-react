import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const IssuePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 54rem;
    margin: 0 auto;
`
export const IssueHeader = styled.div`
    max-width: 54rem;
    border: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: ${props => props.theme["base-profile"]};
    padding: 2rem;
    position: relative;
    border-radius: 10px;
    transform: translateY(-30%);

    h1 {
        ${mixins.fonts.titleL}
        color: ${props => props.theme["base-title"]};
    }
`
export const HeaderIcons = styled.div`
    display: flex;
    gap: 1.5rem;

    img {
        width: 1.125rem;
        height: 1.125rem;
    }
    
    span > svg {
        margin: auto;
        border-radius: 99px;
        color: ${props => props.theme["base-label"]};
        background: ${props => props.theme["base-background"]};

        &[data-invert=true] {
            color: ${props => props.theme["base-background"]}; 
            background: ${props => props.theme["base-label"]};;
        }
    }





    span {
        display: flex;
        gap: 0.5rem;
    }
`
export const PageLinks= styled.div`
    display: flex;
    justify-content: space-between;

    svg {
        color: ${props => props.theme["blue"]};
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
export const MarkDownContainer = styled.div`
    padding: 2.5rem 2rem;
    padding-top: 0;
    overflow: auto;
`