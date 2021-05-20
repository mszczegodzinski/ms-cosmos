import React from 'react';
import styled from 'styled-components';
import CircleLeftImage from '../../assets/images/CircleLeft.svg';
import CircleRightImage from '../../assets/images/CircleRight.svg';
import CircleBottomImage from '../../assets/images/CircleBottom.svg';

const CircleTemplate = styled.div`
	position: absolute;
	transition: 1s;
`;

const CircleLeft = styled(CircleTemplate)`
	width: 197px;
	height: 347px;
	top: 14.06vh;
	left: calc(100vw - 197px);
`;

const CircleRight = styled(CircleTemplate)`
	width: 170px;
	height: 347px;
	top: 41.93vh;
	right: calc(100vw - 170px);
`;

const CircleBottom = styled(CircleTemplate)`
	width: 347px;
	height: 141px;
	bottom: calc(100vh - 141px);
	left: 33.6vw;
`;

type orientationType = 'left' | 'right' | 'bottom';

interface CircleProps {
	visiblePart: orientationType;
}

const Circle = ({ visiblePart }: CircleProps) => {
	return (
		<>
			<CircleLeft style={{ display: visiblePart === 'left' ? 'block' : 'none' }}>
				<img src={CircleLeftImage} alt={`circle shape ${visiblePart}`} />
			</CircleLeft>
			<CircleRight style={{ display: visiblePart === 'right' ? 'block' : 'none' }}>
				<img src={CircleRightImage} alt={`circle shape ${visiblePart}`} />
			</CircleRight>
			<CircleBottom style={{ display: visiblePart === 'bottom' ? 'block' : 'none' }}>
				<img src={CircleBottomImage} alt={`circle shape ${visiblePart}`} />
			</CircleBottom>
		</>
	);
};

export default Circle;
