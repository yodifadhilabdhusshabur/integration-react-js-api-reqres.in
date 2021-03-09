import { put, takeEvery } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import {store} from "../../store";
import {push} from "react-router-redux";

function* signupAttempt(action) {
    try {
        yield put(actions.loading( true));
        alert('You have successfully registered, Now you can log in.');
        store.dispatch(push("/login"));
    } catch (error) {
        yield put(actions.failure(true,error.response.data.error));
        alert(error.response.data.error)
    }finally {
        yield put(actions.loading(false));
    }
}
function* signupAttemptSaga() {
  yield takeEvery(constants.ATTEMPT, signupAttempt);
}
export default [signupAttemptSaga()];

