import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-between
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: center;
`;

export const Name = styled.h3`
  font-style: bold;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;

  /* identical to box height */
  letter-spacing: 0.25px;

  color: #2b303a;
`;

export const CNPJ = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  /* or 143% */
  letter-spacing: 0.25px;

  color: rgba(57, 61, 63, 0.8);
`;
