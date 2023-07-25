import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 8px;
  margin: 0 8px;
 
  text-align: center;
`;

export const Designation = styled.h3`
  margin-top: 10px;
`;

export const Image = styled.img`
  width:200px;
  height: 200px;
  border-radius: 100%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 18px;
`;
export const Age = styled.p`
  font-size: 14px;
`;

export const VoteButton = styled.button`
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;