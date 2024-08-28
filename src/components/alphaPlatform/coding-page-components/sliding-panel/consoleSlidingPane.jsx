import React from "react";
import ReactSlidingPane from "react-sliding-pane";
import ConsoleSlidingPaneOptions from "../ui/consoleSlidingPaneOptions";
import "./styles/slidingPane.css";

const ConsoleSlidingPane = ({ isOpen, onRequestClose}) => {
  return (
    <ReactSlidingPane
      title={`Editor Panel`}
      className="slidingPane"
      overlayClassName="some-custom-overlay-class"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      from="right"
      width="20%"
      minWidth="400px"
      >
        <ConsoleSlidingPaneOptions/>
    </ReactSlidingPane>
  );
};

export default ConsoleSlidingPane;