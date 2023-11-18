import React from "react";
import { Box, Text, Avatar } from "@primer/react";

const YouTubeContent = () => {
  return (
    <Box
      p={0}
      ml={248} // Adjust this value based on the width of your fixed navbar
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      backgroundColor="black"
      position="relative"
      top={1}
    >
      {/* First Row */}
      <Box display="flex" marginBottom="16px">
        <Box
          backgroundColor="black"
          width="450px"
          height="300px"
          border="1px"
          marginRight="16px"
        >
          <Box width="100%" height="100px">
            <img
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              src="https://img.youtube.com/vi/TiEVqZ2Bc_c/maxresdefault.jpg"
            />
            <Box
              width="100%"
              height="20px"
              border="1px"
              borderColor="black"
              color="white"
            >
              <Avatar
                src="https://github.com/octocat.png"
                size={25}
                square
                alt="User Avatar"
                sx={{ marginLeft: "12px" }}
              />
              <Text color="white"> Marvel studio What if? Season 2 </Text>
            </Box>
          </Box>
        </Box>
        <Box
          backgroundColor="black"
          width="450px"
          height="300px"
          border="1px"
          marginRight="16px"
        >
          <Box width="100%" height="100px">
            <img
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              src="https://img.youtube.com/vi/PJ3ZQk_lr9E/maxresdefault.jpg"
            />
            <Box
              width="100%"
              height="20px"
              border="1px"
              borderColor="black"
              color="white"
            >
              <Avatar
                src="https://github.com/octocat.png"
                size={25}
                square
                alt="User Avatar"
                sx={{ marginLeft: "12px" }}
              />
              <Text color="white"> Dindora | Episode:1 BB ki vines </Text>
            </Box>
          </Box>
        </Box>
        <Box
          backgroundColor="black"
          width="450px"
          height="300px"
          border="1px"
          marginRight="16px"
        >
          <Box width="100%" height="100px">
            <img
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              src="https://img.youtube.com/vi/RCOtW5BAJhs/maxresdefault.jpg"
            />
            <Box
              width="100%"
              height="20px"
              border="1px"
              borderColor="black"
              color="white"
            >
              <Avatar
                src="https://github.com/octocat.png"
                size={25}
                square
                alt="User Avatar"
                sx={{ marginLeft: "12px" }}
              />
              <Text color="white"> Witness history:Rohit 100 off 35</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Second Row */}
      <Box display="flex">
        <Box
          backgroundColor="black"
          width="450px"
          height="300px"
          border="1px"
          marginRight="16px"
        >
          <Box width="100%" height="100px">
            <img
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              src="https://img.youtube.com/vi/5BxqahE0fu8/sddefault.jpg"
            />
            <Box
              width="100%"
              height="20px"
              border="1px"
              borderColor="black"
              color="white"
            >
              <Avatar
                src="https://github.com/octocat.png"
                size={25}
                square
                alt="User Avatar"
                sx={{ marginLeft: "12px" }}
              />
              <Text color="white">Nuclear Godzilla vs King Ghidorah </Text>
            </Box>
          </Box>
        </Box>
        <Box
          backgroundColor="black"
          width="450px"
          height="300px"
          border="1px"
          marginRight="16px"
        >
          <Box width="100%" height="100px">
            <img
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              src="https://img.youtube.com/vi/761uRaAoW00/maxresdefault.jpg"
            />
            <Box
              width="100%"
              height="20px"
              border="1px"
              borderColor="black"
              color="white"
            >
              <Avatar
                src="https://github.com/octocat.png"
                size={25}
                square
                alt="User Avatar"
                sx={{ marginLeft: "12px" }}
              />
              <Text color="white"> Opening Scene | The Batman Max </Text>
            </Box>
          </Box>
        </Box>
        <Box
          backgroundColor="black"
          width="450px"
          height="300px"
          border="1px"
          marginRight="16px"
        >
          <Box width="100%" height="100px">
            <img
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              src="https://img.youtube.com/vi/YcCBQ52sfuU/maxresdefault.jpg"
            />
            <Box
              width="100%"
              height="20px"
              border="1px"
              borderColor="black"
              color="white"
            >
              <Avatar
                src="https://github.com/octocat.png"
                size={25}
                square
                alt="User Avatar"
                sx={{ marginLeft: "12px" }}
              />
              <Text color="white"> Top 20 Best SCI FI Movies </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default YouTubeContent;
