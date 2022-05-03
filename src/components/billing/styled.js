import styled from "styled-components";
import { Typo5 } from "../typographie/index";

export const BackArrow = styled.span`
  font-size: 14px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  height: 50px;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.color.error};
  margin-top: 5px;
  font-size: 0.8rem;
`;

export const PlanConfirmTitle = styled.div`
  color: rgb(104, 104, 104);
  font-size: 1rem;
  font-weight: bold;
  /* margin-bottom: 10px;
  margin-top: 20px; */
`;

export const PlanConfirmTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PlanConfirmLine = styled.div`
  font-size: 0.9rem;
  color: rgb(38, 47, 61);
  margin-bottom: 5px;
`;

export const PlanConfirmEditButton = styled.div`
  font-size: 0.8rem;
  text-decoration: underline;
  /* margin-left: auto; */
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const PlansWrapper = styled.div`
  background: #fff;
  border: 1px solid rgb(224, 224, 224);
  width: 100%;
  border-radius: 3px;

  padding: 20px;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px 10px;
`;

export const PlansDetail = styled.div`
  border-right: ${(props) => (props.last ? "" : "1px solid rgb(224, 224, 224)")};
`;

export const CreditCardTotalSummary = styled.div`
  width: 220px;
  float: right;
`;
export const CreditCardTotalSummaryLine = styled.div`
  span:nth-child(2) {
    float: right;
  }
  margin-bottom: 10px;
`;
