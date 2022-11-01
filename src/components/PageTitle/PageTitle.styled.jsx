import styled from "@emotion/styled";

export const PageTitle = styled.h1`
 display: block;
    text-align: center;
    font-style: italic;
    margin-bottom:${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.secondary};
`;