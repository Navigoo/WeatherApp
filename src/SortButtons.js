import React from "react";
import { useDispatch } from 'react-redux';
import { updateSortBy } from './redux/weatherSlice';

const SortButtons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(updateSortBy("temperature")) }>
        Sortera på temperatur
      </button>
      <button onClick={() => dispatch(updateSortBy("date"))}>
        Sortera på datum i fallande ordning
      </button>
    </>
  );
};

export default SortButtons;
