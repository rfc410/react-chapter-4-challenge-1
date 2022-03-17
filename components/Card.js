import { Box, Flex, Image, Text } from '@chakra-ui/react'

const Card = ({ cityData }) => {
  const { city, cityImage, country, flagImage } = cityData
  return (
    <Box borderWidth="1px">
      <Image src={cityImage} w="100%" />

      <Flex p="6" justifyContent="space-between">
        <Box>
          <Text fontSize="lg">{city}</Text>
          <Text color="darkgray" fontSize="sm">{country}</Text>
        </Box>
        <Image alignSelf="center" src={flagImage} />
      </Flex>
    </Box>
  )
}

export default Card