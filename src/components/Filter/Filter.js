import React from "react";
import F from "./filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter, changeFilter } from "../../redux/contacts";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <label className={F.label}>
      Find contacts by name
      <input
        className={F.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

// const mapStateToProps = (state) => ({
//   filter: getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
