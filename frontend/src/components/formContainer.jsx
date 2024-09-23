import FormInput from "./formInput";
import { useFormContext } from "../context/hook/useFormContext";

const FormContainer = () => {
  const { state, handleUpdateForm, handleSubmitForm, error } = useFormContext();
  const catchyHeadline = "Do you have a question? Please contact us";
  const upperCase = (str) => str.toUpperCase();

  return (
    <div className="flex flex-col w-4/5 h-4/5 md:w-2/5">
      <h1 className="text-center font-light text-2xl mb-4 underline underline-offset-4 decoration-primary">
        {upperCase(catchyHeadline)}
      </h1>
      <div className="w-full h-4/5 flex flex-col border border-base-content rounded-xl ">
        <div className="p-4 h-full flex flex-col gap-8 justify-center">
          <FormInput
            placeholder="Enter your name"
            type="text"
            value={state.name}
            handleChanger={(e) => handleUpdateForm("name", e.target.value)}
          />
          <FormInput
            placeholder="Enter your email"
            type="email"
            value={state.email}
            handleChanger={(e) => handleUpdateForm("email", e.target.value)}
          />
          <FormInput
            placeholder="Subject"
            type="text"
            value={state.subject}
            handleChanger={(e) => handleUpdateForm("subject", e.target.value)}
          />
          <textarea
            className="textarea textarea-bordered border-accent resize-none h-32"
            placeholder="Message"
            value={state.message}
            onChange={(e) => handleUpdateForm("message", e.target.value)}
          />
          {error && (
            <div className="text-center text-red-500 font-semibold">
              {error}
            </div>
          )}
          <div className="w-full flex justify-center">
            <button
              onClick={handleSubmitForm}
              className="btn btn-primary w-3/5 md:w-2/5"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
