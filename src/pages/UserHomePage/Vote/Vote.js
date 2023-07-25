import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import {
  Container,
  CardContainer,
  Card,
  Designation,
  Image,
  Name,
  Age,
  VoteButton
} from './voteCss';

// Import the Candidates.json data
// deletelater Later have to update to get data from api

import candidatesData from './candidates.json';

/**
 * Vote component for handling candidate voting.
 * @returns {JSX.Element} JSX element representing the Vote component.
 */
const Vote = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [designation, setDesignation] = useState('treasurer');

  // Get the list of candidates based on the selected designation
  const candidateList = candidatesData[designation];

  /**
   * Handle the vote for the given candidate name.
   * @param {string} name - Candidate's name to vote for.
   */
  const handleVote = (name) => {
    // Logic to handle the vote for the given name
    alert(`Voted for ${name}`);
  };

  /**
   * Handle scrolling to the left in the candidate list.
   */
  const handleScrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Object.keys(candidateList).length - 1 : prevIndex - 1));
  };

  /**
   * Handle scrolling to the right in the candidate list.
   */
  const handleScrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Object.keys(candidateList).length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container>
      <button onClick={handleScrollLeft}>&lt;</button>
      <CardContainer>
        <Card>
          <Designation>{designation}</Designation>
          <Image src={candidateList[`user${currentIndex + 1}`].image} alt={candidateList[`user${currentIndex + 1}`].name} />
          <Name>{candidateList[`user${currentIndex + 1}`].name}</Name>
          <Age>{candidateList[`user${currentIndex + 1}`].age}</Age>
          <VoteButton onClick={() => handleVote(candidateList[`user${currentIndex + 1}`].name)}>Vote</VoteButton>
        </Card>
      </CardContainer>
      <button onClick={handleScrollRight}>&gt;</button>
    </Container>
  );
};

Vote.propTypes = {
};

export default Vote;
