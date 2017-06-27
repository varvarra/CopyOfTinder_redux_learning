// state arg is not app's state but only this reducer is responsible for it.
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payLoad;
  }
  return state
}
