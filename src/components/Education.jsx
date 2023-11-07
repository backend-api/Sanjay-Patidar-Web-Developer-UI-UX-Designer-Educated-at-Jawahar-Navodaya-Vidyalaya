import { motion } from 'framer-motion';
import styled from 'styled-components';

const EducationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #192f3e, #0b132b);
  padding: 3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;



const EducationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 80%;
  max-width: 800px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EducationText = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
    text-align: left;
  }
`;

const EducationImage = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-bottom: 0;
  }

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Education = () => {
  return (
    <EducationContainer>
      <Heading>Unlocking Knowledge Horizons</Heading>      <EducationSection>
        <EducationText>
          <h2>Secondary Education</h2>
          <p>School: Jawahar Navodaya Vidhyalaya School</p>
          <p>Year: XXXX-XXXX</p>
          <p>Details about your secondary education...</p>
        </EducationText>
        <EducationImage>
          <img
            src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/pngwing.com.png"
            alt="Secondary Education"
          />
        </EducationImage>
      </EducationSection>

      <EducationSection>
        <EducationText>
          <h2>Bachelor of Technology in Computer Science Engineering</h2>
          <p>University: Chandigarh University</p>
          <p>Year: XXXX-XXXX</p>
          <p>Details about your bachelor's degree...</p>
        </EducationText>
        <EducationImage>
          <img
            src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/campus.jpeg"
            alt="Bachelor's Degree"
          />
        </EducationImage>
      </EducationSection>
    </EducationContainer>
  );
};

export default Education;
