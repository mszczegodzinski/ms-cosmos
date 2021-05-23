import ActionTypes from '../actions/actionTypes';

const initialState = {
	capsulesData: [],
	crewData: [],
	rocketsData: [],
	starlinkData: [],
	getCapsulesSuccessfully: false,
	getCapsulesFailed: false,
	getCrewSuccessfully: false,
	getCrewFailed: false,
	getRocketsSuccessfully: false,
	getRocketsFailed: false,
	getStarlinkSuccessfully: false,
	getStarlinkFailed: false,
	isModalVisible: false,
	modalTitle: '',
	isLoaderRender: false,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_CAPSULES_SUCCESSFULLY:
			return {
				...state,
				capsulesData: action.payload,
				getCapsulesSuccessfully: true,
				getCapsulesFailed: false,
			};
		case ActionTypes.GET_CAPSULES_FAILED:
			return {
				...state,
				capsulesData: action.payload,
				getCapsulesSuccessfully: false,
				getCapsulesFailed: true,
			};
		case ActionTypes.GET_CREW_SUCCESSFULLY:
			return {
				...state,
				crewData: action.payload,
				getCrewSuccessfully: true,
				getCrewFailed: false,
			};
		case ActionTypes.GET_CREW_FAILED:
			return {
				...state,
				crewData: action.payload,
				getCrewSuccessfully: false,
				getCrewFailed: true,
			};
		case ActionTypes.GET_ROCKETS_SUCCESSFULLY:
			return {
				...state,
				rocketsData: action.payload,
				getRocketsSuccessfully: true,
				getRocketsFailed: false,
			};
		case ActionTypes.GET_ROCKETS_FAILED:
			return {
				...state,
				rocketsData: action.payload,
				getRocketsSuccessfully: false,
				getRocketsFailed: true,
			};
		case ActionTypes.GET_STARLINK_SUCCESSFULLY:
			return {
				...state,
				starlinkData: action.payload,
				getStarlinkSuccessfully: true,
				getStarlinkFailed: false,
			};
		case ActionTypes.GET_STARLINK_FAILED:
			return {
				...state,
				starlinkData: action.payload,
				getStarlinkSuccessfully: false,
				getStarlinkFailed: true,
			};
		case ActionTypes.SHOW_MODAL:
			return {
				...state,
				isModalVisible: action.payload,
			};
		case ActionTypes.SET_CURRENT_POPUP_TITLE:
			return {
				...state,
				modalTitle: action.payload,
			};
		case ActionTypes.RESET_FETCH_STATES:
			return {
				...state,
				getCapsulesSuccessfully: false,
				getCapsulesFailed: false,
				getCrewSuccessfully: false,
				getCrewFailed: false,
				getRocketsSuccessfully: false,
				getRocketsFailed: false,
				getStarlinkSuccessfully: false,
				getStarlinkFailed: false,
				capsulesData: [],
				crewData: [],
				rocketsData: [],
				starlinkData: [],
			};
		case ActionTypes.SHOW_LOADER:
			return {
				...state,
				isLoaderRender: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
