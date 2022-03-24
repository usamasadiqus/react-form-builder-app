import styles from "./FormPreview.module.css";

const FormPreview = () => {
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

  return (
    <div className="container my-5">
      <h1 className={`${styles.form_title} text-center`}>
        {data.title !== "" ? data.title : "User Information"}
      </h1>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="card w-50 my-5">
            <div className="card-body">
              <form>
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

                  return (
                    <div className="mb-3" key={index}>
                      <label htmlFor="name" className="form-label">
                        {name}
                      </label>
                      <input
                        type={type}
                        className="form-control"
                        id="name"
                        required={required ? required : "false"}
                        min={min === 0 ? "" : min}
                        minLength={minLength === 0 ? "" : minLength}
                        max={max === 0 ? "" : max}
                        maxLength={maxLength === 0 ? "" : maxLength}
                        pattern={pattern}
                      />
                      {/* {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )} */}
                    </div>
                  );
                })}
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
    </div>
  );
};

export default FormPreview;
