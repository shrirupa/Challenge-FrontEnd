import React from "react";
import {
  Modal,
  Wrapper,
  CloseSpan,
  NextSpan,
  PreviousSpan,
  Image,
  DownloadButton,
  Video
} from "./styled";

//component used to preview artifacts, with the functionality to download the artifacts.

class LightBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block",
      index: props.activeIndex
    };
  }

  handleClose = () => {
    this.setState({ display: "None" });
    this.props.onClose(false);
  };

  render() {
    // const fileName = this.props.artifacts[this.state.index].data.split("/");

    return (
      <Modal display={this.state.display}>
        <Wrapper>
          <CloseSpan onClick={this.handleClose}>&times;</CloseSpan>
          {this.props.display}
        </Wrapper>
      </Modal>
    );
  }
}

export default LightBox;
