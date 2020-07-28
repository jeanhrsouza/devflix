import styled from "styled-components";

const Button = styled.button`

    color: #f8f8f2;
    border: 1px solid #f8f8f2;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
    color: #ff79c6;
    border: 1px solid #ff79c6;
}
`;

export default Button;