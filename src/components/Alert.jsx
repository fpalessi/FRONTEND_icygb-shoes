const Alert = ({ alert }) => {
  return (
    <div className={`${alert.error ? "error-class" : "success-class"}`}>
      {alert.msg}
    </div>
  );
};

export default Alert;
