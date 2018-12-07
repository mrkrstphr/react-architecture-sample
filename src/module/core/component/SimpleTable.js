import styled from 'styled-components';
import styledMap from 'styled-map';

const alignMap = styledMap`
  center: center;
  left: left;
  right: right;
  default: left;
`;

export const Table = styled.table`
  min-width: 400px;
`;

export const Cell = styled.td`
  text-align: ${alignMap};
`;
