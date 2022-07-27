import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

const Project = () => {
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
