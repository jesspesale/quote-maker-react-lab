export default (state = [], action) => {

  switch (action.type) {
    case "ADD_QUOTE":
     return [...state, action.quote]

    case "REMOVE_QUOTE":
      const newQuotes = state.filter(quote => quote.id !== action.id)
       return newQuotes

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
