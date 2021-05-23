import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import { TypographyRegular14, TypographyH200 } from '../Typography/Typography';
import UnsortedIcon from '../../assets/icons/unsort icon.svg';
// import UnsortedIcon from '../../assets/icons/unsort icon white.svg';
import SortAscIcon from '../../assets/icons/sort asc icon.svg';
import SortDescIcon from '../../assets/icons/sort desc icon.svg';

const HeaderCell = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-between;
	height: 40px;
	padding: 10px 16px;
	cursor: pointer;
	background-color: #342a56;
	border-radius: 4px;
	&:hover {
		background-color: #251d42;
	}
	&:hover img {
		visibility: visible;
	}
`;

const Row = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: row;
`;

const CellBody = styled.div`
	width: 100%;
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

const StyledUnsortedIcon = styled.div`
	visibility: hidden;
	filter: invert(62%) sepia(4%) saturate(2708%) hue-rotate(214deg) brightness(97%) contrast(91%);
`;

const StyledSortAscIcon = styled(StyledUnsortedIcon)`
	visibility: visible;
`;
const StyledSortDescIcon = styled(StyledUnsortedIcon)`
	visibility: visible;
`;

interface CapsuleData {
	id: string;
	land_landings: number;
	last_update: string;
	launches: string[];
	reuse_count: number;
	serial: string;
	status: string;
	type: string;
	water_landings: number;
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
	currentHeaders: string[];
	currentVisibleData: any[];
	currentDisplayData: any[];
}

const DetailsTable = ({ modalTitle, currentHeaders, currentDisplayData }: DetailsTableProps) => {
	const [localDisplayData, setLocalDisplayData] = useState(currentDisplayData);
	const [updateData, setUpdateData] = useState(false);
	const [leftColumnSorted, setLeftColumnSorted] = useState(null);
	const [rightColumnSorted, setRightColumnSorted] = useState(null);

	useEffect(() => {
		setLocalDisplayData(currentDisplayData);
	}, [currentDisplayData]);

	useEffect(() => {
		if (updateData) {
			setUpdateData(false);
		}
	}, [updateData]);

	useEffect(() => {
		setLeftColumnSorted(null);
		setRightColumnSorted(null);
	}, [modalTitle]);

	const compareRightHeader = (a: string, b: string): number => {
		// first and second element to compare:
		let first = null;
		let second = null;
		// if current api is capsules, crew or rockets:
		if (modalTitle !== 'Starlink') {
			first = a[currentHeaders[1].toLowerCase()];
			second = b[currentHeaders[1].toLowerCase()];
		} else {
			// if current api is starlink:
			first = a['spaceTrack'][`${currentHeaders[1]}`];
			second = a['spaceTrack'][`${currentHeaders[1]}`];
		}

		return first > second ? 1 : -1;
	};

	const compareLeftHeader = (a: string, b: string): number => {
		// first and second element to compare:
		let first = null;
		let second = null;
		// if current api is capsules, crew or rockets:
		if (modalTitle !== 'Starlink') {
			first = a[currentHeaders[0].toLowerCase()];
			second = b[currentHeaders[0].toLowerCase()];
		} else {
			// if current api is starlink:
			first = a['spaceTrack'][`${currentHeaders[0]}`];
			second = a['spaceTrack'][`${currentHeaders[0]}`];
		}

		return first > second ? 1 : -1;
	};

	const sortData = (column: string): any[] => {
		const comparator = column === 'left' ? compareLeftHeader : compareRightHeader;
		const sortedData = localDisplayData.sort(comparator);
		setLocalDisplayData(sortedData);
		setUpdateData(true);
		return sortedData;
	};

	const handleLeftHeaderClick = (): void => {
		const sortedData = sortData('left');
		if (!leftColumnSorted) {
			setLeftColumnSorted('asc');
			setRightColumnSorted(null);
		}
		if (leftColumnSorted === 'asc') {
			setLocalDisplayData(localDisplayData.reverse());
			setLeftColumnSorted('desc');
		}
		if (leftColumnSorted === 'desc') {
			setLocalDisplayData(sortedData);
			setLeftColumnSorted('asc');
		}
	};

	const handleRightHeaderClick = (): void => {
		const sortedData = sortData('right');
		if (!rightColumnSorted) {
			setRightColumnSorted('asc');
			setLeftColumnSorted(null);
		}
		if (rightColumnSorted === 'asc') {
			setLocalDisplayData(localDisplayData.reverse());
			setRightColumnSorted('desc');
		}
		if (rightColumnSorted === 'desc') {
			setLocalDisplayData(sortedData);
			setRightColumnSorted('asc');
		}
	};

	const renderLeftSortIcon = (): JSX.Element => {
		if (!leftColumnSorted) {
			return (
				<StyledUnsortedIcon>
					<img src={UnsortedIcon} alt={'unsort icon'} />
				</StyledUnsortedIcon>
			);
		}
		if (leftColumnSorted === 'asc') {
			return (
				<StyledSortAscIcon>
					<img src={SortAscIcon} alt={'sort asc icon'} />
				</StyledSortAscIcon>
			);
		}
		if (leftColumnSorted === 'desc') {
			return (
				<StyledSortDescIcon>
					<img src={SortDescIcon} alt={'sort desc icon'} />
				</StyledSortDescIcon>
			);
		}
	};

	const renderRightSortIcon = (): JSX.Element => {
		if (!rightColumnSorted) {
			return (
				<StyledUnsortedIcon>
					<img src={UnsortedIcon} alt={'unsort icon'} />
				</StyledUnsortedIcon>
			);
		}
		if (rightColumnSorted === 'asc') {
			return (
				<StyledSortAscIcon>
					<img src={SortAscIcon} alt={'sort asc icon'} />
				</StyledSortAscIcon>
			);
		}
		if (rightColumnSorted === 'desc') {
			return (
				<StyledSortDescIcon>
					<img src={SortDescIcon} alt={'sort desc icon'} />
				</StyledSortDescIcon>
			);
		}
	};

	const renderBodyTable = (): JSX.Element[] => {
		const result = localDisplayData.map((row, i) => {
			// truncate too long arrays during first render:
			if (i < 200) {
				return (
					<RowBody key={`row-data-${i}`}>
						<CellBody>
							<TypographyRegular14 color='#D2CBE9'>
								{modalTitle === 'Starlink' ? row['spaceTrack'][`${currentHeaders[0]}`] : row[currentHeaders[0].toLowerCase()]}
							</TypographyRegular14>
						</CellBody>
						<CellBody>
							<TypographyRegular14 color='#D2CBE9'>
								{modalTitle === 'Starlink' ? row['spaceTrack'][`${currentHeaders[1]}`] : row[currentHeaders[1].toLowerCase()]}
							</TypographyRegular14>
						</CellBody>
					</RowBody>
				);
			}
			return null;
		});
		return result;
	};

	return (
		<TableWrapper>
			<Row>
				<HeaderCell className='tableHeaderLeft' onClick={handleLeftHeaderClick}>
					<TypographyH200 color='#A094C6'>{currentHeaders[0]}</TypographyH200>
					<TypographyH200 color='#A094C6'>{renderLeftSortIcon()}</TypographyH200>
				</HeaderCell>
				<HeaderCell className='tableHeaderRight' onClick={handleRightHeaderClick}>
					<TypographyH200 color='#A094C6'>{currentHeaders[1]}</TypographyH200>
					<TypographyH200 color='#A094C6'>{renderRightSortIcon()}</TypographyH200>
				</HeaderCell>
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
