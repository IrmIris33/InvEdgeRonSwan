import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Quote from "../Components/Quote";

it("render increment", () => {
    const {countUpVote} = render(<Quote/>)
    fireEvent.onclick(<button></button>)
    expect(countUpVote).tobeTruthy();
});

it("render decrement", () => {
    const {countDownVote} = render(<Quote/>)
    fireEvent.onclick(<button></button>)
    expect(countDownVote).tobeTruthy();
});