import React from 'react';
import styled from 'styled-components';
import RocketImage from '../../assets/images/Rocket.png';
import LandingGear from '../../assets/images/landing gear.png';
import SmokeLeft from '../../assets/images/Smoke 2.png';
import SmokeRight from '../../assets/images/Smoke 1.png';

const StyledRocket = styled.div`
	position: absolute;
	bottom: 304px;
	right: 208px;
`;

const StyledLandingGear = styled.div`
	position: absolute;
	bottom: 299px;
	right: 225px;
`;

const StyledSmokeLeft = styled.div`
	position: absolute;
	bottom: 299px;
	right: 293px;
	opacity: 0;
`;

const StyledSmokeRight = styled.div`
	position: absolute;
	bottom: 299px;
	right: 173px;
	opacity: 0;
`;

const StyledCompleteRocket = styled.div`
	position: absolute;
	width: 100%;
	right: -45px;
	@media screen and (min-width: 992px) {
		right: 0;
	}
`;

const Rocket = () => {
	return (
		<StyledCompleteRocket>
			<StyledSmokeLeft className='smokeLeft'>
				<img src={SmokeLeft} alt='smoke left' />
			</StyledSmokeLeft>
			<StyledSmokeRight className='smokeRight'>
				<img src={SmokeRight} alt='smoke right' />
			</StyledSmokeRight>
			<StyledLandingGear className='landingGear'>
				<img src={LandingGear} alt='landing gear' />
			</StyledLandingGear>
			<StyledRocket className='rocket'>
				<img src={RocketImage} alt='rocket' />
			</StyledRocket>
		</StyledCompleteRocket>
	);
};

export default Rocket;
