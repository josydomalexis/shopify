import React from "react";
import { useFormik } from "formik";
import { object, string, number, date, InferType } from "yup";

let loginSchema = object({
  email: string()
    .min(5, "Need a longer email😀")
    .required("Why not fill the email?"),
  password: string()
    .min(8, "Need a longer password😀")
    .max(12, "Too much password")
    .required(),
});

function Login() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    name: { firstName: "Josy" },
    onSubmit: (josy) => {
      console.log("OnSubmit values ", josy);
    },
  });
  console.log(formik);
  return (
    <section className="py-2">
      <div className="container">
        <h1>Login with Formik & Validate with yup</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName">Username</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter email"
            />
            <div className="py-1">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
            />
            <div className="py-1">
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
