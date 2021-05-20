import React from 'react';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';

const DetailsTileWrapper = styled(styleUtils.CenteredContent)`
	padding-right: 15px;
    width: 50%;
`;

const DetailsTile = () => {
    return (
        <DetailsTileWrapper>
            <div style={{ color: 'white' }}>details tile</div>
        </DetailsTileWrapper>
    );
};

export default DetailsTile;