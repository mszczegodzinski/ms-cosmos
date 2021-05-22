import React from 'react';
import styled from 'styled-components';
import PlanetImage from '../../assets/images/Planet.png';
import styleUtils from '../../helpers/styleUtils';
import Rocket from '../Rocket/Rocket';

const PlanetWrapper = styled.div`
	position: relative;
`;

const StyledPlanetImage = styled(styleUtils.CenteredContent)`
	justify-content: flex-end;
	padding-right: 25px;
	@media screen and (min-width: 992px) {
		padding-right: 70px;
	}
`;

const Planet = () => {
	return (
		<PlanetWrapper>
			<StyledPlanetImage>
				<img src={PlanetImage} alt={`Planet`} />
			</StyledPlanetImage>
			<Rocket />
		</PlanetWrapper>
	);
};

export default Planet;
