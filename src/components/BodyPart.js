import React from 'react'
import { Stack, Typography } from '@mui/material'

import GymIcon from '../assets/icons/gym.png'
import BackIcon from '../assets/icons/back.png'
import CalfIcon from '../assets/icons/calf.png'
import CardioIcon from '../assets/icons/cardio.png'
import ChestIcon from '../assets/icons/chest.png'
import ForearmIcon from '../assets/icons/forearm.png'
import NeckIcon from '../assets/icons/neck.png'
import ShouldersIcon from '../assets/icons/shoulders.png'
import UpperArmIcon from '../assets/icons/upper-arm.png'
import UpperLegIcon from '../assets/icons/upper-leg.png'
import WaistIcon from '../assets/icons/waist.png'

const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  // Create an object that maps each body part to its corresponding icon
  const icons = {
    all: GymIcon,
    back: BackIcon,
    'lower legs': CalfIcon,
    cardio: CardioIcon,
    chest: ChestIcon,
    'lower arms' : ForearmIcon,
    neck: NeckIcon,
    shoulders: ShouldersIcon,
    'upper arms': UpperArmIcon,
    'upper legs': UpperLegIcon,
    waist: WaistIcon,
  };

  // Get the icon for the current body part
  const currentIcon = icons[item.toLowerCase()];

  return (
    <Stack 
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? ' 4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
        <img src={currentIcon} alt={`${item} icon`} style={{ width: '50px', height: '50px'}} />
        <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart