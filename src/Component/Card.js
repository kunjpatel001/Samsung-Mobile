import React from "react";
function Card() {
    return (
        <>

            <h1 style={{ textAlign: "center", fontSize: "50px", }}><b> Recommended Products</b></h1><br />
            <div className="container">
                <div className="row">
                    <div className="col-sm-4" >

                        <div className="card shadow p-3 mb-5 bg-white  rounded" style={{ textAlign: "center" }}>
                            <img style={{ marginLeft: "auto", marginRight: "auto" }} src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911bzkbins/gallery/in-galaxy-s23-s911-sm-s911bzkbins-thumb-535265914?$216_216_PNG$" height={180} width={180} alt="" />
                            <h5><b>Galaxy S23</b></h5>
                            <p style={{ fontSize: "12px" }}><b>Colour :</b> Pantomblack</p>
                            <h5>₹74999.00</h5>
                            <span >MRP (Inclusive of all taxes) </span>
                            <del>₹ 19999.00</del><span>Save ₹4009.00</span>

                            <span >From ₹629.84/mo for 24 mos at 15% <br /> Interest or </span>
                            <a href="">EMI Calculator</a>
                            <br />
                            <button className="btn btn-dark my-2 my-sm-0 " style={{ borderRadius: "20px", fontSize: "20px" }} >Buy now</button>

                        </div>


                    </div>

                    {/* 2 */}


                    <div className="col-sm-4" >

                        <div className="card shadow p-3 mb-5 bg-white  rounded" style={{ textAlign: "center" }}>
                            <img style={{ marginLeft: "auto", marginRight: "auto" }} src="https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r945-469954-sm-r945fzsains-thumb-537406815?$216_216_PNG$" height={180} width={180} alt="" />
                            <h5><b>Galaxy Watch6</b></h5>
                            <p style={{ fontSize: "12px" }}><b>Colour :</b> Silver</p>
                            <h5>₹36999.00</h5>
                            <span >MRP (Inclusive of all taxes) </span>
                            <del>₹ 41999.00</del><span>Save ₹5000.00</span>

                            <span >From ₹1233.55/mo for 24 mos at 15% <br /> Interest or </span>
                            <a href="">EMI Calculator</a>
                            <br />
                            <button className="btn btn-dark my-2 my-sm-0 " style={{ borderRadius: "20px", fontSize: "20px" }} >Buy now</button>

                        </div>


                    </div>

                        {/* 3 */}

                    <div className="col-sm-4" >

                        <div className="card shadow p-3 mb-5 bg-white  rounded" style={{ textAlign: "center" }}>
                            <img style={{ marginLeft: "auto", marginRight: "auto" }} src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-x710nzaainu/gallery/in-galaxy-tab-s9-wifi-x710-sm-x710nzaainu-537885425?$650_519_PNG$" height={180} width={220} alt="" />
                            <h5><b>Galaxy Tab S9(WI-FI)</b></h5>
                            <p style={{ fontSize: "12px" }}><b>Colour :</b> Pantomblack</p>
                            <h5>₹119999.00</h5>
                            <span >MRP (Inclusive of all taxes) </span>
                            <del>₹ 139999.00</del><span>Save ₹14000.00</span>

                            <span >From ₹4663.11/mo for 24 mos at 15% <br /> Interest or </span>
                            <a href="">EMI Calculator</a>
                            <br />
                            <button className="btn btn-dark my-2 my-sm-0 " style={{ borderRadius: "20px", fontSize: "20px" }} >Buy now</button>

                        </div>


                    </div>

                </div>
            </div>
        </>

    )

}
export default Card