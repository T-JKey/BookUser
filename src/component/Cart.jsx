
import React from 'react'

const Cart = () => {
  return (
    <>
    <div className="shopping-cart">
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
                                                        <div className="p-2 px-3 text-uppercase">Sản Phẩm</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Đơn Giá</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Số Lượng</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Xóa</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="p-2">
                                                            <img src="${o.image}" alt="" width="70" className="img-fluid rounded shadow-sm"/>
                                                            <div className="ml-3 d-inline-block align-middle">
                                                                <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block">$222</a></h5><span className="text-muted font-weight-normal font-italic"></span>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-middle"><strong>$22</strong></td>
                                                    <td className="align-middle">
                                                        <a href="#"><button className="btnSub">-</button></a> 
                                                        <strong>$ </strong>
                                                        <a href="#"><button className="btnAdd">+</button></a>
                                                    </td>
                                                    <td className="align-middle"><a href="#" className="text-dark">
                                                            <button type="button" className="btn btn-danger">Delete</button>
                                                        </a>
                                                    </td>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="row pb-5 p-4 bg-white rounded shadow-sm">
                            <div className="col-lg-6">
                                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Voucher</div>
                                <div className="p-4">
                                    <div className="input-group mb-4 border rounded-pill p-2">
                                        <input type="text" placeholder="Nhập Voucher" aria-describedby="button-addon3" className="form-control border-0" />
                                        <div className="input-group-append border-0">
                                            <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i> Sử dụng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Thành tiền</div>
                                <div className="p-4">
                                    <ul className="list-unstyled mb-4">
                                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tổng tiền hàng</strong><strong>100 $</strong></li>
                                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tiền mặt</strong><strong>100 $</strong></li>
                                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tiền Khách đưa</strong><strong>Free ship</strong></li>
                                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tiền thừa</strong>
                                            <h5 className="font-weight-bold">110 $</h5>
                                        </li>
                                    </ul><a href="buy" className="btn btn-dark rounded-pill py-2 btn-block">Mua hàng</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart