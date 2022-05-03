import styled from "styled-components";

export const WrapperModal = styled.div`
  .Modal {
    position: fixed;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(90, 122, 190, 0.2);
    padding: 30px;
    height: 550px;
    overflow: scroll;
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 9999;
  }
`;

export const StyledModal = styled.div`
  padding: 60px 40px;
  width: 600px;
  text-align: center;
`;

export const FormWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;
