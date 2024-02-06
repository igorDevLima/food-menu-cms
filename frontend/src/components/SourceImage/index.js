import "./index.css";
const SourceImage = ({ source, fallbackSource, alt }) => {
  return (
    <img
      src={source}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = fallbackSource;
      }}
      alt={alt}
    />
  );
};

export default SourceImage;
