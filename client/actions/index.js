export const FETCH_TODOS = 'fetch_todos'
export const fetchTodos = () => async (dispatch, getState, api) => {
  const res = await api.get('/todos')
  dispatch({
    type: FETCH_TODOS,
    payload: res
  })
}