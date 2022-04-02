import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import SelectBranch from "./SelectBranch";
import SelectRole from "./SelectRole";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";


const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    SelectRole: Yup.string().required("required"),
    SelectBranch: Yup.string().required("required"),
  });

  const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

  const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

  const style = {
    width: 600,
    bgcolor: "background.paper",
    p: 2,
    px: 4,
    pb: 3,
  };
  const options = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Officer", label: "Officer" },
  ];

  const optionsBranch = [
    { value: "Sydney", label: "Sydney" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Melbourne", label: "Melbourne" },
    { value: "Tasmania", label: "Tasmania" },
    { value: "Lahore", label: "Lahore" },
    { value: "India", label: "India" },
    { value: "Multan", label: "Multan" },
    { value: "Srilanka", label: "Srilanka" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Faiselabad", label: "Faiselabad" },
  ];

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      SelectRole: "",
      SelectBranch: "",
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      alert("a");
      //   history.push("/dashboard");
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <button className="btn btn-success" onClick={handleOpen}> Add New</button>


      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
            <Box
              sx={style}
              style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
            >
              <div className="row pt-3">
                <div className="col-md-12">
                  <div class="row g-3">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                        aria-label="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        aria-label="First name"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                     {errors.email && touched.email && <div>{errors.email}</div>}
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-md-12">
                      <div class="row g-3">
                        <div class="col">
                          <SelectRole
                            className="input"
                            onChange={(value) =>
                              formik.setFieldValue("SelectRole", value.value)
                            }
                            value={formik.values.SelectRole}
                            options={options}
                          />
                        </div>
                        <div class="col">
                          <SelectBranch
                            className="input"
                            onChange={(value) =>
                              formik.setFieldValue(
                                "SelectBranch",
                                value.value
                              )
                            }
                            value={formik.values.SelectBranch}
                            options={optionsBranch}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-md-12">
                      <div class="row g-3">
                        <div class="col">
                          <input
                            type="date"
                            class="form-control"
                            placeholder="Date"

                          />
                        </div>
                        <div class="col">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="password"
                            aria-label="First name"

                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* {formik.errors.SelectRole ? (
            <div className="error">{formik.errors.SelectRole}</div>
          ) : null} */}
                  <button type="submit" className="btn btn-primary mt-5">
                    Create User
                  </button>
                </div>
              </div>
            </Box>
          </StyledModal>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default Datatable;
