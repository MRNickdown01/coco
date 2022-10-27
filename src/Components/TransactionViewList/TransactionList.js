import React from "react";
import { Dropdown } from "react-bootstrap";
function TransactionList() {
  return (
    <div className="List of Transaction">
      <div className="container-fluid">
        <h3 className="title d-flex justify-content-start mt-5 mb-5">
          List of Transaction
        </h3>
      </div>
      <div className="table-responsive" id="no-more-tables">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Last Updated</th>
              <th scope="col">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      background: "transparent",
                      boxShadow: "none",
                      color: "#1c5a40",
                      textTransform: "capitalize",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    Status
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>
              <th scope="col">Name</th>
              <th scope="col">Coupon code</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="Date">22/08/2022</td>
              <td data-title="Last Updated">25/08/2022</td>
              <td data-title="Status">Code generated</td>
              <td data-title="Name">Romil Meghani</td>
              <td data-title="Coupon Code">BOGO</td>
              <td data-title="Amount">250/-</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td data-title="Date">22/08/2022</td>
              <td data-title="Last Updated">25/08/2022</td>
              <td data-title="Status">Code generated</td>
              <td data-title="Name">Romil Meghani</td>
              <td data-title="Coupon Code">BOGO</td>
              <td data-title="Amount">250/-</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td data-title="Date">22/08/2022</td>
              <td data-title="Last Updated">25/08/2022</td>
              <td data-title="Status">Code generated</td>
              <td data-title="Name">Romil Meghani</td>
              <td data-title="Coupon Code">BOGO</td>
              <td data-title="Amount">250/-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionList;