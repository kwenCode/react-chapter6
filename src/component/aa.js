

export const reducer = (state, action) => {
    switch(action.type){
      case "CREATE": {
        return [action.newItem, ...state];
      }
      case "UPDATE":
        return state.map((it)=> 
        it.id === action.targetId 
        ? {
          ...it,
          isDone: !it.isDone,
        }
        : it
      );
      case "DELETE":{
        return state.filter((it)=> it.id !== action.targetId);
      }
      default:
        return state;
    }
  }

//export default reducer;