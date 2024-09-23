import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormView from "./views/formView";
import SuccesView from "./views/succesView";
import FormProvider from "./context/provider/formProvider";

function App() {
  return (
    <Router>
      <FormProvider>
        <Routes>
          <Route path="/" element={<FormView />} />
          <Route path="/succes" element={<SuccesView />} />
        </Routes>
      </FormProvider>
    </Router>
  );
}

export default App;
