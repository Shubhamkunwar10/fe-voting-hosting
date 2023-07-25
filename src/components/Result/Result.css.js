import styled from 'styled-components';

export const ResultContainer = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ResultTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
  background-color: #ddd;
  padding: 8px;
  border-radius: 8px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const ResultTable = styled.table`
  width: 100%;
`;

export const TableHeading = styled.th`
  padding: 12px;
  background-color: #f9f9f9;
  text-align: center;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: 12px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CandidateVote = styled.p`
  background-color: #1976d2;
  color: #fff;
  padding: 15px;
  border-radius: 4px;
  display: inline-block;
`;
