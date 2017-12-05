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
  await api.post('/todos/create', {content: option})
  const res = await api.get('/todos')
  dispatch({
    type: ADD_TODO,
    payload: res
  })
}

export const DELETE_TODO = 'delete_todo'
export const deleteTodo = (id) => async (dispatch, getState, api) => {
  await api.delete(`/todos/${id}`)
  const res = await api.get('/todos')
  dispatch({
    type: DELETE_TODO,
    payload: res
  })
}

export const DELETE_ALL_TODO = 'delete_all_todo'
export const deleteAllTodo = (id) => async (dispatch, getState, api) => {
  await api.delete(`/todos/remove`)
  const res = await api.get('/todos')
  dispatch({
    type: DELETE_ALL_TODO,
    payload: res
  })
}