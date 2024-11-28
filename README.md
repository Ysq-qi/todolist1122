# Todo List 應用程式

## 專案簡介
一個基於 React 和 Redux 的待辦事項清單應用程式，提供了添加、刪除、切換完成狀態、進度條顯示、自定義滾動條以及排序功能。

---

## 功能特色
- **添加待辦事項**：可以新增新的待辦事項，並自動滾動到列表底部。
- **刪除待辦事項**：可以刪除現有的待辦事項。
- **切換完成狀態**：點擊待辦事項前的方塊即可標記為完成或未完成。
- **進度條顯示**：根據已完成的事項數量，實時更新進度條的百分比。
- **自定義滾動條**：當待辦事項超過顯示區域時，出現自定義的滾動條。
- **排序功能**：可以切換是否將已完成的待辦事項移動到列表底部。

---

## 環境需求
- Node.js = 20
- npm  

---

## 安裝步驟

1. **複製專案**
    ```bash
    git clone https://github.com/Ysq-qi/todolist1122
    cd todolist1122

2. **安裝依賴項**
    ```bash
    npm install

3. **運行應用程式**
    ```bas
    npm start

### 專案結構

src/
├── assets/                # 靜態資源（例如圖片、圖標等）
├── components/            # 可重複使用的 React 組件
│   ├── TodoList/          # TodoList 相關功能
│   │   ├── AddTodo/       # 添加待辦功能
│   │   ├── Divider/       # 分隔線組件
│   │   ├── Header/        # 標題組件
│   │   ├── ProgressBar/   # 進度條組件
│   │   ├── TodoItemsList/ # 顯示待辦事項清單
│   │   │   ├── TodoItem/  # 單個待辦項目
│   │   ├── Toggle/        # 切換功能（例如完成事項排序）
│   │   ├── todolistSlice.jsx # TodoList 的 Redux 狀態管理邏輯
├── pages/                 # 頁面文件
│   ├── home/              # 首頁相關
│   │   ├── homeSlice.jsx  # Redux 狀態管理邏輯
│   │   ├── index.jsx      # 首頁組件
│   │   └── style.js       # 首頁樣式
├── store/                 # Redux store 配置
├── styles/                # 全域樣式
├── utils/                 # 實用工具函數
├── App.jsx                # 主應用程式
└── index.js               # 入口文件

## 聯絡方式
- 如有任何疑問或建議，請透過 jacky55321261@gmail.com 與我聯繫。