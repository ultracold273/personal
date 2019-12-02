import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

interface ILabelWidgetProps {
  labels: [string, number][];
}

const Labels = styled.span`
  margin-right: 10px;
`;

const Label = styled.a`
  box-shadow: none;
  font-size: 14px;
  cursor: pointer;
  padding: 2px 2px;

  & + & {
    margin-left: 5px;
  }
`;

const LabelWidget: React.FC<ILabelWidgetProps> = ({ labels }) => {
  console.log(labels);
  return (
    <Labels>
      {labels.map(([k, v]) => (
        <Label href={`/archives?tag=${k}`} key={k}>#{k}</Label>
      ))}
    </Labels>
  );
}

export default LabelWidget;