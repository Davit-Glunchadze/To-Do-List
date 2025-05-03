import styled, { css } from "styled-components";

export const InProgressTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  white-space: nowrap;
  text-align: center;
  color: #181515;
  text-shadow: 0 0 5px #000;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: solid 2px #eeecec;
  padding-bottom: 10px;
`;

export const InProgressTasks = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  white-space: nowrap;
  text-align: left;
  color: #080808;
  text-shadow: 0 0 5px #000;
  border: #fff solid 2px;
  padding: 15px 20px;
  border-radius: 5px;
  margin-top: 10px;
  max-width: 400px;
  width: 100%;
  background-color: rgb(230, 212, 208);

  ${(props) =>
    css`
      border: ${props.$border || "2px solid #fff"};
      border-left: ${props.$borderLeft || "5px solid #ccc"};
    `}
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
