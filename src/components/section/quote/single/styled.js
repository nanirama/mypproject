import styled from "styled-components";

/* Theme 1 */

export const Bulle = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%;
  font-weight: 400;
  border-radius: 10px;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  font-style: italic;
  color: ${(props) => props.theme.color.body};
  margin: 0 auto 25px auto;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 30px;
    border-width: 15px 0 0 15px;
    border-style: solid;
    border-color: #f2f2f2 transparent;
    display: block;
    width: 0;
  }
`;

export const Picture = styled.div`
  border-radius: 90px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 95px;
  height: 95px;
  border: 1px solid #eee;
  float: left;
`;

export const Persona = styled.div`
  padding: 0 0 0 20px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-weight: 600;
  }

  span {
    color: ${(props) => props.theme.color.body};
    font-size: 1rem;
    /* */
    margin-top: 5px;
  }
`;

/* Theme 2 */

export const Bloc2 = styled.div`
  box-shadow: ${(props) => props.theme.shadow.secondary};
  padding: 25px;
  border-radius: 5px;
  line-height: 1.8;
  font-style: italic;
  color: ${(props) => props.theme.color.body};
`;

export const Persona2 = styled.div`
  margin-bottom: 10px;
  display: flex;
  line-height: 1;
`;

export const Picture2 = styled.div`
  border-radius: 90px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  border: 1px solid #eee;
`;

/* Theme large quote */

export const LargeQuoteBlocInner = styled.div`
  max-width: 900px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.3rem;
  color: ${(props) => props.theme.color.primary};
`;

export const LargeQuoteBloc = styled.div`
  color: ${(props) => props.theme.color.primary};
  /* color: #fff; */
  /* padding: 50px 0; */
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LargeQuotePersonaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.color.primary};
  font-size: 1.1rem;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const LargeQuotePersona = styled.div`
  margin-top: 10px;
`;
export const LargeQuotePersonaPicture = styled.img`
  border-radius: 90px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
`;

export const IconQuote = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;
