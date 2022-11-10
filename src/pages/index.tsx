import Link from 'next/link'
import React from 'react'

import Favicon from '@/assets/favicon.png'
import OgImage from '@/assets/images/ogImage.png'

import SEO from '@/components/SEO'
import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <SEO
        title="Pagina inicial"
        description="Pagina criada por Beatriz"
        icon={Favicon.src}
        image={OgImage.src}
      />
    </Container>
  )
}
