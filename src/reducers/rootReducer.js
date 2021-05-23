import ActionTypes from '../actions/actionTypes';

const initialState = {
	capsulesData: [],
	crewData: [],
	rocketsData: [],
	starlinkData: [],
	getCapsulesSuccesfully: false,
	getCapsulesFailed: false,
	getCrewSuccesfully: false,
	getCrewFailed: false,
	getRocketsSuccesfully: false,
	getRocketsFailed: false,
	getStarlinkSuccesfully: false,
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
				getCapsulesSuccesfully: true,
				getCapsulesFailed: false,
			};
		case ActionTypes.GET_CAPSULES_FAILED:
			return {
				...state,
				capsulesData: action.payload,
				getCapsulesSuccesfully: false,
				getCapsulesFailed: true,
			};
		case ActionTypes.GET_CREW_SUCCESSFULLY:
			return {
				...state,
				crewData: action.payload,
				getCrewSuccesfully: true,
				getCrewFailed: false,
			};
		case ActionTypes.GET_CREW_FAILED:
			return {
				...state,
				crewData: action.payload,
				getCrewSuccesfully: false,
				getCrewFailed: true,
			};
		case ActionTypes.GET_ROCKETS_SUCCESSFULLY:
			return {
				...state,
				rocketsData: action.payload,
				getRocketsSuccesfully: true,
				getRocketsFailed: false,
			};
		case ActionTypes.GET_ROCKETS_FAILED:
			return {
				...state,
				rocketsData: action.payload,
				getRocketsSuccesfully: false,
				getRocketsFailed: true,
			};
		case ActionTypes.GET_STARLINK_SUCCESSFULLY:
			return {
				...state,
				starlinkData: action.payload,
				getStarlinkSuccesfully: true,
				getStarlinkFailed: false,
			};
		case ActionTypes.GET_STARLINK_FAILED:
			return {
				...state,
				starlinkData: action.payload,
				getStarlinkSuccesfully: false,
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
				getCapsulesSuccesfully: false,
				getCapsulesFailed: false,
				getCrewSuccesfully: false,
				getCrewFailed: false,
				getRocketsSuccesfully: false,
				getRocketsFailed: false,
				getStarlinkSuccesfully: false,
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
