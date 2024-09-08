// import React, { useState } from "react";

// const ToastContainer = () => {
//   const [toast, setToast] = useState([]);
//   const handleDelete = (id) => {
//     setToast((prevToast) => prevToast.filter((item) => item.id !== id));
//   };

//   const handleAdd = (message, type) => {
//     const id = new Date().getTime();
//     setToast([...toast, { id, message, type }]);
//     setTimeout(() => handleDelete(id), 5000);
//   };
//   return (
//     <div>
//       <div
//         style={{
//           top: "0.9rem",
//           right: "0.9rem",
//           color: "black",
//           padding: 20,
//         }}
//       >
//         {toast.map(({ id, message, type }) => (
//           <div>
//             {message} <span onClick={() => handleDelete(id)}>X</span>
//           </div>
//         ))}
//       </div>
//       <div>
//         <button
//           style={{
//             padding: "10px 20px",
//             margin: "5px",
//             border: "none",
//             borderRadius: "4px",
//             color: "white",
//             cursor: "pointer",
//             backgroundColor: "green",
//           }}
//           onClick={() => handleAdd("Success", "success")}
//         >
//           Success Toast
//         </button>
//         <button onClick={() => handleAdd("Info", "info")}>Info Toast</button>
//         <button onClick={() => handleAdd("Warning", "warning")}>
//           Warning Toast
//         </button>
//         <button onClick={() => handleAdd("Alert Toast", "alert")}>
//           Alert Toast
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ToastContainer;

import React, { useState } from "react";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const handleDelete = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => handleDelete(id), 5000);
  };

  const buttonStyles = {
    padding: 10,
    borderRadius: 10,
    cursor: "pointer",
    color: "white",
    border: "none",
  };
  const successButtonStyles = { ...buttonStyles, backgroundColor: "green" };
  const infoButtonStyles = { ...buttonStyles, backgroundColor: "blue" };
  const warningButtonStyles = { ...buttonStyles, backgroundColor: "orange" };
  const alertButtonStyles = { ...buttonStyles, backgroundColor: "red" };

  return (
    <div>
      <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
        {toasts.map(({ message, type }) => (
          <div>
            {message} <span onClick={() => handleDelete(id)}>X</span>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={successButtonStyles}
          onClick={() => handleAdd("This is Success Toast")}
        >
          Success Toast
        </button>
        <button
          style={infoButtonStyles}
          onClick={() => handleAdd("This is Info Toast")}
        >
          Info Toast
        </button>
        <button
          style={warningButtonStyles}
          onClick={() => handleAdd("This is Warning taost")}
        >
          Warning Toast
        </button>
        <button
          style={alertButtonStyles}
          onClick={() => handleAdd("This is Alert taost")}
        >
          Alert Toast
        </button>
      </div>
    </div>
  );
};

export default ToastContainer;
