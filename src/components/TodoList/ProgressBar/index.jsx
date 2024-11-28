import React from "react";
import { useSelector } from "react-redux";
import {
  ProgressBarContainer,
  ProgressLabel,
  DynamicProgressBar,
  ProgressFill,
} from "./style";

/**
 * ProgressBar Component
 * @description 用於顯示待辦事項完成進度的進度條組件，基於 Redux 狀態更新進度。
 * @returns {JSX.Element} - 進度條的視圖。
 */

const ProgressBar = () => {
  const progress = useSelector((state) => state.todolist.progress);

  return (
    <ProgressBarContainer>
      {/* 進度標籤顯示百分比 */}
      <ProgressLabel>{progress}%</ProgressLabel>
      {/* 動態進度條 */}
      <DynamicProgressBar>
        <ProgressFill style={{ width: `${progress}%` }} />
      </DynamicProgressBar>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
