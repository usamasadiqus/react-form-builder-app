import { useFieldArray } from "react-hook-form";

const InpurCreator = ({
  control,
  handleSubmit,
  onSubmit,
  register,
  errors,
  validation,
  setValidation,
  inpType,
  setInpType,
  options,
  setOptions,
}) => {
  const { append, fields, remove } = useFieldArray({
    control,
    name: "fieldOptions",
  });

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
              aria-label="Select input type"
              {...register("type", {
                required: true,
                onChange: (e) => setInpType(e.target.value),
              })}
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
          {inpType === "select" && (
            <>
              {fields.map((item, index) => (
                <div className="form-row form-group" key={index}>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      {...register(`options.${index}.option`)}
                      defaultValue={item.option}
                    />
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-danger"
                      onClick={() => remove(index)}
                    >
                      Delete
                    </button>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      append({
                        fieldOptions: "",
                      })
                    }
                  >
                    Add
                  </button>
                </div>
              ))}
            </>
          )}
          {inpType === "radio" && (
            <>
              <div className="mb-3">
                <label htmlFor="option" className="form-label">
                  Option:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="option"
                  {...register("option.options", {
                    required: true,
                  })}
                />
                {errors.option && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
            </>
          )}
          {inpType === "textarea" && (
            <>
              <div className="mb-3">
                <label htmlFor="rows" className="form-label">
                  Rows:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rows"
                  {...register("rows", { required: true })}
                />
                {errors.rows && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="cols" className="form-label">
                  Cols:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cols"
                  {...register("cols", { required: true })}
                />
                {errors.cols && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
            </>
          )}
          {inpType === "file" && (
            <div className="mb-3">
              <label htmlFor="accept" className="form-label">
                Accept:
              </label>
              <input
                type="text"
                className="form-control"
                id="accept"
                {...register("accept", { required: true })}
              />
              {errors.accept && (
                <span className="text-danger">This field is required</span>
              )}
              {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
            </div>
          )}
          {inpType === "range" && (
            <>
              <div className="mb-3">
                <label htmlFor="min" className="form-label">
                  Min:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="min"
                  {...register("min", { required: true })}
                />
                {errors.min && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="max" className="form-label">
                  Max:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="max"
                  {...register("max", { required: true })}
                />
                {errors.max && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="value" className="form-label">
                  Value:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="value"
                  {...register("value", { required: true })}
                />
                {errors.value && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
            </>
          )}
          {inpType === "color" && (
            <div className="mb-3">
              <label htmlFor="value" className="form-label">
                Value:
              </label>
              <input
                type="text"
                className="form-control"
                id="value"
                {...register("value", { required: true })}
              />
              {errors.value && (
                <span className="text-danger">This field is required</span>
              )}
              {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
            </div>
          )}
          {inpType === "hidden" && (
            <div className="mb-3">
              <label htmlFor="value" className="form-label">
                Value:
              </label>
              <input
                type="text"
                className="form-control"
                id="value"
                {...register("value", { required: true })}
              />
              {errors.value && (
                <span className="text-danger">This field is required</span>
              )}
              {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
            </div>
          )}
          {inpType === "image" && (
            <>
              <div className="mb-3">
                <label htmlFor="src" className="form-label">
                  Src:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="src"
                  {...register("src", { required: true })}
                />
                {errors.src && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="alt" className="form-label">
                  Alt:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="alt"
                  {...register("alt", { required: true })}
                />
                {errors.alt && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
            </>
          )}
          {inpType === "time" && (
            <>
              <div className="mb-3">
                <label htmlFor="min" className="form-label">
                  Min:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="min"
                  placeholder="09:00"
                  {...register("min", { required: true })}
                />
                {errors.min && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="max" className="form-label">
                  Max:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="max"
                  placeholder="18:00"
                  {...register("max", { required: true })}
                />
                {errors.max && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
            </>
          )}
          {inpType === "date" && (
            <>
              <div className="mb-3">
                <label htmlFor="min" className="form-label">
                  Min:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="min"
                  placeholder="2017-01-01"
                  {...register("min", { required: true })}
                />
                {errors.min && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="max" className="form-label">
                  Max:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="max"
                  placeholder="2025-12-31"
                  {...register("max", { required: true })}
                />
                {errors.max && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="value" className="form-label">
                  Value:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="value"
                  placeholder="2022-12-25"
                  {...register("value", { required: true })}
                />
                {errors.value && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
            </>
          )}
          {inpType === "datetime-local" && (
            <>
              <div className="mb-3">
                <label htmlFor="min" className="form-label">
                  Min:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="min"
                  placeholder="2017-01-01T00:00"
                  {...register("min", { required: true })}
                />
                {errors.min && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="max" className="form-label">
                  Max:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="max"
                  placeholder="2025-12-31T00:00"
                  {...register("max", { required: true })}
                />
                {errors.max && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="value" className="form-label">
                  Value:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="value"
                  placeholder="2022-12-25T19:30"
                  {...register("value", { required: true })}
                />
                {errors.value && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
            </>
          )}
          {inpType === "week" && (
            <>
              <div className="mb-3">
                <label htmlFor="min" className="form-label">
                  Min:
                </label>
                <input
                  type="week"
                  className="form-control"
                  id="min"
                  min="2017-W01"
                  max="2024-W52"
                  placeholder="2017-W01"
                  {...register("min", { required: true })}
                />
                {errors.min && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="max" className="form-label">
                  Max:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="max"
                  min="2017-W01"
                  max="2024-W52"
                  placeholder="2024-W52"
                  {...register("max", { required: true })}
                />
                {errors.max && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
            </>
          )}
          {inpType === "month" && (
            <>
              <div className="mb-3">
                <label htmlFor="min" className="form-label">
                  Min:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="min"
                  min="2017-01"
                  max="2025-12"
                  placeholder="2017-01"
                  {...register("min", { required: true })}
                />
                {errors.min && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
              <div className="mb-3">
                <label htmlFor="max" className="form-label">
                  Max:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="max"
                  min="2017-01"
                  max="2025-12"
                  placeholder="2025-12"
                  {...register("max", { required: true })}
                />
                {errors.max && (
                  <span className="text-danger">This field is required</span>
                )}
                {/* {errors.name.type === "minLength" && (
                      <span className="text-danger">
                        Min length must be at least 2 characters
                      </span>
                    )} */}
              </div>
            </>
          )}
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
