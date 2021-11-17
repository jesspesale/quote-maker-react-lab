export default (state = [], action) => {

  switch (action.type) {
    case "ADD_QUOTE":
     return [...state, action.quote]

    case "REMOVE_QUOTE":
      debugger
      return state.filter(quote => quote.id !== action.id)

    case "UPVOTE_QUOTE":
        return {

        }

    case "DOWNVOTE_QUOTE":
      return {

      }

     default:
       return state;
  }
}
