const InpurCreator = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  validation,
  setValidation,
  inpType,
  setInpType,
}) => {
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
      label: "File",
      value: "file",
    },
    {
      label: "Range",
      value: "range",
    },
    {
      label: "Color",
      value: "color",
    },
    {
      label: "Hidden",
      value: "hidden",
    },
    {
      label: "Image",
      value: "image",
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
      label: "date",
      value: "date",
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

  const selectedItem = (val) => {
    console.log(val);
  };

  return (
    <div className="card my-5">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
            {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Type:
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              {...register("type", { required: true })}
            >
              {inputTypes.map((type, index) => (
                <option value={type.value} key={index}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          {/* {errors.type && (
                    <span className="text-danger">This field is required</span>
                  )} */}
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
          {validation && (
            // <div className={`${styles.validate_fields}`}>
            <div>
              <hr className="my-4" />
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="required"
                  value={true}
                  {...register("required")}
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
                  {...register("min")}
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
                  {...register("max")}
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
                  {...register("minLength")}
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
                  {...register("maxLength")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pattern" className="form-label">
                  Pattern:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pattern"
                  {...register("pattern")}
                />
              </div>
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100 my-2">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default InpurCreator;
