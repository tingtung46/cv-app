import Section from "./Section";

export default function GeneralInfoForm({ resumeData, setResumeData }) {
  const handleFirstName = (e) => {
    setResumeData({
      ...resumeData,
      generalInfo: { ...[resumeData.generalInfo], firstName: e.target.value },
    });
  };

  const handleLastName = (e) => {
    setResumeData({
      ...resumeData,
      generalInfo: { ...[resumeData.generalInfo], lastName: e.target.value },
    });
  };

  const handleEmail = (e) => {
    setResumeData({
      ...resumeData,
      generalInfo: { ...[resumeData.generalInfo], email: e.target.value },
    });
  };

  const handlePhoneNumber = (e) => {
    setResumeData({
      ...resumeData,
      generalInfo: { ...[resumeData.generalInfo], phoneNumber: e.target.value },
    });
  };

  const handleLocation = (e) => {
    setResumeData({
      ...resumeData,
      generalInfo: { ...[resumeData.generalInfo], location: e.target.value },
    });
  };

  return (
    <Section title="General Information">
      <>
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
      </>
    </Section>
  );
}
