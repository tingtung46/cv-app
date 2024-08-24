export default function Button({ type, onClick, className, text }) {
  return (
    <>
      <button type={type} onClick={onClick} className={className}>
        {text}
      </button>
    </>
  );
}
