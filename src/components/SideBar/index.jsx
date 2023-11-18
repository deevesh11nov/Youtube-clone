// import {ActionList, Avatar } from '@primer/react'

// const SideBar = props =>  {

//     return <ActionList>
//     <ActionList.Item>
//       <ActionList.LeadingVisual>
//         <LinkIcon />
//       </ActionList.LeadingVisual>
//       Liked Videos
//     </ActionList.Item>
//     <ActionList.Item variant="danger">
//       <ActionList.LeadingVisual>
//         <AlertIcon />
//       </ActionList.LeadingVisual>
//       Watch Later
//     </ActionList.Item>
//     <ActionList.Item>
//       <ActionList.LeadingVisual>
//         <Avatar src="https://github.com/mona.png" />
//       </ActionList.LeadingVisual>
//       History
//     </ActionList.Item>
//   </ActionList>

// }

// export default SideBar
import React from "react";
import { Box, Text } from "@primer/react";
import {
  HomeIcon,
  PlayIcon,
  VideoIcon,
  ClockIcon,
  PersonIcon,
} from "@primer/octicons-react";

const VerticalNavbar = () => {
  return (
    <Box
      bg="gray.9"
      color="white"
      width="200px"
      height="100%"
      p={4}
      position="fixed"
      top="0"
      left="0"
      backgroundColor="black"
      marginTop="75px"
    >
      <Box display="flex" alignItems="center" mb={3}>
        <HomeIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          Home
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={3}>
        <PlayIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          Shorts
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={3}>
        <VideoIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          Subscriptions
        </Text>
      </Box>
      <hr />

      <Box display="flex" alignItems="center" mb={3}>
        <PersonIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          Your Channel
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={3}>
        <PlayIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          History
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={3}>
        <VideoIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          Yours Video
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={3}>
        <ClockIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          Watch later
        </Text>
      </Box>
      <hr />

      <Box display="flex" alignItems="center" mb={3}>
        <PersonIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          Subscriptions
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={3}>
        <PlayIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          History
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={3}>
        <VideoIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          Yours Video
        </Text>
      </Box>
      <Box display="flex" alignItems="center" mb={3}>
        <ClockIcon size={16} />
        <Text fontWeight="bold" ml={2}>
          Watch later
        </Text>
      </Box>
    </Box>
  );
};

export default VerticalNavbar;
