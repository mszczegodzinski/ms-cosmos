import React from 'react';
import styled from 'styled-components';
import { TypographyH200 } from '../Typography/Typography';

const DetailTileWrapper = styled.div<{ image: string }>`
	position: relative;
	width: 160px;
	height: 208px;
	margin-bottom: 32px;
	border-radius: 16px;
	z-index: 2;
	background: linear-gradient(360deg, #2b224a 0%, rgba(43, 34, 74, 0) 100%), url('${(props) => props.image}');
	background-size: contain;
	border-radius: 16px;
	transition: 0.3s;
	&:hover {
		background: linear-gradient(0deg, rgba(43, 34, 74, 0.92) 7.69%, rgba(70, 58, 113, 0.92) 100%),
			url('${(props) => props.image}');
		backdrop-filter: blur(4px);
		background-size: contain;
	}
	&:hover div.title {
		bottom: 94px;
	}
`;

const StyledTitle = styled.div`
	position: absolute;
	bottom: 24px;
	width: 100%;
	text-align: center;
`;

interface DetailTile {
	title: string;
	image: string;
	alt: string;
}

const DetailsTile = ({ title, image, alt }: DetailTile) => {
	return (
		<DetailTileWrapper image={image}>
			<StyledTitle className='title'>
				<TypographyH200>{title}</TypographyH200>
			</StyledTitle>
		</DetailTileWrapper>
	);
};

export default DetailsTile;
