import styled from "@emotion/styled";

export const ContactsList = styled.ul`
width: 90%;
margin-left: auto;
margin-right: auto;
@media screen and (min-width: 768px) {
      width: 65%;
    }
    @media screen and (min-width: 1200px) {
      width: 90%;
  }
`;

export const ContactItem = styled.li`
display: flex;
justify-content: space-between;
padding: 0 10px;
margin-bottom:10px;
`;

export const DeleteButton = styled.button`
border: 1px solid ${p => p.theme.colors.accent};
border-radius: ${p => p.theme.radii.normal};
cursor: pointer;
@media screen and (min-width: 768px) {
      margin-right: 50px;
    }

`;
