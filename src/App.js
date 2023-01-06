import React from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { BsFillCalendar2PlusFill } from "react-icons/bs";
import "./index.css"

const App = () =>{
  return (
    <>
    <h1 className="text-center text-success m-5">Bootstrap Cards</h1>
    <div className="row">
       <div className="col-md-3">
          <div className="card">
          <img src="../images/img1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Flower 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Read More ....</a>
          </div>
        </div>
       </div>

       
       <div className="col-md-3">
          <div className="card">
          <img src="../images/img2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Flower 2</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Read More ....</a>
          </div>
        </div>
       </div>

       
       <div className="col-md-3">
          <div className="card">
          <img src="../images/img3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Flower 3</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Read More ....</a>
          </div>
        </div>
       </div>

       
       <div className="col-md-3">
          <div className="card">
          <img src="../images/img4.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Flower 4</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Read More ....</a>
          </div>
        </div>
       </div>
    </div>

    <i className="fas fa-address-card icon"></i>
    <AddAPhotoIcon className="icon" />
    <BsFillCalendar2PlusFill className="icon" />
    </>
  );
};

export default App;