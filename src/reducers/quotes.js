export default (state = [], action) => {
  console.log(action.type)
  switch (action.type) {
    case "ADD_QUOTE":
     return [...state, action.quote]

    case "REMOVE_QUOTE":
      console.log("This is working")
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      console.log("upvote")
        return {    

        }

    case "DOWNVOTE_QUOTE":
      return {

      }

     default:
       console.log("default")
       return state;
  }
}
