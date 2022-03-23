import JSONData from "./../jsonData.json";

/* const data = {
  form: {
    sections: [
      {
        order: 1,
        section_title: "Basic Information",
        fields: [
          {
            name: "name",
            label: "Name",
            required: true,
            data_type: "Integer",
            html_element: "textbox",
          },
          {
            name: "email",
            label: "Email",
            hidden: false,
            required: true,
            data_type: "String",
            html_element: "email",
          },
          {
            name: "phone",
            label: "Phone",
            required: true,
            data_type: "number",
            html_element: "textbox",
          },
          {
            name: "age",
            label: "Age",
            hidden: false,
            options: [],
            required: true,
            data_type: "number",
            html_element: "number",
          },
          {
            name: "photo",
            label: "Photo",
            hidden: false,
            options: [],
            required: true,
            data_type: "Image",
            html_element: "file",
          },
        ],
      },
    ],
  },
}; */

const JsonForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form className="form-outer" onSubmit={onSubmit}>
        {JSONData.form.sections.map((formData, i) => {
          console.log("formData", formData);
          return (
            <div key={i}>
              <h1>{formData.section_title}</h1>
              {formData.fields.map((inputData, i) => {
                console.log("inputData", inputData);
                return (
                  <div key={i}>
                    <label>{inputData.label}</label>
                    <input
                      type={inputData.html_element}
                      name={inputData.name}
                      required={inputData.required}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JsonForm;
