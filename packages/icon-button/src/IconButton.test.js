import renderer from "react-test-renderer";
import React from "react";

import { names } from "@hig/icons";
import IconButton from "./IconButton";

describe("IconButton", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<IconButton title="Settings" name={names.SETTINGS} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with a link", () => {
    const tree = renderer
      .create(
        <IconButton
          title="Settings"
          link="//example.com"
          name={names.SETTINGS}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with the `icon` prop", () => {
    const tree = renderer
      .create(<IconButton title="Settings" icon={names.SETTINGS} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
