import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  handleSubtract,
  handleAdd,
  handleReset,
  handleAddFive,
  toggleAuth,
} from "../../store/actions/action";
const Counter = () => {
  const count = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // console.log(count);
  // console.log(isLoggedIn);
  const dispatch = useDispatch();

  let color = "#fff";
  if (count >= 1) {
    color = "yellow";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <section className="counter-sec --flex-center" data-testid="counter1">
      <div className="container counter --card --center-all ">
        <button
          className="--btn --btn-danger"
          onClick={() => dispatch(toggleAuth())}
        >
          {isLoggedIn ? "Log out" : "Log in"}
        </button>

        {!isLoggedIn ? (
          <p>Please Log in</p>
        ) : (
          <>
            <h1 className="--text-light">React Counter App</h1>

            <p
              className="count --my2 --text-md --text-light --fw-bold"
              style={{ color: color }}
            >
              {count}
            </p>

            <div className="buttons">
              <Button
                btnClass={"--btn-danger"}
                onClick={() => dispatch(handleSubtract())}
              >{`- Subtract`}</Button>

              <Button
                btnClass={null}
                onClick={() => dispatch(handleReset())}
              >{`! Reset`}</Button>

              <Button
                btnClass={"--btn-success"}
                onClick={() => dispatch(handleAdd())}
              >{`+ Add`}</Button>

              <Button
                btnClass={"--btn-success"}
                onClick={() => dispatch(handleAddFive(5))}
              >{` + Add 5`}</Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Counter;
