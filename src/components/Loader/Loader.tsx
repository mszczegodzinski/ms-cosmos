import React from 'react';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import './Loader.css';

const LoaderWrapper = styled(styleUtils.CenteredContent)`
	padding-top: 100px;
`;

const Button = () => {
	return (
		<LoaderWrapper>
			<div className='lds-grid'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</LoaderWrapper>
	);
};

export default Button;
