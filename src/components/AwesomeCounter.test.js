import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AwesomeCounter from "./AwesomeCounter";

test("it should have the correct initial value when set to 7", () => {
  render(<AwesomeCounter initial value={7} />);
  const count = screen.queryByText("7");
  expect(count).toBeVisible();
  throw new Error();
});
test("it should have a default value of 0", () => {
  render(<AwesomeCounter />);
  const count = screen.queryByText("0");
  expect(count).toBeVisible();
});

test("it should increase the value correctly when add is clicked once", () => {
  render(<AwesomeCounter  initialvalue={1} />);
  const addButton = screen.getByText("Add");
  userEvent.click(addButton);
  const count = screen.queryByText("2");
  expect(count).toBeVisible();
});
  
  


test("it should increase the value correctly when subtract is clicked twice", () => {
    render(<AwesomeCounter  initialvalue={1} />);
    const addButton = screen.getByText("Add");
    userEvent.click(addButton);
    const count = screen.queryByText("3");
    expect(count).toBeVisible();
  });


test("it should not allow a negative value when initial value is 0 and remove is clicked", () => {
    render(<AwesomeCounter  initialvalue={5} />);
    const RemoveButton = screen.getByText("Remove");
    userEvent.click(RemoveButton);
    const count = screen.queryByText("4");
    expect(count).toBeVisible();
  });

