import { checkCredentials } from '../helpers/session'

/*
  Actions одного домена лучше объединить в объект:

  const ActionType = {
    LOG_IN: `LOG_IN`,
    LOG_OUT: `LOG_OUT`,
    LOG_IN_FAILURE: `LOG_IN_FAILURE`,
  };
*/
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

/*
  Вынести создание Action в ActionCreator
  const ActionCreator = {
    logIn: (userName) => ({
      type: ActionType.LOG_IN,
      payload: {
        name: userName,
      }
    }),
    ..........

  }
*/
export function logIn(params, next) {
  return dispatch => {
    if (checkCredentials(params)) {
        dispatch({
          type: LOG_IN,
          payload: {
            name: params.userName,
          },
        });
      next()
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMessage: 'Имя пользователя или пароль некорректны',
        },
        /*
           error: true, - нигде не используется,
           в любом случае все данные должны быть в payload
        */
        error: true,
      })
    }
  }
}
