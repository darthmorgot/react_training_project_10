import {loadQuestions, requiredAuthorization, redirectToRoute} from './action';
import {AuthorizationStatus} from '../const';
import {AppRoute, APIRoute} from '../const';

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.QUESTIONS)
    .then(({data}) => dispatch(loadQuestions(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
);
