import Loader from "../Loader";

const StrapiWrapper = ({ data, isFetching, children }) => {
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : data !== undefined ? (
        children
      ) : null}
    </>
  );
};

export default StrapiWrapper;
