import Carousel from "@/component/Carousel";
import Image from "next/image";
import Image1 from "/public/7.png"
import Image2 from "/public/8.png"
import Image3 from "/public/9.png"


export default function Home() {
  return (
    
    <div>
    <Carousel />
  
    <div className="text-center my-4 fs-5 fw-bold"><h1>Service </h1></div>
   <div className="container-fluid" style={{marginTop: 50}}></div>
 <div className="row justify-content-center">


      <div className="col-md-4">
        <div className="card mb-3">
  <Image src= {Image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">ascend to heaven</h5>
        <p className="card-text">At a price of 999 dollars only</p>
        <a href="#" className="btn btn-primary">Pay</a>
      </div>
    </div>
    </div>

      <div className="col-md-4">
        <div className="card mb-3">
      <Image src= {Image2}  className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">noah</h5>
        <p className="card-text">At a price of 599 dollars only</p>
        <a href="#" className="btn btn-primary">Pay</a>
      </div>
    </div>
    </div>

      <div className="col-md-4">
        <div className="card mb-3">
      <Image src= {Image3} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">I have no ememies</h5>
        <p className="card-text">At a price of 299 dollars only</p>
        <a href="#" className="btn btn-primary">Pay</a>
      </div>
      </div>
    </div>
    </div>
  </div>

  );
}