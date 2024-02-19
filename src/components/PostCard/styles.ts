import styled from "styled-components";
import { mixins } from "../../styles/mixin";

export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    border: 1px solid transparent;
    border-radius: 10px;
    background: ${props => props.theme["base-post"]};
    max-height: 16.25rem;
    max-width: 26rem;

    &:hover {
        border: 1px solid ${props => props.theme["base-label"]};
        transition: 0.2s;
    }

    a {
        text-decoration: none;
        padding: 2rem;
    }

    span {
        ${mixins.fonts.textM}
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: ${props => props.theme["base-text"]};
        text-overflow: ellipsis;
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