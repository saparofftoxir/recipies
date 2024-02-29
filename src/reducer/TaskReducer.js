export const InitialState = {
  tasks:JSON.parse(localStorage.getItem('tasks')) || [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
        return (state={
            ...state,
            tasks:[...state.tasks, action.payload]
        })
        case "DELETE_TASK": {
            const filteredTask=state.tasks.filter(item=>item.id !== action.payload)
            return state={
                ...state,
                tasks:filteredTask,
            }
        }
  }
};
export default {InitialState, reducer}
