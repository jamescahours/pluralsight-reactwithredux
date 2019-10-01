export default function courseReducer(state = [], action) {
  //map what's changing to a new state
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
