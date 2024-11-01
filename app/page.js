"use client"

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Mock news data
const newsItems = [
  {
    id: 1,
    title: "Três ruas no bairro Estrada Nova recebem pavimentação asfáltica (10/2024)",
    content: "Seguem as pavimentações asfálticas em Jaraguá do Sul. A Rua Eugênio Picolli, no bairro Estrada Nova, já foi asfaltada. A via possui 170 metros de extensão, onde foram investidos R$ 446.043,50 em melhorias. Além dessa rua, o contrato contempla outras duas vias do bairro com serviços de engenharia, fornecimento de materiais e mão de obra para pavimentação asfáltica, serviços preliminares, terraplanagem, drenagem pluvial, obras complementares e sinalização viária."
  },
  {
    id: 2,
    title: "Revitalização do viaduto do Estrada Nova é solicitada em sessão (12/2023)",
    content: "Em sessão realizada na Câmara Municipal de Jaraguá do Sul, os vereadores deliberaram e aprovaram uma indicação apresentada por Jonathan Reinke (Podemos). A proposta insta o Executivo a tomar medidas necessárias para realizar uma revitalização no viaduto que serve como acesso aos bairros Estrada Nova e Rau."
  },
  {
    id: 3,
    title: "Vereador pede construção de escola e vagas em CMEI no Estrada Nova (03/2021)",
    content: "Os vereadores de Jaraguá do Sul aprovaram, na sessão, três indicações do vereador Anderson Kassner (PP). Duas das demandas são por vagas em escolas e creches no bairro Estrada Nova. A primeira indicação pede ao Executivo a construção de uma nova escola municipal no Estrada Nova. Outra solicita a ampliação de vagas no Centro Municipal de Educação Infantil do bairro. Ainda há outra indicação que pede a construção de um muro de contensão nos fundos desse Cmei."
  },
]

export default function HomePage() {
  const homeRef = useRef(null)
  const noticiasRef = useRef(null)
  const comunidadeRef = useRef(null)
  const contatoRef = useRef(null)

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const nextNews = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
  }

  const prevNews = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length)
  }


  const pages =
    [{
      "image": "/images/news.png", description: "Fique por dentro das novidades da comunidade!"
    }, {
      "image": "/images/calendar.png", description: "Acompanhe os eventos e atividades locais!"
    }, {
      "image": "/images/polls.png", description: "Participe de enquetes e pesquisas!"

    }];


  return (
    <div className="min-h-screen bg-white overflow-y-hidden">

      <main>
        <motion.div
          ref={homeRef}
          className=" bg-cover bg-center h-[600px] flex items-center justify-center blue-filter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <motion.header
            className="fixed top-0 left-0 right-0 z-10 lg:px-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="w-full px-4 py-4 flex justify-between items-center">
              <motion.div
                className="flex items-center "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-UVr9HU7a3IfkVY9RgGWA7Y3iRMsiaE.png" alt="AMOBEN Logo" width={40} height={40} className="mr-2" />
              </motion.div>
              <div className="flex items-center justify-center">
                <div className='space-x-4 lg:space-x-8 mr-4 lg:mr-8'>
                  <motion.button
                    onClick={() => scrollToSection(comunidadeRef)}
                    className="text-white  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    História
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection(noticiasRef)}
                    className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Notícias
                  </motion.button>

                </div>

                <motion.button
                  onClick={() => scrollToSection(contatoRef)}
                  className="bg-navy-blue text-white p-2.5 px-6 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contato
                </motion.button>
              </div>
            </nav>
          </motion.header>




          <div className="absolute inset-0 w-full opacity-95 blur-sm " style={{ backgroundImage: "url('/images/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <motion.div
            className="relative z-10 text-center text-white px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-saira font-medium mb-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]
            ">AMOBEN</h1>

            <p className="md:text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">ASSOCIAÇÃO DE MORADORES DO BAIRRO ESTRADA NOVA</p>



          </motion.div>
          <div className="absolute bottom-20 mt-6 w-full flex justify-center text-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 animate-up-down">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          </div>

        </motion.div>

        <motion.div
          ref={comunidadeRef}
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap -mx-4 mt-5 mb-20">


            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-2xl text-navy-blue font-bold mb-4">Nossa história</h2>
              <p className="text-gray-600 text-justify mb-10 md:mb-0">A <b className='text-navy-blue'>Associação de Moradores do Bairro Estrada Nova - AMOBEN</b>, criada em 5 de fevereiro de 2001, representa uma continuidade histórica do espírito comunitário e de desenvolvimento que sempre caracterizou o Bairro Estrada Nova, em Jaraguá do Sul, Santa Catarina.

                <br />
                <br />

                O surgimento da <b className='text-navy-blue'>AMOBEN</b> reflete o desejo da comunidade de se organizar formalmente para lutar por melhores condições de vida e garantir que as demandas locais sejam ouvidas. Com sede na Rua José Picolli, número 532, a associação atua em diversas frentes, como a defesa de direitos sociais e a promoção de atividades culturais e esportivas. A associação não apenas busca promover o bem-estar social, mas também reforçar a identidade coletiva do bairro por meio de eventos que integram e valorizam os moradores.
                <br />
                <br />

                Historicamente, o bairro Estrada Nova cresceu com a chegada de famílias colonizadoras no início do século XX, que deram início à formação das primeiras comunidades. Nomes como Verbinenn, Nicoluzzi e Bertoldi são alguns dos pioneiros que ajudaram a transformar a região, inicialmente rural, em um dos bairros mais movimentados e desenvolvidos de Jaraguá do Sul. A inclusão do bairro no perímetro urbano nos anos 1980 acelerou ainda mais seu crescimento, trazendo novas infraestruturas como escolas e centros de saúde, e estabelecendo o Estrada Nova como uma área de grande importância dentro do município.
                <br />
                <br />

                A <b className='text-navy-blue'>AMOBEN</b>, com sua atuação ao longo de mais de duas décadas, mantém viva essa trajetória de progresso e preservação da memória local. A associação continua sendo um símbolo do compromisso dos moradores em melhorar a qualidade de vida da comunidade, respeitando suas raízes históricas e ao mesmo tempo projetando um futuro de desenvolvimento e integração social para o bairro Estrada Nova.</p>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-8 flex justify-center items-start">
              <motion.img
                src="/images/icone.jpg"
                alt="Community"
                width={350}
                height={350}
                className="rounded"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>

          </div>

          <div className="flex flex-wrap flex-col-reverse md:flex-row -mx-4">

            <div className="w-full md:w-1/2 px-4 flex justify-center items-center">
              <motion.img
                src="/images/bairro.jpg"
                alt="Community"
                width={500}
                height={500}
                className="rounded-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-2xl text-navy-blue font-bold mb-4">Bairro Estrada Nova</h2>
              <p className="text-gray-600 text-justify mb-10 md:mb-0">
                O bairro Estrada Nova, cuja origem remonta ao início do século XX, foi fundamental na expansão e colonização da região, servindo como uma importante rota de ligação entre a Colônia Jaraguá e Corupá, anteriormente conhecida como Hansa Humboldt. A estrada que deu nome ao bairro foi aberta em 1920 e, embora tenha perdido sua função inicial com a construção da BR-280, o nome Estrada Nova ficou marcado na história e no imaginário da população.
                Inicialmente rural, a região só foi urbanizada na década de 1980, quando novos loteamentos começaram a atrair moradores e atividades econômicas
              </p>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="bg-gray-100 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-navy-blue">Em breve teremos nosso App</h2>
            <div className="flex flex-wrap -mx-4 justify-center">
              {pages.map((page, index) => (
                <motion.div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6">

                    <div className='flex justify-center items-start h-80'>
                      <motion.img
                        src={page.image}
                        alt="App Icon"
                        width={250}
                        className="mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    </div>
                    <p className="text-gray-600 text-lg text-center">{page.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={noticiasRef}
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-navy-blue">Notícias</h2>
          <div
            className="bg-white rounded-lg shadow-md p-6 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-navy-blue">{newsItems[currentNewsIndex].title}</h3>
              <p className="text-gray-600">{newsItems[currentNewsIndex].content}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <motion.button
                onClick={prevNews}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <span className="text-gray-600">
                {currentNewsIndex + 1} / {newsItems.length}
              </span>
              <motion.button
                onClick={nextNews}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={contatoRef}
          className="bg-navy-blue text-white py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <h2 className="text-2xl font-bold mb-4">Fale Conosco</h2>
                <p className="mb-4">Resta alguma dúvida ou gostaria de contar para discutirmos uma proposta ? preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</p>
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="mb-4">
                    <input type="text" placeholder="Nome" className="w-full px-3 py-2 text-gray-700 bg-white rounded outline-none" />
                  </div>
                  <div className="mb-4">
                    <input type="email" placeholder="Email" className="w-full px-3 py-2 text-gray-700 bg-white rounded outline-none" />
                  </div>
                  <div className="mb-4">
                    <input type="tel" placeholder="Telefone" className="w-full px-3 py-2 text-gray-700 bg-white rounded outline-none" />
                  </div>
                  <div className="mb-4">
                    <input type="text" placeholder="Assunto" className="w-full px-3 py-2 text-gray-700 bg-white rounded outline-none" />
                  </div>
                  <div className="mb-4">
                    <textarea placeholder="Descrição" rows={4} className="w-full px-3 py-2 text-gray-700 bg-white rounded outline-none"></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-teal-500 text-white px-8 py-3 rounded hover:bg-teal-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enviar
                  </motion.button>
                </motion.form>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <motion.img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IsSvwQ3lMxR2N1rlxyj0bWoBqyIg8E.png"
                  alt="Customer Service Representative"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-[560px]"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <motion.footer
        className="bg-navy-blue text-white py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <motion.img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-UVr9HU7a3IfkVY9RgGWA7Y3iRMsiaE.png"
                alt="AMOBEN Logo"
                width={40}
                height={40}
                className="mb-2"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              />
              <p className="mt-2">&copy; copyright 2024 todos os direitos reservados</p>
              <p>política de privacidade | termos e condições</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contato</h3>
              <p>amoben@contabilidadedalagnese.com</p>
              <p>Rua José Picolli, nº 532, Box 23, Jaraguá do Sul, SC, Brazil, 89254350</p>
              <p>(47) 3370-8284</p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}