import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestAction } from './createRequestAction';

const CHANGE_FORM = 'CHANGE_FORM';
const INIT_FORM = 'INIT_FORM';

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL] = createRequestAction('LOGIN');
export const [SIGN, SIGN_SUCCESS, SIGN_FAIL] = createRequestAction('SIGN');
export const [CREATE, CREATE_SUCCESS, CREATE_FAIL] = createRequestAction(
  'CREATE',
);

//form: login/sign, key: email, password, passwordConfirm, value: 값
export const changeForm = createAction(CHANGE_FORM, ({ form, key, value }) => ({
  form,
  key,
  value,
}));
export const initForm = createAction(INIT_FORM, (form) => form);

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

export const sign = createAction(SIGN, ({ email, password }) => ({
  email,
  password,
}));
export const create = createAction(CREATE, ({ nickname, color }) => ({
  nickname,
  color,
}));

export const initialState = {
  sign: {
    email: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    email: '',
    password: '',
  },
  token: null,
  auth: null, //sign success -> true
  authError: null,
  isFirstLogin: null,
  user: null,
  has_jorang: null,
};

const auth = handleActions(
  {
    [CHANGE_FORM]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INIT_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),

    [LOGIN_SUCCESS]: (state, { payload: message }) => ({
      ...state,
      authError: null,
      auth: message.token,
      token: message.token,
      isFirstLogin: message.isFirstLogin,
      user: message.jorang,
      has_jorang: message.has_jorang,
    }),
    [LOGIN_FAIL]: (state, { payload: error }) => ({
      ...state,
      auth: null,
      authError: error,
    }),

    [SIGN_SUCCESS]: (state, { payload: isSuccess }) => ({
      ...state,
      auth: isSuccess,
      authError: null,
    }),
    [SIGN_FAIL]: (state, { payload: error }) => ({
      ...state,
      auth: false,
      authError: error,
    }),

    [CREATE_SUCCESS]: (state, { payload: isSuccess }) => ({
      ...state,
      has_jorang: true,
    }),
    [CREATE_FAIL]: (state, { payload: error }) => ({
      ...state,
      has_jorang: false,
    }),
  },
  initialState,
);

export default auth;
