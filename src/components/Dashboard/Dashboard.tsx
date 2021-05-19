import React, { Children } from 'react';
import styled from 'styled-components';
import { TypographyH300 } from '../Typography/Typography';
import Button from '../Button/Button';

const DashboardBackground = styled.div`
	position: relative;
	max-width: 1440px;
	height: 768px;
	background: #221b3a;
`;

const DashboardGrid = styled.div`
	position: absolute;
	width: 1140px;
	height: 640px;
	left: 150px;
	top: 0px;
`;

const Dashboard = () => {
	return (
		<DashboardBackground className='dashboardBackground'>
			<DashboardGrid className='dashboardGrid'>
				<TypographyH300>
					<div style={{ border: '1px solid black' }}>aaa</div>
				</TypographyH300>
				<div style={{ border: '1px solid black' }}>aaa</div>
				<div style={{ border: '1px solid black' }}>bbb</div>
				<Button>some text</Button>
			</DashboardGrid>
		</DashboardBackground>
	);
};

export default Dashboard;
