import React from 'react';
import styled from 'styled-components';
import { font_sizes, border_radius } from "./Styles/GeneralStyle.json";

const FormattedTitle = ({ className, text, reactStyle }) => <h1 className={className} style={{ ...reactStyle }}>
    {text.toUpperCase()}
</h1>

export const Title = styled(FormattedTitle)`
    color: ${props => props.theme.textColor};
    font-size: ${font_sizes.largue};
`;

const FormatedSubtitle = ({ className, text, reactStyle }) =>
(
    <h2
        className={className}
        style={{ ...reactStyle }}
    >
        {text.toUpperCase()}
    </h2>
)

export const Subtitle = styled(FormatedSubtitle)`
    color: ${props => props.theme.textColor};
    font-size: ${font_sizes.medium};
`;

const FormattedDivider = ({ className, text, reactStyle, width }) => <hr className={className} style={{ ...reactStyle, width: width ?? "80%" }} />

export const Divider = styled(FormattedDivider)`
    height: 2px;
    background-color: ${props => props.theme.textColor};
    opacity: 0.7;

    margin: 20px;
`

const FormattedLowPriorityText = ({ className, text, reactStyle, upperCase = false }) => (
    <span
        className={className}
        style={{ ...reactStyle }}
    >
        {upperCase ? text.toUpperCase() : text}
    </span>
)

export const LowPriorityText = styled(FormattedLowPriorityText)`
    color: ${props => props.theme.textColor};
    font-size: ${font_sizes.regular};
    transition: 0.5s;
`

const FormattedInput = ({ className, onChangeText, password = false }) => <input type={password ? "password" : "text"} className={className} onChange={(input) => onChangeText(input.target.value)} />

export const Input = styled(FormattedInput)`
    color: ${props => props.theme.textColor};
    font-size: ${font_sizes.regular};
    border: solid 2px ${props => props.theme.textColor};
    border-radius: ${border_radius};
    padding: 0.5rem;
`

const FormattedField = ({ className, onChangeText, reactStyle, labelText, label = false, password = false, upperCase = false }) => (
    <div
        className={className}
        style={{ ...reactStyle }}
    >
        <LowPriorityText reactStyle={{ marginBottom: 5 }} upperCase={upperCase} text={labelText} />
        <Input onChangeText={onChangeText} password={password} />
    </div>
)

export const Field = styled(FormattedField)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    padding: 3px;
`

const FormattedButton = ({
    className,
    text,
    children,
    reactStyle,
    onClick,
    width,
    type = "",
    form = "",
    disabled = false
}) => (
    <button
        className={className}
        style={{ ...reactStyle, width: width ?? "30%" }}
        onClick={onClick}
        type={type}
        form={form}
        disabled={disabled}
    >
        {text ? <LowPriorityText text={text.toUpperCase()} /> : children}
    </button>
)

export const Button = styled(FormattedButton)`
    border: solid 2px ${props => props.theme.textColor};
    border-radius: ${border_radius};
    padding: 10px; 
    transition: 0.3s;
    min-width: fit-content;
    margin: 5px;

    &:hover {
        background-color: ${props => props.theme.textColor};
    }

    &:hover > span {
        color: ${props => props.theme.accentColor};
        font-weight: bolder;
    }
`