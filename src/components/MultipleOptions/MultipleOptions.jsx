import { useFieldArray } from "react-hook-form";

const MultipleOptions = ({ control }) => {
  const { append, fields, remove } = useFieldArray({
    control,
    name: "options",
  });

  fields.map((item, index) => (
    <div className="form-row form-group" key={index}>
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your First name"
          {...register(`options.${index}.option`)}
          defaultValue={item.option}
        />
      </div>
      <div className="col">
        <button className="btn btn-danger" onClick={() => remove(index)}>
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        append({
          firstName: "",
          lastName: "",
          emailAddress: "",
          password: "",
        })
      }
    >
      Add User
    </button>
  );
};

export default MultipleOptions;
