import React from "react";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";

function Card(props) {

  const splitSocialMedia = (socialMedia) => {
    const socialMediaParts = socialMedia.split(' IG - ');
    const fbPart = socialMediaParts[0].replace('FB - ', '');
    const igPart = socialMediaParts[1];
    return { fbPart, igPart };
  };
  
  const { fbPart, igPart } = splitSocialMedia(props.club.SocialMedia);
  return (
    <div className='bg-white h-64 rounded-3xl shadow-lg flex items-center justify-center'>
      <div className='w-11/12 font-poppins'>
        <div className="text-3xl py-3 font-extrabold">
          {props.club.Name}
        </div>
        <div className="flex py-1 font-medium items-center">
          <img src={facebook} alt='facebook' className="w-12 h-12"/>
          <p className="pl-3">{fbPart}</p>
        </div>
        <div className="flex py-1 font-medium items-center">
          <img src={instagram} alt='instagram' className="w-12 h-12"/>
          <p className="pl-3">{igPart}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;