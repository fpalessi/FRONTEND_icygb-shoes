const Error = ({ children, ...props }) => {
  return (
    <div
      style={{
        backgroundColor: "#ff8080",
        color: "#fff",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        width: "100%",
        fontSize: "14px",
        textAlign: "center",
        margin: "10px 0px",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Error;
