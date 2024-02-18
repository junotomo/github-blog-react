import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    padding: 2rem;
    border: 1px solid transparent;
    border-radius: 10px;
    background: ${props => props.theme["base-post"]};


    &:hover {
        border: 1px solid ${props => props.theme["base-label"]};
        transition: 0.2s;
    }

    span {
        ${mixins.fonts.textM}
        color: ${props => props.theme["base-text"]};
        line-break: anywhere;
    }
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    span:nth-of-type(1){
        ${mixins.fonts.titleM}
        color: ${props => props.theme["base-title"]};
        line-break: anywhere;
    }

    span:nth-of-type(2){
        ${mixins.fonts.textS}
        color: ${props => props.theme["base-span"]};
    }
`