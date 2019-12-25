import React, { memo } from "react";

function Size({ size, handleSizeChoose, chosen }) {
  const handleClick = () => {
    handleSizeChoose(size);
  };

  return (
    <div className={chosen ? "size active" : "size"} onClick={handleClick}>
      {size}
    </div>
  );
}

export default memo(Size);
