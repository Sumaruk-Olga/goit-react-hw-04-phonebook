import styled from "@emotion/styled";

export const Label = styled.label`
display: block;
margin-bottom: 15px;
margin-left: auto;
margin-right: auto;
`;

export const Input = styled.input`
margin-left: 5px;
width: 45%;
border: 1px solid ${p=>p.theme.colors.accent};
border-radius:${p => p.theme.radii.normal};
cursor: pointer;
`;