import React from "react";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return (
    <div style={{ fontFamily: "ArtifaktElement" }}>
      {/* @TODO: Remove wrapper when component is ported */}
      <DefaultExport {...otherProps}>{children}</DefaultExport>
    </div>
  );
}
