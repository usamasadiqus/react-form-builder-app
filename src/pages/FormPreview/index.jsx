import styles from "./FormPreview.module.css";

const FormPreview = () => {
  let data = JSON.parse(localStorage.getItem("form-data"));

  return (
    <div className="container my-5">
      <h1 className={`${styles.form_title} text-center`}>{data.title}</h1>
      <div className="row">
        <div className="col">
          <div className="card my-5">
            <div className="card-body">
              {data.fields.map((input, index) => (
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      {input.name}
                    </label>
                    <input
                      type={input.type}
                      className="form-control"
                      id="name"
                      // {...register("name", { required: true })}
                    />
                    {/* {errors.name && (
                  <span className="text-danger">This field is required</span>
                )} */}
                  </div>
                </form>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPreview;
