import React from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
const customerList = () => {
  return (
    <div className="List of Brands">
      <div className="container-fluid">
        <h3 className="title d-flex justify-content-start mt-5 mb-5">
          List of Customer’s
        </h3>
      </div>
      <div className="table-responsive" id="no-more-tables">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Serial</th>
              <th>Customer’s Name</th>
              <th>Email Address</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="Serial">
                <div className="ms-3">
                  <h6>1</h6>
                </div>
              </td>
              <td data-title="Customer’s Name">
                <p className="fw-bold mb-1">Romil Meghani</p>
              </td>
              <td data-title="Email Address">
                <p className="fw-bold mb-1">romilmeghani@gmail.com</p>
              </td>
              <td data-title="status">
                <FormControlLabel
                  control={<Android12Switch defaultChecked />}
                  label=""
                />
              </td>
            </tr>
            <tr>
              <td data-title="Serial">
                <div className="ms-3">
                  <h6>2</h6>
                </div>
              </td>
              <td data-title="Customer’s Name">
                <p className="fw-bold mb-1">Romil Meghani</p>
              </td>
              <td data-title="Email Address">
                <p className="fw-bold mb-1">romilmeghani@gmail.com</p>
              </td>
              <td data-title="status">
                <FormControlLabel
                  control={<Android12Switch defaultChecked />}
                  label=""
                />
              </td>
            </tr>
            <tr>
              <td data-title="Serial">
                <div className="ms-3">
                  <h6>3</h6>
                </div>
              </td>
              <td data-title=" Name">
                <p className="fw-bold mb-1">Romil Meghani</p>
              </td>
              <td data-title="Customer’s Name">
                <p className="fw-bold mb-1">romilmeghani@gmail.com</p>
              </td>
              <td data-title="status">
                <FormControlLabel
                  control={<Android12Switch defaultChecked />}
                  label=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default customerList;