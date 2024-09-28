import { Fragment } from "react";

export default function EducationInput({ itemID, handleChange, resumeData }) {
  return (
    <Fragment>
      <div className="education-input">
        <h3>School {resumeData[itemID]["schoolIndex"]}</h3>
        <div className="input">
          <label htmlFor="school-name">School Name</label>
          <input
            type="text"
            name="school-name"
            id="school-name"
            onChange={(e) => {
              handleChange({
                ...resumeData,
                [itemID]: { ...resumeData[itemID], schoolName: e.target.value },
              });
            }}
            value={resumeData[itemID]["schoolName"]}
          />
        </div>

        <div className="input">
          <label htmlFor="school-location">School Location</label>
          <input
            type="text"
            name="school-location"
            id="school-location"
            onChange={(e) => {
              handleChange({
                ...resumeData,
                [itemID]: {
                  ...resumeData[itemID],
                  schoolLocation: e.target.value,
                },
              });
            }}
            value={resumeData[itemID]["schoolLocation"]}
          />
        </div>

        <div className="input">
          <label htmlFor="major">Major</label>
          <input
            type="text"
            name="major"
            id="major"
            onChange={(e) => {
              handleChange({
                ...resumeData,
                [itemID]: { ...resumeData[itemID], major: e.target.value },
              });
            }}
            value={resumeData[itemID]["major"]}
          />
        </div>

        <div className="school-date">
          <div className="input">
            <label htmlFor="school-start-date">From</label>
            <input
              type="text"
              name="school-start-date"
              id="school-start-date"
              onChange={(e) => {
                handleChange({
                  ...resumeData,
                  [itemID]: {
                    ...resumeData[itemID],
                    startDate: e.target.value,
                  },
                });
              }}
              value={resumeData[itemID]["startDate"]}
            />
          </div>

          <div className="input">
            <label htmlFor="school-end-date">To</label>
            <input
              type="text"
              name="school-end-date"
              id="school-end-date"
              onChange={(e) => {
                handleChange({
                  ...resumeData,
                  [itemID]: { ...resumeData[itemID], endDate: e.target.value },
                });
              }}
              value={resumeData[itemID]["endDate"]}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
