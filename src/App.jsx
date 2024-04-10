import React from "react";
import Header from "./header";
import UserCards from "./UserCards";
import Footer from "./footer";

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <div className="container">
        <Header />
        <UserCards
          imageUrl="https://www.investopedia.com/thmb/h8ARSSoEZonsvMjDEBbcTfYtGrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1215628293-c32a14bc41c34aa9adee9e41f6c7fb68.jpg"
          title="Sumit"
          email="example@example.com"
          phone="123-456-7890"
        />
        <UserCards
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GJrawhN4-9EHZvOHVzuTjPEEvBzeiG9L57APawp_ww&s"
          title="Deejesh"
          email="example@example.com"
          phone="123-456-7890"
        />
        <UserCards
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bpGmtDvE8npo-2U6b0tVYPSVizSsjKEBbA&usqp=CAU"
          title="Rakesh"
          email="example@example.com"
          phone="123-456-7890"
        />
        <UserCards
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8aTq3JgAKohUEJbCYnKNeEj1Vb9RKUv0kiQ&usqp=CAU"
          title="Bhargav"
          email="example@example.com"
          phone="123-456-7890"
        />
        <UserCards
          imageUrl="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          title="Rinkal"
          email="example@example.com"
          phone="123-456-7890"
        />
        <Footer />
      </div>
    </div>
    );
  }
}

export default App;