import Section from "./Section";
import Button from "./Button";
import { useState } from "react";

export default function GeneralInfoForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const fullName = firstName + " " + lastName;

  class GeneralResult {
    constructor(fullName) {
      this.fullName = fullName;
    }
  }

  const generalInfoResult = new GeneralResult(fullName);

  const handleNext = (e) => {
    e.preventDefault();
  };

  return (
    <Section title="General Information">
      <>
        <form action="#">
          <div className="full-name">
            <div>
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                onChange={handleFirstName}
              />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                onChange={handleLastName}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email-address">Email</label>
            <input type="email" name="email-address" id="email-address" />
          </div>

          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input type="tel" name="phone-number" id="phone-number" />
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" />
          </div>

          <Button
            type="submit"
            onClick={handleNext}
            className="next-btn"
            text="Next"
          ></Button>
        </form>

        <h1>{generalInfoResult.fullName}</h1>
      </>
    </Section>
  );
}
