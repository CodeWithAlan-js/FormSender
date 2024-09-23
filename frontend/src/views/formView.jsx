import FormContainer from "../components/formContainer";
import SwitchTheme from "../components/switchTheme";

const FormView = () => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden theme-sunset">
      <SwitchTheme />
      <div className="w-full h-full flex justify-center items-center">
        <FormContainer />
      </div>
    </div>
  );
};

export default FormView;
