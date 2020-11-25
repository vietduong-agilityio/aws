/**
 * Just an example about middleware handle before
 * pass next action to reducer
 */
export function logger(state, action) {
  // Will handle async code here, e.g: Call API
  console.log('CURRENT STATE', state);
  console.log('NEXT ACTION', action.type);

  // After call API, will return next action (success or error)
  return action;
}
