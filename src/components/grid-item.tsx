import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface GridItemProps {
  title: string
  thumbnail: string
  href: string
}

const GridItem = ({ thumbnail, title, href }: GridItemProps) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          width="400"
          height="300"
          loading="lazy"
          objectFit="cover"
          style={{ borderRadius: '0.3rem' }}
        />
        <LinkOverlay href={href} isExternal>
          <Text>{title}</Text>
        </LinkOverlay>
      </LinkBox>
    </Box>
  )
}

export default GridItem
