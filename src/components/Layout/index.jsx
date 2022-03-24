const Layout = ({ fields, editInput, deleteInput }) => {
  return (
    <ul className="list-group my-5">
      {fields.length > 0 &&
        fields.map((input, index) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between"
              key={index}
            >
              <span
                style={{
                  fontSize: "18px",
                  paddingTop: "7px",
                  textTransform: "capitalize",
                }}
              >
                {input.name}
              </span>
              <span>
                {/* <button
                  className="mx-3 btn btn-outline-primary"
                  onClick={() => editInput(input.id)}
                >
                  Edit
                </button> */}
                {/* <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteInput(input.id)}
                >
                  Delete
                </button> */}
              </span>
            </li>
          );
        })}
    </ul>
  );
};

export default Layout;
