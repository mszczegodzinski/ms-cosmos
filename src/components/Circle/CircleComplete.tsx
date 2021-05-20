import React from 'react';
import styled from 'styled-components';
import CircleLeftImage from '../../assets/images/CircleLeft.svg';
import CircleRightImage from '../../assets/images/CircleRight.svg';

const CircleTemplate = styled.div`
	position: absolute;
	transition: 1s;
	height: 346.42px;
	width: 346.42px;
`;

const CircleLeftPart = styled(CircleTemplate)`
	width: 197px;
	left: 0px;
`;

const CircleRightPart = styled(CircleTemplate)`
	width: 170px;
	left: 175px;
`;

const CircleComplete = () => {
	return (
		<>
			<CircleLeftPart>
				<img src={CircleLeftImage} alt={`circle shape`} />
			</CircleLeftPart>
			<CircleRightPart>
				<img src={CircleRightImage} alt={`circle shape`} />
			</CircleRightPart>
		</>
	);
};

export default CircleComplete;
