import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

export const Sidebar = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
`;

export const MainContent = styled.div`
  width: 100%;
`;

export const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: ${(props) => (props.active ? '#1976d2' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    background-color: ${(props) => (!props.active ? '#e0e0e0' : 'inherit')};
  }
`;

export const General = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

export const Tutorial = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

export const Result = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

export const Voting = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  margin-bottom: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;
