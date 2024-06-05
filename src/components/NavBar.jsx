import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box bg="gray.800" px={4} py={3}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" color="white" fontWeight="bold">Dashboard</Text>
        <Flex alignItems="center">
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.700' }} href="#">Home</Link>
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.700' }} href="#">Expenses</Link>
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.700' }} href="#">Wallets</Link>
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.700' }} href="#">Summary</Link>
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.700' }} href="#">Accounts</Link>
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.700' }} href="#">Settings</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;