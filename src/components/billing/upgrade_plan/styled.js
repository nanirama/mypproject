import styled from "styled-components";

export const CurrencyWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.end ? "flex-end" : "")};
`;
export const Currency = styled.div`
  margin-right: 10px;
  font-size: 0.9rem;
  /* font-weight: bold; */
  color: ${(props) => (props.active ? props.theme.color.secondary : "")};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const PlansWrapper = styled.div`
  background: #fff;
  border: 1px solid rgb(224, 224, 224);
  width: 100%;
  border-radius: 3px;

  padding: 20px 0;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  /* grid-gap: 20px 10px; */
`;

export const PlansDetail = styled.div`
  /* border: 1px solid red; */
  padding: 0 20px;
  border-right: ${(props) => (props.last ? "" : "1px solid rgb(224, 224, 224)")};
`;

export const PlanTitle = styled.div`
  display: flex;
  align-items: center;
`;
export const PlanIcon = styled.img`
  margin-right: 10px;
  height: 24px;
  width: 24px;
`;

export const PlanDescription = styled.div`
  color: ${(props) => props.theme.color.body};
  height: 70px;
`;

export const PlanStartingAt = styled.div`
  font-size: 0.85rem;
  color: ${(props) => props.theme.color.body};
`;
export const PlanPrice = styled.div``;
