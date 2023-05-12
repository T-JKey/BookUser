import React from "react";
import Navbar from "../Navbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function BuyHistory() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Model = () => {
    return (
      <>
        <div>
          <Button onClick={handleOpen}>Open detail</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Ngày thuê</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Số lượng</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Tổng tiền</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Chi tiết</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="align-middle">
                        <strong>20/05/2023</strong>
                      </td>
                      <td className="align-middle">
                        <strong>6</strong>
                      </td>
                      <td className="align-middle">
                        <strong>78.000 </strong>
                      </td>
                      <td className="align-middle">
                        <button onClick={handleOpen}>Chi Tiết sản phẩm</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <strong>20/05/2023</strong>
                      </td>
                      <td className="align-middle">
                        <strong>6</strong>
                      </td>
                      <td className="align-middle">
                        <strong>78.000 </strong>
                      </td>
                      <td className="align-middle">
                        <a href="#" className="text-dark">
                          chi tiết sản phẩm
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <strong>20/05/2023</strong>
                      </td>
                      <td className="align-middle">
                        <strong>6</strong>
                      </td>
                      <td className="align-middle">
                        <strong>78.000 </strong>
                      </td>
                      <td className="align-middle">
                        <a href="#" className="text-dark">
                          chi tiết sản phẩm
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <strong>20/05/2023</strong>
                      </td>
                      <td className="align-middle">
                        <strong>6</strong>
                      </td>
                      <td className="align-middle">
                        <strong>78.000 </strong>
                      </td>
                      <td className="align-middle">
                        <a href="#" className="text-dark">
                          chi tiết sản phẩm
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Box>
          </Modal>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <Model />
      <div>
        <div className="mt-5 pt-5 container">
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 bg-white rounded shadow-sm mb-5">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">
                              Ngày thuê
                            </div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Số lượng</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Tổng tiền</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Chi tiết</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="align-middle">
                            <strong>20/05/2023</strong>
                          </td>
                          <td className="align-middle">
                            <strong>6</strong>
                          </td>
                          <td className="align-middle">
                            <strong>78.000 </strong>
                          </td>
                          <td className="align-middle">
                            <button onClick={handleOpen}>
                              Chi Tiết sản phẩm
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle">
                            <strong>20/05/2023</strong>
                          </td>
                          <td className="align-middle">
                            <strong>6</strong>
                          </td>
                          <td className="align-middle">
                            <strong>78.000 </strong>
                          </td>
                          <td className="align-middle">
                            <a href="#" className="text-dark">
                              chi tiết sản phẩm
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle">
                            <strong>20/05/2023</strong>
                          </td>
                          <td className="align-middle">
                            <strong>6</strong>
                          </td>
                          <td className="align-middle">
                            <strong>78.000 </strong>
                          </td>
                          <td className="align-middle">
                            <a href="#" className="text-dark">
                              chi tiết sản phẩm
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle">
                            <strong>20/05/2023</strong>
                          </td>
                          <td className="align-middle">
                            <strong>6</strong>
                          </td>
                          <td className="align-middle">
                            <strong>78.000 </strong>
                          </td>
                          <td className="align-middle">
                            <a href="#" className="text-dark">
                              chi tiết sản phẩm
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyHistory;
