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
    inFields: [],
  });
  const [inpType, setInpType] = useState("");
  let [counter, setCounter] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    localStorage.removeItem("form-data");
  }, []);

  const { inFields } = inputField;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    let {
      accept,
      alt,
      cols,
      max,
      maxLength,
      min,
      minLength,
      name,
      pattern,
      required,
      rows,
      src,
      type,
      value,
    } = data;

    if (max == 0 || max == undefined) max = "";
    if (maxLength == 0 || maxLength == undefined) maxLength = "";
    if (min == 0 || min == undefined) min = "";
    if (minLength == 0 || minLength == undefined) minLength = "";

    console.log({
      accept,
      alt,
      cols,
      max,
      maxLength,
      min,
      minLength,
      name,
      pattern,
      required,
      rows,
      src,
      type,
      value,
    });

    let inputData;

    setCounter((prevState) => {
      let id = prevState + 1;
      inputData = Object.assign(
        { id },
        {
          accept,
          alt,
          cols,
          max,
          maxLength,
          min,
          minLength,
          name,
          pattern,
          required,
          rows,
          src,
          type,
          value,
        }
      );
      return id;
    });

    inFields.push(inputData);

    setInputField({ ...inputField, inFields });

    setValidation(false);

    reset();
  };

  const editInput = (inputId) => {
    // const data = inputField.find((input) => input.id === inputId);/*  */
  };

  const deleteInput = (inputId) => {
    // let data = [...inputField];
    // let eme = inFields.filter((item) => item.id !== inputId);
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
              inFields={inFields}
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
              control={control}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              errors={errors}
              validation={validation}
              setValidation={setValidation}
              inpType={inpType}
              setInpType={setInpType}
              options={options}
              setOptions={setOptions}
            />
          </div>
        </div>
        {inFields.length > 0 && (
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
