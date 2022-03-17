import { Box, Flex, Image, SimpleGrid, Stack, Text, useBreakpointValue } from '@chakra-ui/react'

import Card from '../../components/Card'

const Europe = () => {
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' })
  const stackWidth = useBreakpointValue({ base: '100%', md: '50%' })

  const cities = [
    {
      city: 'Londres',
      cityImage: '/london.png',
      country: 'Reino Unido',
      flagImage: '/england-flag.png',
      id: 1
    },
    {
      city: 'Paris',
      cityImage: '/paris.png',
      country: 'França',
      flagImage: '/france-flag.png',
      id: 2
    },
    {
      city: 'Roma',
      cityImage: '/rome.png',
      country: 'Itália',
      flagImage: '/italy-flag.png',
      id: 3
    },
    {
      city: 'Praga',
      cityImage: '/prague.png',
      country: 'República Tcheca',
      flagImage: '/czech-flag.png',
      id: 4
    },
    {
      city: 'Amsterdã',
      cityImage: '/amsterda.png',
      country: 'Holanda',
      flagImage: '/netherlands-flag.png',
      id: 5
    }
  ]

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        paddingY={4}
      >
        <Image height={46} src="/logo.png" width={184} />
      </Flex>

      <Box>
        <Image src="/europe-banner.png" width="100%" />
      </Box>

      <Stack direction={stackDirection} marginY={20} paddingX={24} spacing="8">
        <Text fontSize="lg" textAlign="justify" width={stackWidth}>
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>

        <Box width={stackWidth}>
          <Image marginX="auto" src="/info.png" />
        </Box>
      </Stack>

      <Box marginTop={20} paddingX={24}>
        <Text fontSize="2xl">Cidades 100+</Text>

        <SimpleGrid columns={[1, null, null, 4]} marginTop={8} marginBottom={20} spacing="8">
          {cities.map((city) => <Card key={city.id} cityData={city} />)}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Europe