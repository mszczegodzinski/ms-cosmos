import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import DetailTile from './DetailTile';
import CapsulesImage from '../../assets/images/Image 4.png';
import CrewImage from '../../assets/images/Image 1.png';
import RocketsImage from '../../assets/images/Image 2.png';
import StarlinkImage from '../../assets/images/Image 3.png';

const DetailTilesWrapper = styled(styleUtils.CenteredContent)`
	width: 100%;
	flex-direction: column;
	flex-wrap: wrap;
	@media screen and (min-width: 500px) {
		flex-direction: row;
		align-content: flex-end;
	}
	@media screen and (min-width: 850px) {
		width: 50%;
		justify-content: flex-start;
		padding-left: 35px;
	}
	@media screen and (min-width: 992px) {
		padding-left: 95px;
	}
`;

const DetailsTile = () => {
	const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

	const checkIfScreenIsSmall = (e: UIEvent) => {
		const currentTarget = e.target as Window;
		if (currentTarget.innerWidth < 500 && !isSmallScreen) {
			console.log('small screen');
			setIsSmallScreen(true);
		}
		if (currentTarget.innerWidth >= 500 && isSmallScreen) {
			console.log('not small screen');
			setIsSmallScreen(false);
		}
	};

	useEffect(() => {
		if (window.innerWidth < 500) {
			setIsSmallScreen(true);
		}
		window.addEventListener('resize', checkIfScreenIsSmall);
		return () => {
			window.removeEventListener('resize', checkIfScreenIsSmall);
		};
	}, [isSmallScreen]);

	return (
		<DetailTilesWrapper>
			<div style={{ marginRight: isSmallScreen ? '0' : '30px' }}>
				<DetailTile title='Capsules' image={CapsulesImage} alt='' />
				<DetailTile title='Crew' image={CrewImage} alt='' />
			</div>
			<div>
				<DetailTile title='Rockets' image={RocketsImage} alt='' />
				<DetailTile title='Starlink' image={StarlinkImage} alt='' />
			</div>
		</DetailTilesWrapper>
	);
};

export default DetailsTile;
