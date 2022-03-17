import { Box, Divider, Flex, Hide, Image, Show, Text, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  const carroselPadding = useBreakpointValue({ base: 32, lg: 0 })

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        paddingY={4}
      >
        <Image height={46} src="/logo.png" width={184} />
      </Flex>

      <Flex
        backgroundImage="url('/background.png')"
        height={335}
        justifyContent="space-between"
        paddingX={32}
      >
        <Box marginTop="80px" maxWidth={400}>
          <Text color="white" fontSize="2xl" marginBottom={8}>
            5 Continentes,<br />
            infinitas possibilidades.
          </Text>

          <Text color="white">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>

        <Hide below="lg">
          <Image height={271} marginTop="80px" src="/airplane.png" transform="rotate(3deg)" width={417} />
        </Hide>
      </Flex>

      <Hide below="lg">
        <Flex justifyContent="space-between" marginTop={20} paddingX={32}>
          <Image src="/nightlife.png" />
          <Image src="/beach.png" />
          <Image src="/modern.png" />
          <Image src="/classic.png" />
          <Image src="/more.png" />
        </Flex>
      </Hide>

      {/* <Show below="lg">
        <Flex marginTop={20} paddingX={32}>
          <Image src="/nightlife-mobile.png" />
          <Image src="/beach-mobile.png" />
          <Image src="/modern-mobile.png" />
          <Image src="/classic-mobile.png" />
          <Image src="/more-mobile.png" />
        </Flex>
      </Show> */}

      <Flex justifyContent="center" marginTop={20}>
        <Box width={220}>
          <Divider />
        </Box>
      </Flex>

      <Box marginTop={20} textAlign="center">
        <Text fontSize="4xl">Vamos nessa?</Text>
        <Text fontSize="4xl">Então escolha o seu continente</Text>
      </Box>

      <Box marginY={20} paddingX={carroselPadding}>
        <Link href="/continent/europe">
          <a><Image src="/continent-slide.png" width="100%" /></a>
        </Link>
      </Box>
    </>
  )
}
