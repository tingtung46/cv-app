export default function ResumeUI({ resumeData }) {
  return (
    <>
      <main>
        <section className="ui general">
          <h1>
            {resumeData.generalInfo.firstName +
              " " +
              resumeData.generalInfo.lastName}
          </h1>
          <p>
            {resumeData.generalInfo.email} |{" "}
            {resumeData.generalInfo.phoneNumber} |{" "}
            {resumeData.generalInfo.location}
          </p>
        </section>
      </main>
    </>
  );
}
