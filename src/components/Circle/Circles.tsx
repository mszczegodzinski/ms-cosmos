import React from 'react';
import styled from 'styled-components';
import CircleComplete from './CircleComplete';

const CircleTemplate = styled.div`
	position: absolute;
	transition: 0.5s;
	transition-delay: 0.3s;
`;
// left part of circle is visible:
const CircleLeft = styled(CircleTemplate)`
	width: 347px;
	height: 347px;
	top: 14.06vh;
	left: calc(100vw - 197px);
`;
// right part of circle is visible:
const CircleRight = styled(CircleTemplate)`
	width: 347px;
	height: 347px;
	top: 41.93vh;
	right: calc(100vw - 170px);
`;
// bottom part of circle is visible:
const CircleBottom = styled(CircleTemplate)`
	width: 347px;
	height: 347px;
	bottom: calc(100vh - 141px);
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
