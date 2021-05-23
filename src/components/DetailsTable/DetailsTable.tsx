import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import { TypographyRegular14, TypographyH200 } from '../Typography/Typography';
import { NumberLiteralType } from 'typescript';

const Cell = styled.div`
	width: 246px;
	height: 40px;
	padding: 10px 16px;
	cursor: pointer;
	background-color: #342a56;
	border-radius: 4px;
	&:hover {
		background-color: #251d42;
	}
`;

const Row = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: row;
`;

const CellBody = styled.div`
	width: 246px;
	height: 48px;
	padding: 14px 16px;
`;

const RowBody = styled(Row)`
	height: 48px;
`;

const TableWrapper = styled(styleUtils.CenteredContent)`
	padding: 0 24px 20px 24px;
	width: 100%;
	justify-content: space-between;
	flex-grow: 1;
	overflow-y: auto;
	overflow-x: hidden;
	margin-bottom: 26px;
`;

interface CapsuleData {
	id: string;
	land_landings: NumberLiteralType;
	last_update: string;
	launches: string[];
	reuse_count: NumberLiteralType;
	serial: string;
	status: string;
	type: string;
	water_landings: NumberLiteralType;
}

interface DetailsTableProps {
	capsulesData: CapsuleData[];
	crewData: Object[];
	rocketsData: Object[];
	starlinkData: Object[];
	modalTitle: string;
	getCapsulesSuccesfully: boolean;
	getCrewSuccesfully: boolean;
	getRocketsSuccesfully: boolean;
	getStarlinkSuccesfully: boolean;
}

const DetailsTable = ({
	capsulesData,
	crewData,
	rocketsData,
	starlinkData,
	modalTitle,
	getCapsulesSuccesfully,
	getCrewSuccesfully,
	getRocketsSuccesfully,
	getStarlinkSuccesfully,
}: DetailsTableProps) => {
	const [isLoaderRender, setIsLoaderRender] = useState<boolean>(false);
	const [currentDisplayData, setCurrentDisplayData] = useState<any[]>([]);
	const [currentHeaders, setCurrentHeaders] = useState<String[]>([]);

	useEffect(() => {
		setIsLoaderRender(true);
		if (modalTitle === 'Capsules') {
			setCurrentHeaders(['Type', 'Status']);
			return setCurrentDisplayData(capsulesData);
		}
		if (modalTitle === 'Crew') {
			setCurrentHeaders(['Name', 'Agency']);
			return setCurrentDisplayData(crewData);
		}
		if (modalTitle === 'Rockets') {
			setCurrentHeaders(['Name', 'Boosters']);
			return setCurrentDisplayData(rocketsData);
		}
		if (modalTitle === 'Starlink') {
			setCurrentHeaders(['Height_km', 'Velocity_kms']);
			return setCurrentDisplayData(starlinkData);
		}
	}, [getCapsulesSuccesfully, getCrewSuccesfully, getRocketsSuccesfully, getStarlinkSuccesfully]);

	const renderBodyTable = (): JSX.Element[] => {
		const result = currentDisplayData.map((row, i) => {
			return (
				<RowBody key={`row-data-${i}`}>
					<CellBody>
						<TypographyRegular14 color='#D2CBE9'>{row[currentHeaders[0].toLowerCase()]}</TypographyRegular14>
					</CellBody>
					<CellBody>
						<TypographyRegular14 color='#D2CBE9'>{row[currentHeaders[1].toLowerCase()]}</TypographyRegular14>
					</CellBody>
				</RowBody>
			);
		});
		return result;
	};

	return (
		<TableWrapper>
			<Row>
				<Cell>
					<TypographyH200 color='#A094C6'>{currentHeaders[0]}</TypographyH200>
				</Cell>
				<Cell>
					<TypographyH200 color='#A094C6'>{currentHeaders[1]}</TypographyH200>
				</Cell>
			</Row>
			{renderBodyTable()}
		</TableWrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		capsulesData: state.capsulesData,
		crewData: state.crewData,
		rocketsData: state.rocketsData,
		starlinkData: state.starlinkData,
		modalTitle: state.modalTitle,
		getCapsulesSuccesfully: state.getCapsulesSuccesfully,
		getCrewSuccesfully: state.getCrewSuccesfully,
		getRocketsSuccesfully: state.getRocketsSuccesfully,
		getStarlinkSuccesfully: state.getStarlinkSuccesfully,
	};
};

const actions = {};

export default connect(mapStateToProps, actions)(DetailsTable);
