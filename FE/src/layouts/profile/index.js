import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Overview page components
import "./userProfile.css";
import MDInput from "components/MDInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import MDButton from "components/MDButton";
import { updateProfile } from "actions/userActions";

function Overview() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();
  const [pic, setPic] = useState();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          toast.success("Image Uploaded");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  useState(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
    }
  });

  const submitHandler = (e) => {
    console.log("test");
    e.preventDefault();
    dispatch(
      updateProfile({
        name,
        email,
        pic,
      })
    );
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <MDBox pt={3} pb={1} px={3}>
        <MDBox component="form" role="form">
          <MDBox>
            <div className="avatar-upload">
              <div className="avatar-edit">
                <input
                  type="file"
                  id="imageUpload"
                  onChange={(e) => postDetails(e.target.files[0])}
                  accept=".png, .jpg, .jpeg"
                />
                <label htmlFor="imageUpload"></label>
              </div>
              <div className="avatar-preview">
                <div
                  id="imagePreview"
                  style={{ backgroundImage: `url(${pic})` }}
                ></div>
              </div>
            </div>
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              label="Name"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Confirm Password"
              fullWidth
            />
          </MDBox>
        </MDBox>
        <MDButton
          variant="gradient"
          color="info"
          fullWidth
          onClick={submitHandler}
        >
          Update Profile
        </MDButton>
      </MDBox>
    </DashboardLayout>
  );
}

export default Overview;
