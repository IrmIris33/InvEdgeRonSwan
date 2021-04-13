import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Quote from "../Components/Quote";

it("renders without cashing", () => {
    const {countUpVote} = render(<Quote/>)
    fireEvent.onclick()
    expect(countUpVote).tobeTruthy();
});