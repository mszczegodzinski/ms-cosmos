import React from 'react';
import styled from 'styled-components';
// colors: #E34A67 x2, #00C9B7 x2, #7860D7 x1
const BackgroundDotTemplate = styled.div`
	position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
	transition: 0.5s;
	transition-delay: 0.3s;
`;

const RedDotObject = styled(BackgroundDotTemplate)`
    background-color: #E34A67 
`;

const TurquoiseDotObject = styled(BackgroundDotTemplate)`
    background-color: #00C9B7 
`;

const PurpleDotObject = styled(BackgroundDotTemplate)`
    background-color: #7860D7 
`;

const RedDotFirst = styled(RedDotObject)`
    top: 18.75vh;
    left: 5.62vw;
`

const RedDotSecond = styled(RedDotObject)`
    bottom: 27.08vh;
    right: 12.01vw;
`

const TurquoiseDotFirst = styled(TurquoiseDotObject)`
    top: 10.94vh;
    right: 36.68vw;
`

const TurquoiseDotSecond = styled(TurquoiseDotObject)`
    bottom: 33.85vh;
    left: 20.62vw;
`

const PurpleDot = styled(PurpleDotObject)`
    bottom: 14.06vh;
    left: 45.63vw;
`

const BackgroundDot = () => {

    return (
        <>
            <RedDotFirst />
            <RedDotSecond />
            <TurquoiseDotFirst />
            <TurquoiseDotSecond />
            <PurpleDot />
        </>
    );
};

export default BackgroundDot;
