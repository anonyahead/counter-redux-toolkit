import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, otherActions } from "../store";

export default function Controls() {
  const inputElement = useRef();
  const dispatch = useDispatch();
  console.log("Controls");

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleReset = () => {
    dispatch(counterActions.reset());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(Number(inputElement.current.value)));
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract(Number(inputElement.current.value)));
  };
  const handlePrivacy = () => {
    console.log("Privacy");
    dispatch(otherActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number..."
          className="number-input"
          ref={inputElement}
        />

        {/* Example of another properly commented-out JSX block */}

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>

        <button type="button" className="btn btn-warning" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}
