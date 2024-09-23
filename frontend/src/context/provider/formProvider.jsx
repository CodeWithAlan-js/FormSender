import { FormContext } from "../hook/useFormContext";
import formReducer from "../reducer/formReducer";
import initialFormData from "../reducer/initialFormData";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormData);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpdateForm = (field, value) => {
    dispatch({
      type: "UPDATE_FORM",
      field,
      value,
    });
  };

  const handleSubmitForm = async () => {
    try {
      await axios.post("http://localhost:3000/api/createForm", state);
      dispatch({ type: "RESET_FORM", initialFormData });
      navigate("/succes"); // Redirection après succès
      return true; // Indique succès
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
      return false; // Indique échec
    }
  };

  return (
    <FormContext.Provider
      value={{ state, handleUpdateForm, handleSubmitForm, error }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
