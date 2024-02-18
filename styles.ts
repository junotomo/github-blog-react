import styled from "styled-components";
import { mixins } from "./src/styles/mixin";


export const SearchFormContainer = styled.form `
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    input {
        ${mixins.fonts.textM}
        border: 1px solid ${props => props.theme["base-border"]};
        border-radius: 6px;
        background: ${props => props.theme["base-input"]};
        padding: 0.75rem 1rem;
        color: ${props => props.theme["base-text"]};
        transition:  0.2s;
        &::placeholder {   
            color: ${props => props.theme["base-label"]};
        }

        &:focus {
            border: 1px solid ${props => props.theme["blue"]};
        }
    }
`
export const SearchFormHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span:nth-of-type(1){
        ${mixins.fonts.titleS}
        color: ${props => props.theme["base-subtitle"]};
    }

    span:nth-of-type(2){
        ${mixins.fonts.textS}
        color: ${props => props.theme["base-span"]};
    }
`