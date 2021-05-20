import React from 'react';
import styled from 'styled-components';
import CircleComplete from './CircleComplete';

const CircleTemplate = styled.div`
	position: absolute;
	transition: 0.5s;
	transition-delay: 0.3s;
	width: 347px;
	height: 347px;
`;
// left part of circle is visible:
const CircleLeft = styled(CircleTemplate)`
	top: 14.06vh;
	right: -10vw;
	// left: calc(100vw - 197px);
`;
// right part of circle is visible:
const CircleRight = styled(CircleTemplate)`
	top: 41.93vh;
	// right: calc(100vw - 170px);
	left: -12.29vw;
`;
// bottom part of circle is visible:
const CircleBottom = styled(CircleTemplate)`
	// bottom: calc(100vh - 141px);
	top: -26.82vh;
	left: 33.6vw;
`;

const Circles = () => {
	return (
		<>
			<CircleBottom>
				<CircleComplete />
			</CircleBottom>
			<CircleLeft>
				<CircleComplete />
			</CircleLeft>
			<CircleRight>
				<CircleComplete />
			</CircleRight>
		</>
	);
};

export default Circles;
