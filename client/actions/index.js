export const FETCH_TODOS = 'fetch_todos'
export const fetchTodos = () => async (dispatch, getState, api) => {
  const res = await api.get('/todos')
  dispatch({
    type: FETCH_TODOS,
    payload: res
  })
}

export const ADD_TODO = 'add_todo'
export const addTodo = (option) => async (dispatch, getState, api) => {
  const res = await api.post('/todos/create', {content: option})
  dispatch({
    type: ADD_TODO,
    payload: res
  })
}

export const DELETE_TODO = 'delete_todo'
export const deleteTodo = (id) => async (dispatch, getState, api) => {
  const res = await api.delete(`/todos/${id}`)
  dispatch({
    type: DELETE_TODO,
    payload: res
  })
}