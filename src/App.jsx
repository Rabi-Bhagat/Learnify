import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Selectthisplan from "./components/Selectthisplan";

<Routes>
  {/* ...other routes... */}
  <Route path="/select-plan/:id" element={<Selectthisplan />} />
  {/* ...other routes... */}
</Routes>;
