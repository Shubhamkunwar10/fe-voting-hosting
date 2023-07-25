import React from 'react';
import styled from 'styled-components';
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
const ResultContainer = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
`;

const ReferencesSection = styled.div`
  margin-top: 16px;
  display:flex;
`;

const ReferencesTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 8px;
`;

const ReferenceLink = styled.a`
  color: #1976d2;
  text-decoration: none;
  margin-right: 16px;
  padding:4px;
  border-radius:10px;
  border:2px solid;

  &:hover {
    text-decoration: underline;
  }
`;

const ResultTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
  background-color: #ddd;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;

const ResultRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 16px;
  margin-bottom: 16px;
  margin-right: 40px;
`;

const ResultLabel = styled.div`
  font-weight: bold;
`;

const ResultValue = styled.div`
  background-color: #d23939;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  margin-left: 20px;
`;
const ResultValue2 = styled.div`
  background-color: #1976d2;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  margin-left: 20px;
`;

const FooterPara = styled.div`
  background: cyan;
  color: black;
  font-weight: 400;
  padding: 16px;
`;

const AdditionalInfo = styled.div`
  padding: 16px 0;
  border-t: 1px solid #ccc;
  border-b: 1px solid #ccc;
`;

const AdditionalTitle = styled.h4`
  color: #333;
  font-size: 24px;
  margin-bottom: 8px;
`;

const AdditionalList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AdditionalListItem = styled.li`
  font-size: 18px;
  line-height: 24px;
  color: #333;
  &::before {
    content: "•";
    color: #1976d2;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;


const ReferenceImage = styled.img`
  max-width: 100%;
  margin-top: 16px;
`;
const zk = () => {
  return (
    <ResultContainer>

      <ResultTitle>Polygon VS ZK-EVM</ResultTitle>
      <ResultLabel>Definition:</ResultLabel>
      <ResultRow>
        <ResultValue>
          Polygon (previously Matic) is a layer 2 scaling solution that aims to improve the scalability and usability
          of Ethereum. It operates as a sidechain to Ethereum and provides faster transactions with lower fees.
        </ResultValue>
        <ResultValue2>
          zkEVM (Zero-Knowledge Ethereum Virtual Machine) is a layer 2 solution that utilizes zk-SNARKs to enable
          efficient and secure off-chain computation. It allows users to execute smart contracts with enhanced privacy
          and scalability.
        </ResultValue2>
      </ResultRow>
      <ResultLabel>Scalability:</ResultLabel>
      <ResultRow>
        <ResultValue>
          Polygon achieves high throughput by utilizing a network of Proof-of-Stake (PoS) validators that process
          transactions in parallel, reducing congestion and enhancing scalability.
        </ResultValue>
        <ResultValue2>
          zkEVM Polygon can aggregate multiple transactions into a single proof, reducing the overall transaction size
          and increasing scalability significantly.
        </ResultValue2>
      </ResultRow>
      <ResultLabel>Speed:</ResultLabel>
      <ResultRow>
        <ResultValue>
          It provides faster transaction processing by using PoS consensus, resulting in lower confirmation times
          compared to Ethereum.
        </ResultValue>
        <ResultValue2>
          The use of zk-SNARKs allows zkEVM to achieve faster execution of smart contracts by offloading computation
          from the main chain.
        </ResultValue2>
      </ResultRow>
      <ResultLabel>Security:</ResultLabel>
      <ResultRow>
        <ResultValue>
          Security is ensured through the use of a network of validators and PoS consensus, making it resilient
          against common attacks.
        </ResultValue>
        <ResultValue2>
          It enhances security by leveraging zero-knowledge proofs, which enable private transactions and smart contract
          execution while preserving the integrity of the blockchain.
        </ResultValue2>
      </ResultRow>
      <ResultLabel>Privacy:</ResultLabel>
      <ResultRow>
        <ResultValue>
          Transactions and smart contract execution are visible on the public ledger, meaning privacy is limited.
        </ResultValue>
        <ResultValue2>
          zkEVM offers enhanced privacy as zero-knowledge proofs allow users to prove the correctness of computations
          without revealing the underlying data.
        </ResultValue2>
      </ResultRow>
      <ResultLabel>Cost:</ResultLabel>
      <ResultRow>
        <ResultValue>
          Transaction fees on Polygon are significantly lower than on the Ethereum mainnet due to its scalability and PoS
          consensus mechanism.
        </ResultValue>
        <ResultValue2>
          While transaction fees are relatively low, zkEVM requires additional costs for generating zk-SNARKs, which may
          be a consideration depending on the application's use case.
        </ResultValue2>
      </ResultRow>
      <ResultLabel>In brief:</ResultLabel>
      <AdditionalInfo>
        <AdditionalList>
          <AdditionalListItem>
            Rollups are a scaling solution that can lower transaction costs and increase throughput on a blockchain
            protocol.
          </AdditionalListItem>
          <AdditionalListItem>
            Rollups are a popular Layer-2 scaling solution for Ethereum.
          </AdditionalListItem>
          <AdditionalListItem>
            A zkEVM is a new type of zk-Rollup that is EVM compatible.
          </AdditionalListItem>
          <AdditionalListItem>
            The first two zkEVM options were released in March 2023. More zkEVM alternatives are in development (at the
            time of writing).
          </AdditionalListItem>
        </AdditionalList>
      </AdditionalInfo>
      <ReferencesSection>
        <ReferencesTitle>References:</ReferencesTitle>
        <ReferenceLink href="https://polygon.technology/polygon-zkevm" target="_blank" rel="noopener noreferrer">
          Polygon Official Website
        </ReferenceLink>
        <ReferenceLink href="https://blog.chain.link/zkevm/" target="_blank" rel="noopener noreferrer">
          Chainlink Blog - ZKEVM
        </ReferenceLink>
        <ReferenceLink href="https://decrypt.co/resources/what-is-zkevm" target="_blank" rel="noopener noreferrer">
          Decrypt - What Is ZKEVM?
        </ReferenceLink>
        
      </ReferencesSection>
      <FooterPara>
      <ReferenceImage src={img2} alt="Reference Image 1" />
        <ReferenceImage src={img1} alt="Reference Image 2" />
        <p>
          Moving to zkEVM Polygon for online voting at IIT could provide improved privacy and security. The use of
          zero-knowledge proofs ensures that the voting process remains confidential and tamper-resistant.
        </p>
        <p>
          zkEVM's scalability would allow the IIT community to cast votes with reduced transaction times and fees,
          making the voting process more efficient and accessible to all stakeholders.
        </p>
        <p>
          Enhanced privacy would encourage greater participation in the voting process, as voters can be confident that
          their identities and choices are protected.
        </p>
        <p>
          In conclusion, both Polygon and zkEVM Polygon offer valuable solutions for online voting on the blockchain.
          However, zkEVM Polygon's focus on privacy and scalability, achieved through zero-knowledge proofs, makes it a
          compelling choice for sensitive applications like online voting at IIT.
        </p>
      </FooterPara>
    </ResultContainer>
  );
};

export default zk;
