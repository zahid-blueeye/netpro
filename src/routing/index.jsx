import { Route, Routes } from "react-router";

const Webrouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Webrouting;
