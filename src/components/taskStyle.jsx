import styled, {css} from "styled-components";

export const TaskH3 = styled.h3`
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
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  max-width: 400px;
  width: 100%;
  background-color: rgb(199, 207, 228);

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
