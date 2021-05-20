import React from 'react';
import styled from 'styled-components';
import { TypographyH300 } from '../Typography/Typography';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import Circle from '../Circle/Circle';
import CircleComplete from '../Circle/CircleComplete';

const DashboardWrapper = styled.div`
	position: relative;
`;

const DashboardGridWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: #221b3a;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DashboardGrid = styled.div`
	width: 100%;
	max-width: 1140px;
	height: 640px;
	flex-grow: 1;
	z-index: 2;
	@media (max-width: 1200px) {
		padding: 0 25px;
	}
`;

const Dashboard = () => {
	return (
		<DashboardWrapper>
			<Circle visiblePart='left' />
			<Circle visiblePart='right' />
			<Circle visiblePart='bottom' />
			<DashboardGridWrapper className='dashboardGridWrapper'>
				<DashboardGrid className='dashboardGrid'>
					<Logo />
					<TypographyH300>
						<div style={{ border: '1px solid black' }}>aaa</div>
					</TypographyH300>
					<div style={{ border: '1px solid black' }}>aaa</div>
					<div style={{ border: '1px solid black' }}>bbb</div>
					<Button>Launch Rocket!</Button>
				</DashboardGrid>
				<Footer />
			</DashboardGridWrapper>
		</DashboardWrapper>
	);
};

export default Dashboard;
