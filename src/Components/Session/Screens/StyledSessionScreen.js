import styled from "styled-components";
import SessionScreen from "./ScreensFormat/SessionScreen";

const SessionStyle = styled(SessionScreen)`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor};

    & > section.session-sec1 {
        flex: 0.7;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;

        & > div {
            transform: translateY(100%);
        }
    }

    & > section.session-sec2 {
        flex: 0.3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        
        background-color: ${props => props.theme.accentColor};

        & > form {
            align-items: center;
            display: flex;
            flex-direction: column;
            transform: translateY(50%);
        }

        & > div {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
        }
    }
`;

export default SessionStyle;