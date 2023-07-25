import React, { useState } from 'react';
import {
  ResultContainer,
  ResultTitle,
  ResultTable,
  TableHeading,
  TableRow,
  TableCell,
  CandidateVote,
} from './Result.css'; // Import the CSS styles
import resultData from './result.json'; // Import the result data from result.json

/**
 * Result component displays the election results for different designations and candidates.
 */
const Result = () => {
  const [designationIndex, setDesignationIndex] = useState(0);

  /**
   * Handle click on the left button to navigate to the previous designation result.
   */
  const handleLeftButtonClick = () => {
    setDesignationIndex((prevIndex) => (prevIndex === 0 ? resultData.length - 1 : prevIndex - 1));
  };

  /**
   * Handle click on the right button to navigate to the next designation result.
   */
  const handleRightButtonClick = () => {
    setDesignationIndex((prevIndex) => (prevIndex === resultData.length - 1 ? 0 : prevIndex + 1));
  };

  // Get the current result data based on the designationIndex
  const currentResult = resultData[designationIndex];

  return (
    <ResultContainer>
      <ResultTitle>
        <button onClick={handleLeftButtonClick}>{'<'}</button>
        {currentResult.designation}
        <button onClick={handleRightButtonClick}>{'>'}</button>
      </ResultTitle>
      <ResultTable>
        <thead>
          <tr>
            <TableHeading>Candidate ID</TableHeading>
            <TableHeading>Candidate Name</TableHeading>
            <TableHeading>Votes</TableHeading>
          </tr>
        </thead>
        <tbody>
          {currentResult.candidates.map((candidate) => (
            <TableRow key={candidate.id}>
              <TableCell>{candidate.id}</TableCell>
              <TableCell>{candidate.name}</TableCell>
              <TableCell>
                <CandidateVote>{candidate.votes}</CandidateVote>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </ResultTable>
    </ResultContainer>
  );
};

export default Result;
