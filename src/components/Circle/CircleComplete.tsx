import React from 'react';
import styled from 'styled-components';
import CircleLeftImage from '../../assets/images/CircleLeft.svg';
import CircleRightImage from '../../assets/images/CircleRight.svg';

const CircleImageTemplate = styled.div`
	position: absolute;
	transition: 1s;
	height: 346.42px;
	width: 346.42px;
`;

const CircleLeftPart = styled(CircleImageTemplate)`
	width: 197px;
	left: 0px;
`;

const CircleRightPart = styled(CircleImageTemplate)`
	width: 170px;
	left: 175px;
`;

const CircleComplete = () => {
	return (
		<div>
			<CircleLeftPart>
				<img src={CircleLeftImage} alt={`circle shape`} />
			</CircleLeftPart>
			<CircleRightPart>
				<img src={CircleRightImage} alt={`circle shape`} />
			</CircleRightPart>
		</div>
	);
};

export default CircleComplete;
