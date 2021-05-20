import React from 'react';
import styled from 'styled-components';
import RocketImage from '../../assets/images/Rocket.png';
import LandingGear from '../../assets/images/landing gear.png';
import SmokeLeft from '../../assets/images/Smoke 2.png';
import SmokeRight from '../../assets/images/Smoke 1.png';

const StyledRocket = styled.div`
	position: absolute;
	bottom: 304px;
	right: 223px;
`;

const StyledLandingGear = styled.div`
	position: absolute;
	bottom: 299px;
	right: 240px;
`;

const StyledSmokeLeft = styled.div`
	position: absolute;
	bottom: 299px;
	right: 308px;
`;

const StyledSmokeRight = styled.div`
	position: absolute;
	bottom: 299px;
	right: 188px;
`;

const Rocket = () => {
	return (
		<>
			<StyledSmokeLeft>
				<img src={SmokeLeft} alt='smoke left' />
			</StyledSmokeLeft>
			<StyledSmokeRight>
				<img src={SmokeRight} alt='smoke right' />
			</StyledSmokeRight>
			<StyledLandingGear>
				<img src={LandingGear} alt='landing gear' />
			</StyledLandingGear>
			<StyledRocket>
				<img src={RocketImage} alt='rocket' />
			</StyledRocket>
		</>
	);
};

export default Rocket;
