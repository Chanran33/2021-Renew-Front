import React from "react";

// <div> 태그 안에 메뉴 이름만 들어간 상태
function SideBarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <p>{menu.name}</p>
    </div>
  );
}

export default SideBarItem;
