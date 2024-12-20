import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import GoogleMapComponent from '@/components/GoogleMapComponent'
import Hero from '@/components/Hero'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Screenshot } from '@/components/screenshot'
import { Team } from '@/components/Team'
import { Heading, Subheading } from '@/components/text'

// export const metadata = {
//   description:
//     'Radiant helps you sell more by revealing sensitive information about your customers.',
// }

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Información</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Información sobre el Despacho de Abogados Del Río Bourman
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <div className="relative h-0 overflow-hidden pb-[80%] max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl">
          <GoogleMapComponent />
        </div>
        <BentoCard
          eyebrow="Abogados"
          title="Equipo de Abogados"
          description="Nuestro equipo de abogados está especializado en Divorcios, Herencias y Comunidades de Propietarios."
          // graphic={
          //   <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          // }
          image={'/abogados/ceremonia.jpeg'}
          imageClassName="h-80 w-full object-cover object-top overflow-hidden"
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Rapidez"
          title="Eficacia en la comunicación"
          description="Nuestros abogados se comunican con usted de forma rápida y eficaz."
          // graphic={
          //   <div className="flex size-full pl-10 pt-10">
          //     <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
          //   </div>
          // }
          image={'/abogados/meeting.jpg'}
          imageClassName="h-80 object-cover"
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Experiecia"
          title="Más de 50 años de experiencia"
          description="Nuestro despacho cuenta con más de 50 años de experiencia en el sector."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Cercanía"
          title="En el centro de Málaga"
          description="Nuestro despacho se encuentra en el centro de Málaga."
          // graphic={<Map />}
          image={'/abogados/malaga.jpg'}
          imageClassName="h-80 object-cover"
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <BentoSection />
        </div>
      </main>
      <Team />
      <Footer />
    </div>
  )
}
