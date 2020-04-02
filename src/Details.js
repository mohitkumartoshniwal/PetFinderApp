import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import { navigate } from "@reach/router";
import Modal from "./Modal";

// const Details = () => {
//   return <h1>hi!</h1>;
// };

class Details extends React.Component {
  state = { loading: true, showModal: false }; //if babel config done otherwis below code
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       loading: true,
  //     };
  //   }

  //below runs only once when the component renders
  componentDidMount() {
    //  throw new Error("lol");
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);
  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      media,
      name,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              <button
                style={{ backgroundColor: themeHook[0] }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
            {
              //or}
              // {([theme])=>(
              //   <button style={{ backgroundColor: theme}}>
              //     Adopt {name}
              //   </button>
              // )}
            }
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No, I am a monster</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
export default function DetailsWithErrorBoundary(props) {
  // <Details id={props.id} similarly for other varaibles />
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
