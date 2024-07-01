import { useFormik } from "formik";
import TextInputField from "../molecules/TextInputField";
import * as Yup from "yup";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

interface Props {}

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("nhập email"),
  password: Yup.string().required("nhập mật khẩu"),
});

export default function FormLogin({}: Props) {
  const handleSubmit = (values: FormValues) => {
    console.log(values.email, values.password);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Label id="loginLabel" label="Login"></Label>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          formik.handleSubmit(e);
          console.log("Form values on submit:", formik.values);
        }}
      >
        <TextInputField
          id="email"
          label="Email/Username"
          name="email"
          placeholder="nhập email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && typeof formik.errors.email === "string" ? formik.errors.email : undefined}
        />
        <TextInputField
          id="password"
          label="Password"
          name="password"
          value={formik.values.password}
          placeholder="nhập mật khẩu"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && typeof formik.errors.password === "string" ? formik.errors.password : undefined}
          autoComplete="off"
        />
        <Button name="Submit" type="submit" />
      </form>
    </div>
  );
}
