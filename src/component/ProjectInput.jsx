export default function ProjectInput() {
  return (
    <>
      <div className="project-input">
        <div className="input">
          <label htmlFor="project-name">Project Name</label>
          <input type="text" name="project-name" id="project-name" />
        </div>

        <div className="input">
          <label htmlFor="project-tools">Tools</label>
          <input type="text" name="project-tools" id="project-tools" />
        </div>

        <div className="project-date">
          <div className="input">
            <label htmlFor="project-start-date">From</label>
            <input
              type="text"
              name="project-start-date"
              id="project-start-date"
            />
          </div>

          <div className="input">
            <label htmlFor="project-end-date">To</label>
            <input type="text" name="project-end-date" id="project-end-date" />
          </div>
        </div>

        <div className="project-description"></div>
      </div>
    </>
  );
}
