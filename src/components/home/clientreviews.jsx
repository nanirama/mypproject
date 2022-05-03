import React from "react";
import { graphql } from "gatsby";
import { ReviewsText } from "./styled";
import Spring from "../../assets/images/home/spring-img.png";

const ClientReviews = ({ data, svg }) => {
  const { client_name, description, image, small_icon, color } = data;
  return (
    <ReviewsText>
      <div className={color}>
        {image.fixed && <img src={image.fixed.src} />}
        <p>
          {description}
          <br />
          <b>- {client_name}</b>
        </p>
        {small_icon && small_icon.fixed && small_icon.fixed.src && <img src={small_icon.fixed.src} className="simg" />}
      </div>
    </ReviewsText>
  );
};

export default ClientReviews;

export const query = graphql`
  fragment clientReviews on PrismicClientReviews {
    data {
      client_name
      color
      description
      small_icon {
        fixed(width: 48) {
          src
        }
      }
      image {
        fixed(width: 72) {
          src
        }
      }
    }
  }
`;
