import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";

const Project = () => {
  const [pic, setPic] = useState();
  const [picMessage, setPicMessage] = useState();

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
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />

        <MDBox
          mx={2}
          mt={3}
          py={3}
          px={2}
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
        >
          <MDTypography variant="h6" color="white">
            Upload Project
          </MDTypography>
        </MDBox>
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
        <MDBox mb={2} />
        <MDBox pt={3} pb={1} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Name" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Type" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Status" fullWidth />
            </MDBox>
          </MDBox>
          <MDButton variant="gradient" color="info" fullWidth>
            Upload Project
          </MDButton>
        </MDBox>
      </DashboardLayout>
    </>
  );
};

export default Project;
