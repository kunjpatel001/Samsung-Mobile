import React from "react";

function Carousel() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://images.samsung.com/is/image/samsung/assets/in/mobile-new/lime1440x640.jpg?$1440_N_JPG$" alt="First slide" />
                    <div class="carousel-caption d-none d-md-block" style={{ color: "black", marginLeft: "500px", marginBottom: "100px" }}>
                        <h1>Galaxy S23 <br /> Epic in Lime </h1> <br />
                        <p> 
                            <b> Your couch, your demo!</b> <br />
                            Experience the latest Galaxy device with a fun video demo</p><br /><br />

                        <button className="btn btn-outline-success my-2 my-sm-0 " >Buy now</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/Watch_PCD_mainKV_pc_1440x640.jpg?imwidth=1536" alt="Second slide" />
                    <div class="carousel-caption d-none d-md-block" style={{ color: "black", marginLeft: "500px", marginBottom: "100px" }}>
                    <h1>Galaxy Watch6 Series</h1>
                    <p> Start your everyday wellness journey </p> <br /><br />
                    <button type="button" class="btn btn-outline-dark">Buy now</button>


                    </div>

                    <h1></h1>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/Galaxy_Tab_S9_Series_PCD_Main_KV_01_Family_1440x640_PC.jpg?imwidth=1536" alt="Third slide" />
                    <div class="carousel-caption d-none d-md-block" style={{ color: "black", marginLeft: "500px", marginBottom: "100px" }}>
                    <h1>Galaxy Tab S9 Series</h1>
                    <p>Experinece the new standard of premium tablets.</p> <br /> <br />
                    <button type="button" class="btn btn-outline-dark">Buy now</button>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )

}
export default Carousel