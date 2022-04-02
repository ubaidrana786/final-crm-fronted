import React from "react";
import * as Yup from "yup";
import SelectCity from "./SelectCity";
import { useFormik, Form, FormikProvider } from "formik";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Card from "@mui/material/Card";

export const ApplicantForms = () => {
  const history = useHistory();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    SelectRole: Yup.string().required("required"),
    SelectBranch: Yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues: {
      SelectCity: "",
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      history.push("/dashboard");
    },
  });

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

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <Card
      sx={{ maxWidth: 745, padding: "20px", margin: "auto", marginTop: "30px" }}
    >
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="row pt-3">
            <div className="col-md-12">
              <div class="row g-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Middle name"
                    aria-label="Last name"
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
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <SelectCity
                    className="input"
                    onChange={(value) =>
                      formik.setFieldValue("SelectBranch", value.value)
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
                  <select className="form-select form-control">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="2">
                      Indeterminate/Unspecified/Intersex
                    </option>
                  </select>
                </div>
                <div class="col">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Date Of Birth"
                    aria-label="First name"
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
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Mobile Number"
                    aria-label="First name"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-md-12">
              <div class="row g-3">
                <div class="col">
                  <select className="form-select form-control">
                    <option value="Laila">Laila</option>
                    <option value="Haris">Haris</option>
                  </select>
                </div>
                <div class="col">
                  <SelectCity
                    className="input"
                    onChange={(value) =>
                      formik.setFieldValue("SelectBranch", value.value)
                    }
                    value={formik.values.SelectBranch}
                    options={optionsBranch}
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-5">
            Save
          </button>
        </Form>
      </FormikProvider>
    </Card>
  );
};
