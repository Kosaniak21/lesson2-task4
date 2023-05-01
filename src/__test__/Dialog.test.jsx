import React from "react";
import { shallow } from "enzyme";
import Dialog from "../Dialog";
describe("Dialog", () => {
  const onCloseMock = jest.fn();
  it("should be closed if prop isOpen false", () => {
    const wrapper = shallow(<Dialog isOpen={false} onClose={onCloseMock} />);
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });
  it("should be opened if prop isOpen true", () => {
    const wrapper = shallow(<Dialog isOpen onClose={onCloseMock} />);
    expect(wrapper.find("dialog")).toBeTruthy();
  });
  it("should be closed if button clicked", () => {
    const wrapper = shallow(<Dialog isOpen onClose={onCloseMock} />);
    wrapper.find(".dialog__close-btn").simulate("click");
    expect(wrapper.find(".dialog").exists()).toEqual(true);
  });
  it("should be display title what we give in prop", () => {
    const wrapper = shallow(
      <Dialog isOpen onClose={onCloseMock} title={"hello"} />
    );
    expect(wrapper.find(".dialog__title")).toHaveLength(1);
  });
  it("should be display children what we give in prop", () => {
    const wrapper = shallow(
      <Dialog isOpen onClose={onCloseMock} children={"test"} />
    );
    expect(wrapper.find(".dialog__content")).toHaveLength(1);
  });
  it("should counter be 0", () => {
    const wrapper = shallow(
      <Dialog isOpen onClose={onCloseMock} children={"test"} />
    );
    expect(wrapper.find(".dialog__content")).toHaveLength(1);
  });
});
