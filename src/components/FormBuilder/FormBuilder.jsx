import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./FormBuilder.module.css";

const FormBuilder = () => {
  const [validation, setValidation] = useState(false);
  const { register, handleSubmit } = useForm();

  const inputTypes = [
    {
      label: "Text",
      value: "text",
    },
    {
      label: "Password",
      value: "password",
    },
    {
      label: "Select",
      value: "select",
    },
    {
      label: "Checkbox",
      value: "checkbox",
    },
    {
      label: "Radio",
      value: "radio",
    },
    {
      label: "Number",
      value: "number",
    },
    {
      label: "Textarea",
      value: "textarea",
    },
    {
      label: "Email",
      value: "email",
    },
    {
      label: "Range",
      value: "range",
    },
    {
      label: "Search",
      value: "search",
    },
    {
      label: "Tel",
      value: "tel",
    },
    {
      label: "Url",
      value: "url",
    },
    {
      label: "Time",
      value: "time",
    },
    {
      label: "datetime",
      value: "datetime",
    },
    {
      label: "datetime-local",
      value: "datetime-local",
    },
    {
      label: "week",
      value: "week",
    },
    {
      label: "month",
      value: "month",
    },
  ];

  return (
    <div className={`${styles.wrapper}`}>
      <h1 className={`${styles.form_title} text-center`}>Form Builder</h1>
      {/* <div className="container my-5">
        <div className="row">
          <div className="col">
            <h2 className={`${styles.col_title} text-center`}> Layout </h2>
          </div>
          <div className="col">
            <h2 className={`${styles.col_title} text-center`}> Input Creator </h2>
          </div>
        </div>
      </div> */}
      <div className="card w-50 my-5">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input type="email" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Type:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                {inputTypes.map((type, index) => (
                  <option value={type.value} key={index}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="showValidation"
                onClick={() => setValidation(!validation)}
              />
              <label className="form-check-label" htmlFor="showValidation">
                Show Validation
              </label>
            </div>
            {validation ? (
              <div className={`${styles.validate_fields}`}>
                <hr className="my-4" />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="required"
                  />
                  <label className="form-check-label" htmlFor="required">
                    Required
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="min" className="form-label">
                    Min:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="min"
                    defaultValue={0}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="max" className="form-label">
                    Max:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="max"
                    defaultValue={0}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="min-length" className="form-label">
                    Min Length:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="min-length"
                    defaultValue={0}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="max-length" className="form-label">
                    Max Length:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="max-length"
                    defaultValue={0}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pattern" className="form-label">
                    Pattern:
                  </label>
                  <input type="text" className="form-control" id="pattern" />
                </div>
              </div>
            ) : null}
            <button type="button" className="btn btn-primary w-100 my-2">
              Create
            </button>
            <div className="text-center">
              <span> or </span>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary w-100 my-2"
            >
              Generate Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
