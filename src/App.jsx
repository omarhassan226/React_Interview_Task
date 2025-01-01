import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EmployeeForm from "./pages/EmployeeForm";
import GeneralInformation from "./components/Form/GeneralInformation";
import Header from "./components/Header/Header";
import BankInformation from "./components/Form/BankInformation";
import EducationInformation from "./components/Form/EducationInformation";
import JobInformation from "./components/Form/JobInformation";
import { StepsProvider } from "./providers/StepContext";

function App() {
  return (
    <Router>
      <StepsProvider>
        <Routes>
          <Route path="/" element={<EmployeeForm />}>
            <Route index element={<GeneralInformation />} />
            <Route
              path="general_information"
              element={<GeneralInformation />}
            />
            <Route path="bank_information" element={<BankInformation />} />
            <Route
              path="education_information"
              element={<EducationInformation />}
            />
            <Route path="job_information" element={<JobInformation />} />
          </Route>
        </Routes>
      </StepsProvider>
    </Router>
  );
}

export default App;
