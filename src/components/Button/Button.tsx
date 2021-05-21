import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { TypographyH300 } from '../Typography/Typography';
import { createRipples } from 'react-ripples';

const CustomRipples = createRipples({
	color: 'rgba(0,0,0,0.2)',
	during: 800,
});

const ButtonWrapper = styled.div`
	margin-top: 24px;
	padding-right: 165px;
`;

const CustomButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 32px;
	background: ${(props) => (props.disabled ? '#bbbbbb' : '#7860d7')};
	border-radius: 8px;
	border: 0px;
	cursor: ${(props) => (props.disabled ? 'wait !important' : 'pointer')};
	&:hover {
		background: ${(props) => (props.disabled ? '#bbbbbb' : '#05c9b7')};
	}
`;

interface ButtonProps {
	readonly children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
	const [isRocketLaunched, setIsRocketLaunched] = useState(false);

	useEffect(() => {
		if (isRocketLaunched) {
			const rocketTimeout = setTimeout(() => {
				setIsRocketLaunched(false);
			}, 7700);
			return () => {
				clearTimeout(rocketTimeout);
			};
		}
	}, [isRocketLaunched]);

	const lanuchRocket = () => {
		const rocket = document.querySelector('.rocket');
		const smokeLeft = document.querySelector('.smokeLeft');
		const smokeRight = document.querySelector('.smokeRight');
		const landingGear = document.querySelector('.landingGear');
		// disable button:
		setIsRocketLaunched(true);
		// add start animation:
		rocket?.classList.add('rocketStart');
		smokeLeft?.classList.add('showSmokeLeft');
		smokeRight?.classList.add('showSmokeRight');
		landingGear?.classList.add('hideLandingGear');

		// add ladning animation:
		setTimeout(() => {
			rocket?.classList.add('rocketLanding');
		}, 3100);
		// add landing smoke animation:
		setTimeout(() => {
			smokeLeft?.classList.add('showSmokeLeftLanding');
			smokeRight?.classList.add('showSmokeRightLanding');
			landingGear?.classList.add('showLandingGear');
		}, 5800);
		// remove animation classes to make it possible to start again:
		setTimeout(() => {
			rocket?.classList.remove('rocketStart', 'rocketLanding');
			landingGear?.classList.remove('hideLandingGear', 'showLandingGear');
		}, 6200);
		//remove smoke animation classes:
		setTimeout(() => {
			smokeLeft?.classList.remove('showSmokeLeft', 'showSmokeLeftLanding');
			smokeRight?.classList.remove('showSmokeRight', 'showSmokeRightLanding');
		}, 7700);
	};

	return (
		<ButtonWrapper>
			<CustomRipples during={isRocketLaunched ? 0 : 800} color={isRocketLaunched ? 'transparent' : 'rgba(0,0,0,0.2)'}>
				<CustomButton className='launchBtn pointer' onClick={lanuchRocket} disabled={isRocketLaunched}>
					<TypographyH300>{children}</TypographyH300>
				</CustomButton>
			</CustomRipples>
		</ButtonWrapper>
	);
};

export default Button;
