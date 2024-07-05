import Carousel from "@/component/Carousel";
import Image from "next/image";
import Image1 from "/public/1.png"
import Image2 from "/public/2.png"
import Image3 from "/public/3.png"


export default function Home() {
  return (
    <div>
      <Carousel />
    
      <div className="text-center my-4 fs-5 fw-bold"><h1>Dhamma teachings</h1></div>
     <div className="container-fluid" style={{marginTop: 50}}></div>
   <div className="row justify-content-center">


        <div className="col-md-4">
          <div className="card mb-3">
    <Image src= {Image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Be happy</h5>
          <p className="card-text">with the life that was born</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

        <div className="col-md-4">
          <div className="card mb-3">
        <Image src= {Image2}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Have a brain</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

        <div className="col-md-4">
          <div className="card mb-3">
        <Image src= {Image3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Keep smiling</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
      </div>
    </div>

  );
}
