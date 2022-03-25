import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import InputCreator from "../../components/InputCreator";
import styles from "./FormBuilder.module.css";

const FormBuilder = () => {
  const navigate = useNavigate();

  const [validation, setValidation] = useState(false);
  const [inputField, setInputField] = useState({
    title: "",
    fields: [],
  });
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.removeItem("form-data");
  }, []);

  const { fields } = inputField;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    let inputData;

    setCounter((prevState) => {
      let id = prevState + 1;
      inputData = Object.assign({ id }, data);
      return id;
    });

    fields.push(inputData);

    setInputField({ ...inputField, fields });

    setValidation(false);

    reset();
  };

  const editInput = (inputId) => {
    // const data = inputField.find((input) => input.id === inputId);/*  */
  };

  const deleteInput = (inputId) => {
    // let data = [...inputField];
    // let eme = fields.filter((item) => item.id !== inputId);
    // setInputField(inputField.title);
  };

  const previewForm = () => {
    localStorage.setItem("form-data", JSON.stringify(inputField, null, 4));
    navigate("/form-preview");
  };

  return (
    <div className={`${styles.wrapper}`}>
      <h1 className={`${styles.form_title} text-center`}>Form Builder</h1>
      <div className="container my-5">
        {/* <h3 className={`${styles.col_title} text-center`}> Form Information </h3>
        <div className="row">
          <div className="col">
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
          </div>
        </div>
        <hr /> */}
        <div className="row">
          <div className="col">
            <h3 className={`${styles.col_title} text-center`}> Layout </h3>
            <Layout
              fields={fields}
              editInput={editInput}
              deleteInput={deleteInput}
            />
          </div>
          <div className="col">
            <h3 className={`${styles.col_title} text-center`}>
              {" "}
              Input Creator{" "}
            </h3>
            <InputCreator
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              errors={errors}
              validation={validation}
              setValidation={setValidation}
            />
          </div>
        </div>
        {fields.length > 0 && (
          <div className="row">
            <div className="col">
              <button
                className="btn btn-outline-primary w-100"
                onClick={() => previewForm()}
              >
                Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormBuilder;
