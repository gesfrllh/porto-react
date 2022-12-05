import { createGlobalStyle } from "styled-components"

export const AllStyle = createGlobalStyle`
    body {
        background: ${({theme}) => theme.bodyColor};
        color: ${({theme}) => theme.textColor};
    }
`