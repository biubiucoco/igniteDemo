import AppNavigation from '../Navigation/AppNavigation'

export const reducer = (state, action) => {
  console.log(action, 1231231444)
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
