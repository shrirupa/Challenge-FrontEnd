import styled from "styled-components";
// import Asset from "../../utils/AssetService";
// const url = Asset("assets/logos/download.svg");
const Modal = styled.div`
  display: ${props => props.display};
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.85);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CloseSpan = styled.span`
  color: #ddd;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
  transition: color 200ms linear;

  &:hover {
    color: white;
    transition: color 200ms linear;
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    color: white;
    transition: color 200ms linear;
    text-decoration: none;
    cursor: pointer;
  }
`;

const PreviousSpan = styled.span`
  color: #ddd;
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  font-size: 35px;
  font-weight: bold;
  z-index: 2;
  transition: color 200ms linear;

  &:hover {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms linear;
  }

  &:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms linear;
  }
`;
const NextSpan = styled.span`
  color: #ddd;
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  font-size: 35px;
  font-weight: bold;
  z-index: 2;
  transition: color 200ms linear;

  &:hover {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms linear;
  }

  &:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms linear;
  }
`;

const ImageSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 1;
`;

const Image = styled.img`
  position: absolute;
  top: calc(50% - 50px);
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 1;
  max-height: 75%;
`;
const Video = styled.video`
  position: absolute;
  top: calc(50% - 50px);
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 1;
  max-height: 75%;
`;
// const Anchor = styled.a`
//   position: absolute;
//   height: 10%;
//   width: 10%;
//   bottom: 10%;
//   right: 20%;
// `;
const DownloadButton = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;

opacity: 0.8;
transition: opacity 200ms linear;
  &:hover{
    opacity: 1;
    transition: opacity 200ms linear; 
  }


  .textContainer {
    display: inline-block;
    height: 50px;
    width: 150px;
    float: right;
    border: 2px solid white;
    border-left: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #fff;
    border-color: #fff;

    div.bold{
      font-weight: 800;
      font-size: 14pt;
      width: 100%;
      line-height: 1;
      margin-top: 3px;
    }
    div.filename{
      margin-top: 3px;
      font-weight: 100;
      font-size: 12pt;
      line-height: 1;
    }
  }
  .imageContainer {
    border: 2px solid white;
    border-right: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    float: left;
    display: inline-block;
    height: 50px;
    width: 50px;
    ${"" /* background: orange; */}
    background-image: url(${props => props.icon});
    background-size: 25px 25px;
    background-position: center center;
    background-repeat: no-repeat;
    
   
  }
`;

export {
  Modal,
  CloseSpan,
  PreviousSpan,
  NextSpan,
  ImageSpan,
  Wrapper,
  Image,
  DownloadButton,
  Video
};
