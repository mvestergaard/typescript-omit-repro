import React from "react";
import { Props } from "react-select/base";

interface WithoutOmit extends Props {}

export const SelectWithoutOmit: React.FC<WithoutOmit> = ({
    // trigger auto-complete here, works fine

}) => <div />;

interface WithOmit extends Omit<Props, "onChange" | "value"> {}

export const SelectWithOmit: React.FC<WithOmit> = ({
    // trigger auto-complete here, doesn't work
    
}) => <div />;
