import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";
import Button from "./Button";

export default function ProjectInput({ itemID, handleChange, resumeData }) {
  const handleDescription = () => {
    const newID = uuidv4();

    handleChange({
      ...resumeData,
      [itemID]: {
        ...resumeData[itemID],
        description: [...resumeData[itemID]["description"], [newID]],
        [newID]: "",
      },
    });
  };

  return (
    <>
      <Fragment>
        <div className="project-input">
          <div className="input">
            <label htmlFor="project-name">Project Name</label>
            <input
              type="text"
              name="project-name"
              id="project-name"
              onChange={(e) => {
                handleChange({
                  ...resumeData,
                  [itemID]: {
                    ...resumeData[itemID],
                    projectName: e.target.value,
                  },
                });
              }}
              value={resumeData[itemID]["projectName"]}
            />
          </div>

          <div className="input">
            <label htmlFor="project-tools">Tools</label>
            <input
              type="text"
              name="project-tools"
              id="project-tools"
              onChange={(e) => {
                handleChange({
                  ...resumeData,
                  [itemID]: {
                    ...resumeData[itemID],
                    tools: e.target.value,
                  },
                });
              }}
              value={resumeData[itemID]["tools"]}
            />
          </div>

          <div className="project-date">
            <div className="input">
              <label htmlFor="project-start-date">From</label>
              <input
                type="text"
                name="project-start-date"
                id="project-start-date"
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
              <label htmlFor="project-end-date">To</label>
              <input
                type="text"
                name="project-end-date"
                id="project-end-date"
                onChange={(e) => {
                  handleChange({
                    ...resumeData,
                    [itemID]: {
                      ...resumeData[itemID],
                      endDate: e.target.value,
                    },
                  });
                }}
                value={resumeData[itemID]["endDate"]}
              />
            </div>
          </div>

          <div className="input">
            <label htmlFor="project-description">Description</label>
            <ul>
              {resumeData[itemID]["description"]["map"]((item) => {
                return (
                  <li key={item}>
                    <input
                      type="text"
                      onChange={(e) => {
                        handleChange({
                          ...resumeData,
                          [itemID]: {
                            ...resumeData[itemID],
                            [item]: e.target.value,
                          },
                        });
                      }}
                      value={resumeData[itemID][item]}
                    />
                  </li>
                );
              })}
            </ul>

            <Button
              type="button"
              onClick={handleDescription}
              className="description-btn"
              text="Add Description"
            />
          </div>
        </div>
      </Fragment>
    </>
  );
}
