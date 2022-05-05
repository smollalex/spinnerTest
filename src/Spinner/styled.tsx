import styled from "styled-components";
import { Status } from "../utils";

export const Wrapper = styled.div<{ status: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #ffffff75;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content:center;
  box-sizing: border-box;

  ${({ status }) => { 
    switch (status) {
      case Status.ERROR: 
        return `color: red`
      case Status.SUCCESS:
        return `color: green`
      default:
        return `color: black`
    }
  }}
`;
