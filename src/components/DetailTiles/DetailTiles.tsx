import React from 'react';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import DetailTile from './DetailTile';
import CapsulesImage from '../../assets/images/Image 4.png';
import CrewImage from '../../assets/images/Image 1.png';
import RocketsImage from '../../assets/images/Image 2.png';
import StarlinkImage from '../../assets/images/Image 3.png';

const DetailTilesWrapper = styled(styleUtils.CenteredContent)`
	width: 50%;
	flex-direction: row;
	align-content: flex-end;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding-left: 35px;
	@media screen and (min-width: 992px) {
		padding-left: 95px;
	}
`;

const DetailsTile = () => {
	return (
		<DetailTilesWrapper>
			<div style={{ marginRight: '30px' }}>
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
