import { Fragment } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

export default function ExperienceInput({ itemID, handleChange, resumeData }) {
  const handleResponsibility = () => {
    const newID = uuidv4();

    handleChange({
      ...resumeData,
      [itemID]: {
        ...resumeData[itemID],
        responsibility: [...resumeData[itemID]["responsibility"], [newID]],
        [newID]: "",
      },
    });
  };

  return (
    <Fragment>
      <div className="experience-input">
        <div className="input">
          <label htmlFor="company-name">Company Name</label>
          <input
            type="text"
            name="company-name"
            id="company-name"
            onChange={(e) => {
              handleChange({
                ...resumeData,
                [itemID]: {
                  ...resumeData[itemID],
                  companyName: e.target.value,
                },
              });
            }}
            value={resumeData[itemID]["companyName"]}
          />
        </div>

        <div className="input">
          <label htmlFor="company-location">Location</label>
          <input
            type="text"
            name="company-location"
            id="company-location"
            onChange={(e) => {
              handleChange({
                ...resumeData,
                [itemID]: {
                  ...resumeData[itemID],
                  location: e.target.value,
                },
              });
            }}
            value={resumeData[itemID]["location"]}
          />
        </div>

        <div className="input">
          <label htmlFor="position-title">Position Title</label>
          <input
            type="text"
            name="position-title"
            id="position-title"
            onChange={(e) => {
              handleChange({
                ...resumeData,
                [itemID]: {
                  ...resumeData[itemID],
                  positionTitle: e.target.value,
                },
              });
            }}
            value={resumeData[itemID]["positionTitle"]}
          />
        </div>

        <div className="company-date">
          <div className="input">
            <label htmlFor="company-start-date">From</label>
            <input
              type="text"
              name="company-start-date"
              id="company-start-date"
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
            <label htmlFor="company-end-date">To</label>
            <input
              type="text"
              name="company-end-date"
              id="company-end-date"
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

        <div className="input">
          <label htmlFor="responsibility">Responsibility</label>
          <ul>
            {resumeData[itemID]["responsibility"]["map"]((item) => {
              return (
                <>
                  <li key={item}>
                    <input
                      type="text"
                      onChange={(e) => [
                        handleChange({
                          ...resumeData,
                          [itemID]: {
                            ...resumeData[itemID],
                            [item]: e.target.value,
                          },
                        }),
                      ]}
                      value={resumeData[itemID][item]}
                    />
                  </li>
                </>
              );
            })}
          </ul>
          <Button
            type="button"
            onClick={handleResponsibility}
            className="responsibility-btn"
            text="Add Responsibility"
          />
        </div>
      </div>
    </Fragment>
  );
}
