import React from "react";
import { BarsSpinner } from "react-spinners-kit";

import { SpinnerContainer } from "./with-spinner.styles.js";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
        <BarsSpinner size={20} color='#421f44' loading={isLoading} />
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
