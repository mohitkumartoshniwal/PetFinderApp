import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  //never use hooks in conditional logic like if , for,etc.
  //Hook below
  const [location, setLocation] = useState("Seattle, WA");

  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  //async await
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  //made custom hook for below hooks
  // const [animal, setanimal] = useState("dog");
  // const [breed, setbreed] = useState("");
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(
      ({ breeds: apiBreeds }) => {
        // const breedStrings=breeds.map((bredObj)=>bredObj.name);
        //or
        const breedStrings = apiBreeds.map(({ name }) => name);
        setBreeds(breedStrings);
      },
      (e) => console.log(e)
    );
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>

        {/* <label htmlFor="animal">
          location
          <select
            id="animal"
            value={animal}
            onChange={(event) => setanimal(event.target.value)}
            onBlur={(event) => setanimal(event.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              //key should be unique, used for performance since no creation and destroying is done only reordering
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        
        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={(event) => setbreed(event.target.value)}
            onBlur={(event) => setbreed(event.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map((breedString) => (
              //key should be unique, used for performance since no creation and destroying is done only reordering
              <option key={breedString} value={breedString}>
                {breedString}
              </option>
            ))}
          </select>
          </label>
         */}

        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
