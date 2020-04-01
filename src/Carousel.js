import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  static getDerivedStateFromProps({ media }) {
    //converting props to state
    //like media will be converted and returned as photos of the part of the state defined above
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  //use arrow functions while passing functions into children componenets and event handling(like below) to avoid
  //confusion
  //with regards to "this"

  //another way to avoid confusion of "this" is to use
  //this.handleIndexClick=this.handleIndexClick.bind(this) in constructor where there are not publicly defined state
  //like in this js file

  handleIndexClick = (event) => {
    this.setState({
      //+ is used to convert string to number
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
