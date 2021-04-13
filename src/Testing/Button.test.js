import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Quote from "../Components/Quote";
import Button from "../Components/Quote";

it("should render initial layout", () => {
    // when
    const Quote = render(<Quote />);
    // then
    expect(Quote.getElements(<button></button>)).toMatchSnapshot();
});