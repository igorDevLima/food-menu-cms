import "./index.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loading">
        <div className="spinner-border aloader" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
