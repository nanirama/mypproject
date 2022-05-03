import React, { useState } from "react";
// import { exportLocale } from "../../../../localization";
import ModalVideo from "../../../modal/video";
// import MixpanelHelper from "../../../utils/segment";
import styled from "styled-components";
import { HeroImageWrapper, HeroImage } from "../styled";

export const CustomersVideoMiniature = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    width: 80px;
    border-radius: 500px;
    height: 80px;
    background: ${(props) => props.theme.color.primary};
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.1s all;
    content: " ";
    cursor: pointer;
  }
  &:before {
    z-index: 5;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 18px 0 18px 25px;
    border-color: transparent transparent transparent #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: " ";
  }
  &:hover:after {
    border-radius: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`;

// export default class ModalVideoHeroImage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalOpen: false
//     };

//     this.handleModal = this.handleModal.bind(this);
//   }

//   handleModal() {
//     this.setState(prevState => ({
//       modalOpen: true
//     }));
//   }

//   render() {
//     const props = this.props;
//     return (
//       <React.Fragment>
//         <ModalVideo youtube_id={props.youtube_id} modalOpen={this.state.modalOpen} />
//         <HeroImageWrapper onClick={this.handleModal}>
//           <CustomersVideoMiniature>
//             <HeroImage bg={props.bg} />
//           </CustomersVideoMiniature>
//         </HeroImageWrapper>
//       </React.Fragment>
//     );
//   }
// }

const ModalVideoHero = ({ ...props }) => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo youtube_id={props.youtube_id} modalOpen={openVideo} onClose={() => setOpenVideo(false)} />
      <HeroImageWrapper onClick={() => setOpenVideo(true)}>
        <CustomersVideoMiniature>
          <HeroImage bg={props.bg} />
        </CustomersVideoMiniature>
      </HeroImageWrapper>
    </React.Fragment>
  );
};

export default ModalVideoHero;
