import React from "react";
import { mount } from "enzyme";

describe("video test does not throw", () => {
  // This test works fine
  it("does not log a warning when mounting a video component", () => {
    const previousConsoleError = global.console.error;
    const consoleErrorMock = jest.fn();

    global.console.error = consoleErrorMock;

    mount(<video />);

    global.console.error = previousConsoleError;

    expect(consoleErrorMock).not.toHaveBeenCalled();
  });

  // This test fails because logs a warning
  it("does not log a warning when mounting a video component with the muted attribute", () => {
    const previousConsoleError = global.console.error;
    const consoleErrorMock = jest.fn();

    global.console.error = consoleErrorMock;

    mount(<video muted />);

    global.console.error = previousConsoleError;

    expect(consoleErrorMock).not.toHaveBeenCalled();
  });
});
