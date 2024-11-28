/**
 * 更新滾動條高度
 * @description 計算滾動條高度，基於內容高度與容器高度。
 * @param {HTMLElement} contentRef - 滾動內容容器的 DOM 元素引用
 * @param {Function} setThumbHeight - 用於設置滑塊高度的狀態更新函數
 */
export const updateThumbHeight = (contentRef, setThumbHeight) => {
  if (!contentRef.current) return;
  const containerHeight = contentRef.current.clientHeight;
  const contentHeight = contentRef.current.scrollHeight;
  const newThumbHeight = (containerHeight / contentHeight) * containerHeight;
  setThumbHeight(newThumbHeight);
};

/**
 * 更新滾動條位置
 * @description 根據滾動位置更新自定義滾動條的位置。
 * @param {HTMLElement} contentRef - 滾動內容容器的 DOM 元素引用
 * @param {HTMLElement} thumbRef - 滾動條滑塊的 DOM 元素引用
 * @param {number} thumbHeight - 滾動條滑塊的高度
 */
export const updateThumbPosition = (contentRef, thumbRef, thumbHeight) => {
  if (!contentRef.current || !thumbRef.current) return;
  const scrollTop = contentRef.current.scrollTop;
  const scrollHeight = contentRef.current.scrollHeight - contentRef.current.clientHeight;
  const thumbTop = (scrollTop / scrollHeight) * (contentRef.current.clientHeight - thumbHeight);
  thumbRef.current.style.top = `${thumbTop}px`;
};

/**
 * 檢查是否需要滾動條
 * @description 根據內容高度與容器高度判斷是否需要顯示滾動條。
 * @param {HTMLElement} contentRef - 滾動內容容器的 DOM 元素引用
 * @param {Function} setIsOverflowing - 用於設置是否超出容器的狀態更新函數
 */
export const checkOverflow = (contentRef, setIsOverflowing) => {
  if (!contentRef.current) return;
  if (contentRef.current.scrollHeight > contentRef.current.clientHeight) {
    setIsOverflowing(true);
  } else {
    setIsOverflowing(false);
  }
};

/**
 * 處理移動至最底部
 * @description 將滾動內容容器與滾動條滑塊移動至最底部。
 * @param {HTMLElement} contentRef - 滾動內容容器的 DOM 元素引用
 * @param {HTMLElement} thumbRef - 滾動條滑塊的 DOM 元素引用
 * @param {number} thumbHeight - 滾動條滑塊的高度
 */
export const scrollToBottom = (contentRef, thumbRef, thumbHeight) => {
  if (!contentRef.current || !thumbRef.current) return;
  contentRef.current.scrollTop = contentRef.current.scrollHeight - contentRef.current.clientHeight;

  const maxThumbTop = contentRef.current.clientHeight - thumbHeight;
  thumbRef.current.style.top = `${maxThumbTop}px`;
};

/**
 * 處理拖動開始
 * @param {MouseEvent} e - 滑鼠事件
 * @param {HTMLElement} thumbRef - 滾動條滑塊的 DOM 元素引用
 */
export const handleDragStart = (e, thumbRef) => {
  const thumb = thumbRef.current;
  thumb.dataset.dragging = true;
  thumb.dataset.startY = e.clientY;
  thumb.dataset.startTop = parseFloat(thumb.style.top) || 0;
};

/**
 * 處理拖動中
 * @param {MouseEvent} e - 滑鼠事件
 * @param {HTMLElement} contentRef - 滾動內容容器的 DOM 元素引用
 * @param {HTMLElement} thumbRef - 滾動條滑塊的 DOM 元素引用
 * @param {number} thumbHeight - 滾動條滑塊的高度
 */
export const handleDragMove = (e, contentRef, thumbRef, thumbHeight) => {
  const thumb = thumbRef.current;
  if (thumb.dataset.dragging !== "true") return;

  const deltaY = e.clientY - parseFloat(thumb.dataset.startY);
  const newTop = parseFloat(thumb.dataset.startTop) + deltaY;

  const content = contentRef.current;
  const maxScrollTop = content.scrollHeight - content.clientHeight;
  const maxThumbTop = content.clientHeight - thumbHeight;

  const thumbTop = Math.max(0, Math.min(newTop, maxThumbTop));
  const scrollTop = (thumbTop / maxThumbTop) * maxScrollTop;

  thumb.style.top = `${thumbTop}px`;
  content.scrollTop = scrollTop;
};

/**
 * 處理拖動結束
 * @param {HTMLElement} thumbRef - 滾動條滑塊的 DOM 元素引用
 */
export const handleDragEnd = (thumbRef) => {
  thumbRef.current.dataset.dragging = false;
};