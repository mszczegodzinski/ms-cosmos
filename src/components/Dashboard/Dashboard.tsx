import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import Circles from '../Circle/Circles';
import BackgroundDots from '../BackgroundDots/BackgroundDots';
import LaunchRocket from '../LaunchRocket/LaunchRocket';
import DetailsTile from '../DetailsTile/DetailsTile';
import styleUtils from '../../helpers/styleUtils';

const DashboardWrapper = styled(styleUtils.CenteredContent)`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: #221b3a;
`;

const DashboardGrid = styled.div`
	width: 100%;
	max-width: 1140px;
	max-height: 640px;
	z-index: 2;
	border: 1px solid white;
	flex-grow: 2;
	position: relative;
`;

const MainContentWrapper = styled.div`
	display: flex;
	padding-bottom: 32px;
	flex-direction: row;
	height: calc(100% - 60px);
	max-height: 580px;
`;

const Dashboard = () => {
	return (
		<DashboardWrapper>
			<Circles />
			<BackgroundDots />
			<DashboardGrid className='dashboardGrid'>
				<Logo />
				<MainContentWrapper className='mainContentWrapper'>
					<DetailsTile />
					<LaunchRocket />
				</MainContentWrapper>
			</DashboardGrid>
			<div className='spacer' style={{ flexGrow: 1 }} />
			<Footer />
		</DashboardWrapper>
	);
};

export default Dashboard;
