import React from "react";
function Card1(){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
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
                    <div className="col-sm-4">
                    <img style={{ marginLeft: "auto", marginRight: "auto" }} src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911bzkbins/gallery/in-galaxy-s23-s911-sm-s911bzkbins-thumb-535265914?$216_216_PNG$" height={180} width={180} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card1;