import spinner from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className="mt-20 w-100">
      <img
        src={spinner}
        alt="Loading..."
        width={180}
        className="mx-auto text-center"
      />
    </div>
  );
}

export default Spinner;
