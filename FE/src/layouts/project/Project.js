import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDInput from 'components/MDInput'
import Footer from 'examples/Footer'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Header from 'layouts/profile/components/Header'
import React from 'react'

const Project = () => {
  return (
    <>
        <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
        <MDBox pt={3} pb={1} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Confirm Password" fullWidth />
            </MDBox>
          </MDBox>
          <MDButton
            variant="gradient"
            color="info"
            fullWidth
          >
            Update Profile
          </MDButton>
        </MDBox>
      <Footer />
    </DashboardLayout>
    </>
  )
}

export default Project