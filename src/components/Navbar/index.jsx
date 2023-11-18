import React from "react";
import { Header, TextInput, Box, Avatar, Button } from "@primer/react";
import { BellIcon } from "@primer/octicons-react";

const YouTubeNavbar = () => {
  return (
    <Header
      bg="black"
      position="fixed"
      zIndex={1000}
      width="100%"
      height="20px"
    >
      <Box display="flex" alignItems="center">
        <svg
          height="20"
          viewBox="0 0 24 24"
          width="32"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <span style={{ marginLeft: "8px", color: "#fff", fontSize: "1.5rem" }}>
          YouTube
        </span>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{ flex: 1, justifyContent: "center" }}
      >
        <TextInput
          placeholder="Search"
          sx={{ width: "500px", marginRight: "16px" }}
        />
        <Button>Search</Button>
      </Box>

      <Box>
        <BellIcon size={24} />
      </Box>

      <Box display="flex" alignItems="center">
        <Avatar
          src="https://github.com/octocat.png"
          size={32}
          square
          alt="User Avatar"
          sx={{ marginLeft: "12px" }}
        />
      </Box>
    </Header>
  );
};

export default YouTubeNavbar;
