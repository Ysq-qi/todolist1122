/**
 * 計算待辦事項的完成進度
 * @description 根據待辦事項列表，計算已完成事項的百分比進度。
 * @param {Array<Object>} todos - 待辦事項的數組，每個項目包含 `completed` 屬性。
 * @param {boolean} todos[].completed - 待辦事項的完成狀態，`true` 表示已完成，`false` 表示未完成。
 * @returns {number} - 返回已完成事項的百分比，範圍為 0 到 100。如果沒有任何待辦事項，返回 0。
 */
export const calculateProgress = (todos) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  return totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;
};