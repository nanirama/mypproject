import styled from "styled-components";

export const Speakers = styled.div`
  width: 100%;
  @media screen and (min-width: 1024px) {
    gap: 40px;
  }
  @media screen and (max-width: 1024px) {
    gap: 30px;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const SpeakerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #637491;

  h6 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }
  h5 {
    font-size: 16px;
    line-height: 20px;
    margin: 10px 0 0 0;
    font-weight: 800;
  }
  img {
    margin-bottom: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
`;
