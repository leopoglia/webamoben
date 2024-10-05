"use client"

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Mock news data
const newsItems = [
  {
    id: 1,
    title: "Novo projeto comunitário lançado",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    title: "Reunião mensal da associação",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    title: "Melhorias na infraestrutura local",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
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

  return (
    <div className="min-h-screen bg-white">
      <motion.header
        className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-UVr9HU7a3IfkVY9RgGWA7Y3iRMsiaE.png" alt="AMOBEN Logo" width={40} height={40} className="mr-2" />
          </motion.div>
          <div className="flex items-center justify-center">
            <div className='space-x-8 mr-8'>
              <motion.button
                onClick={() => scrollToSection(comunidadeRef)}
                className="text-gray-600 hover:text-gray-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                História
              </motion.button>
              <motion.button
                onClick={() => scrollToSection(noticiasRef)}
                className="text-gray-600 hover:text-gray-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Notícias
              </motion.button>

            </div>

            <motion.button
              onClick={() => scrollToSection(contatoRef)}
              className="bg-navy-blue text-white p-3 px-8 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contato
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <main className="pt-16">
        <motion.div
          ref={homeRef}
          className="relative bg-cover bg-center h-[600px] flex items-center justify-center blue-filter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 w-full blur-sm " style={{ backgroundImage: "url('https://i.imgur.com/GbLAdGN.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <motion.div
            className="relative z-10 text-center text-white px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-saira font-medium mb-2">AMOBEN</h1>
            <p className="md:text-2xl">ASSOCIAÇÃO DE MORADORES DO BAIRRO ESTRADA NOVA</p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={comunidadeRef}
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <h2 className="text-2xl text-navy-blue font-bold mb-4">Nossa história</h2>
              <p className="text-gray-600">

                A empresa Associacao De Moradores Do Bairro Estrada Nova - Amoben que tem como razão social Associacao De Moradores Do Bairro Estrada Nova - Amoben foi fundada em 05/02/2001 e está cadastrada na Solutudo no segmento de Ongs e Entidades Sociais com o CNPJ 04.287.930/0001-29. No mercado, a empresa está localizada na Rua 693 - Loteamento Blese, Nº S/N - Emef Marcos Verbinen no bairro Estrada Nova em Jaraguá do Sul - SC, CEP 89254-360. A empresa Associacao De Moradores Do Bairro Estrada Nova - Amoben está cadastrada na Receita Federal sob o CNAE 9430-8/00 com atividade fim de Atividades De Associações De Defesa De Direitos Sociais.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8 flex justify-center items-center">
              <motion.img
                src="/placeholder.svg"
                alt="Community"
                width={400}
                height={400}
                className="rounded-full"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              />
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
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <motion.img
                      src="https://i.imgur.com/Xpif07v.png"
                      alt="App Icon"
                      width={250}
                      className="mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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