import Carousel from "@/component/Carousel";
import Image from "next/image";
import Image1 from "/public/4.png"
import Image2 from "/public/5.png"
import Image3 from "/public/6.png"


export default function Home() {
  return (
    
    <div>
    <Carousel />
  
    <div className="text-center my-4 fs-5 fw-bold"><h1>About Jesus </h1></div>
   <div className="container-fluid" style={{marginTop: 50}}></div>
 <div className="row justify-content-center">


      <div className="col-md-4">
        <div className="card mb-3">
  <Image src= {Image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Practice kung fu</h5>
        <p className="card-text">A New Media and comedy trope in which Jesus (or any other similar Messianic Archetype or Crystal Dragon Jesus figure) is depicted doing very, very awesome deeds that somehow were never recorded in the Bible. May involve Jesus being a badass, or just generally doing something really cool. Has a certain degree of Truth in Television, if you believe in the Bible.</p>
        <a href="#" className="btn btn-primary">more</a>
      </div>
    </div>
    </div>

      <div className="col-md-4">
        <div className="card mb-3">
      <Image src= {Image2}  className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">kung fu</h5>
        <p className="card-text">wushu are multiple fighting styles that have developed over the centuries in Greater China. These fighting styles are often classified according to common traits, identified as "families" of martial arts. Examples of such traits include Shaolinquan.</p>
        <a href="#" className="btn btn-primary">more</a>
      </div>
    </div>
    </div>

      <div className="col-md-4">
        <div className="card mb-3">
      <Image src= {Image3} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Jesus</h5>
        <p className="card-text">Jesus also referred to as Jesus Christ Jesus of Nazareth, and many other names and titles, was a first-century Jewish preacher and religious leader. He is the central figure of Christianity, the world's largest religion. Most Christians believe Jesus to be the incarnation of God the Son and the awaited messiah, the Christ that is prophesied in the Hebrew Bible</p>
        <a href="#" className="btn btn-primary">more</a>
      </div>
      </div>
    </div>
    </div>
  </div>

  );
}
