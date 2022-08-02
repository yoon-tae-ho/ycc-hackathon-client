import { BrowserRouter, Routes, Route } from "react-router-dom";
import MileageDetail from "./components/MileageDetail";
import SyllabusDetail from "./components/SyllabusDetail";
import Home from "./routes/Home";
import Mileage from "./routes/Mileage";
import Syllabus from "./routes/Syllabus";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mileage" element={<Mileage />} />
        <Route path="/mileage/detail" element={<MileageDetail />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/syllabus/detail" element={<SyllabusDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
