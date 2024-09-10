import Section from "./Section";
import Button from "./Button";

export default function GeneralInfoForm({ generalInfo, setGeneralInfo }) {
  const handleFirstName = (e) => {
    setGeneralInfo({ ...generalInfo, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setGeneralInfo({ ...generalInfo, lastName: e.target.value });
  };

  const handleEmail = (e) => {
    setGeneralInfo({ ...generalInfo, email: e.target.value });
  };

  const handlePhoneNumber = (e) => {
    setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value });
  };

  const handleLocation = (e) => {
    setGeneralInfo({ ...generalInfo, location: e.target.value });
  };

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
            <input
              type="email"
              name="email-address"
              id="email-address"
              onChange={handleEmail}
            />
          </div>

          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              onChange={handlePhoneNumber}
            />
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={handleLocation}
            />
          </div>

          <Button
            type="submit"
            onClick={handleNext}
            className="next-btn"
            text="Next"
          ></Button>
        </form>
      </>
    </Section>
  );
}
