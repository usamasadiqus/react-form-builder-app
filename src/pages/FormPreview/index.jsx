import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./FormPreview.module.css";

const FormPreview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let data = JSON.parse(localStorage.getItem("form-data"));

  const exportForm = () => {
    let encodedUri = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 4)
    )}`;
    let anchor = document.createElement("a");
    anchor.setAttribute("href", encodedUri);
    anchor.setAttribute("download", "form-data.json");
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const onSubmit = (data) => {
    console.log("file preview save data", data);
  };

  return (
    <div className="container my-5">
      {!data ? (
        <div className={`${styles.flex_style} text-center`}>
          <h2 className="mt-5 display-3">There isn't a form!</h2>
          <Link to="/">Create Form</Link>
        </div>
      ) : (
        <>
          <h1 className={`${styles.form_title} text-center`}>
            {data.title !== "" ? data.title : "User Information"}
          </h1>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card w-50 my-5">
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {data.fields.map((input, index) => {
                      const {
                        name,
                        type,
                        required,
                        min,
                        minLength,
                        max,
                        maxLength,
                        pattern,
                      } = input;

                      const properties = {};

                      Object.keys(input).forEach(
                        (key) => input[key] && (properties[key] = input[key])
                      );

                      return (
                        <div className="mb-3" key={index}>
                          <label
                            htmlFor={name}
                            className="form-label"
                            style={{ textTransform: "capitalize" }}
                          >
                            {name}
                          </label>
                          <input
                            type={type}
                            className="form-control"
                            // id={name}
                            // {...(min ? { min } : {})}
                            // {...(minLength ? { minLength } : {})}
                            // {...(max ? { max } : {})}
                            // {...(maxLength ? { maxLength } : {})}
                            // {...(pattern ? { pattern } : {})}
                            {...properties}
                            {...register(`${name}`)}
                          />
                          {/* {errors.name.type === "required" && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )} */}
                        </div>
                      );
                    })}
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mb-3"
                    >
                      Submit
                    </button>
                  </form>
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => exportForm()}
                  >
                    Export Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FormPreview;
