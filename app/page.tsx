'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Music, Star, Users, Instagram, Twitter, Youtube, Play } from 'lucide-react'
import Image from 'next/image'

const images = [
  { src: '/jay1.jpg', alt: 'Foto Jay ENHYPEN 1', id: 1 },
  { src: '/jay2.jpg', alt: 'Foto Jay ENHYPEN 2', id: 2 },
  { src: '/jay3.jpg', alt: 'Foto Jay ENHYPEN 3', id: 3 },
  { src: '/jay4.jpg', alt: 'Foto Jay ENHYPEN 4', id: 4 },
  { src: '/jay5.jpg', alt: 'Foto Jay ENHYPEN 5', id: 5 },
  { src: '/jay6.jpg', alt: 'Foto Jay ENHYPEN 6', id: 6 },
  { src: '/jay7.jpg', alt: 'Foto Jay ENHYPEN 7', id: 7 },
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

const stats = [
  { icon: Users, number: '2.5M+', label: 'Pengikut', description: 'Total pengikut di semua platform media sosial' },
  { icon: Music, number: '50M+', label: 'Streaming', description: 'Total streaming lagu di berbagai platform musik' },
  { icon: Star, number: '100+', label: 'Penampilan', description: 'Total penampilan live dan konser' },
  { icon: Heart, number: '1M+', label: 'Suka', description: 'Total like dan interaksi dari penggemar' },
]

const albums = [
  {
    title: 'DIMENSION : DILEMMA',
    year: '2021',
    description: 'Album studio pertama ENHYPEN yang menampilkan konsep dimensi dan dilema',
    tracks: ['Tamed-Dashed', 'Go Big or Go Home', 'Blockbuster'],
    image: '/jay1.jpg'
  },
  {
    title: 'MANIFESTO : DAY 1',
    year: '2022',
    description: 'Album mini yang mengeksplorasi manifesto dan identitas grup',
    tracks: ['Future Perfect (Pass the MIC)', 'ParadoXXX Invasion', 'Walk the Line'],
    image: '/jay2.jpg'
  },
  {
    title: 'DARK BLOOD',
    year: '2023',
    description: 'Album mini dengan tema gelap dan misterius',
    tracks: ['Bite Me', 'Sacrifice (Eat Me Up)', 'Chaconne'],
    image: '/jay3.jpg'
  },
  {
    title: 'ORANGE BLOOD',
    year: '2023',
    description: 'Album mini dengan konsep darah oranye yang penuh energi',
    tracks: ['Sweet Venom', 'Still Monster', 'Mortal'],
    image: '/jay4.jpg'
  }
]

const popularSongs = [
  {
    title: 'Given-Taken',
    album: 'BORDER : DAY ONE',
    year: '2020',
    description: 'Debut single yang memperkenalkan konsep ENHYPEN',
    views: '150M+'
  },
  {
    title: 'Drunk-Dazed',
    album: 'BORDER : CARNIVAL',
    year: '2021',
    description: 'Hit single dengan konsep karnaval yang memukau',
    views: '200M+'
  },
  {
    title: 'Tamed-Dashed',
    album: 'DIMENSION : DILEMMA',
    year: '2021',
    description: 'Lagu dengan energi tinggi dan choreography yang menantang',
    views: '180M+'
  },
  {
    title: 'Future Perfect (Pass the MIC)',
    album: 'MANIFESTO : DAY 1',
    year: '2022',
    description: 'Title track dengan pesan tentang masa depan',
    views: '220M+'
  },
  {
    title: 'Bite Me',
    album: 'DARK BLOOD',
    year: '2023',
    description: 'Lagu dengan konsep vampir yang unik dan menarik',
    views: '300M+'
  },
  {
    title: 'Sweet Venom',
    album: 'ORANGE BLOOD',
    year: '2023',
    description: 'Lagu terbaru dengan konsep racun manis',
    views: '250M+'
  }
]

const achievements = [
  {
    title: 'Rookie of the Year',
    award: 'Mnet Asian Music Awards',
    year: '2021',
    description: 'Penghargaan pendatang baru terbaik'
  },
  {
    title: 'Best New Male Artist',
    award: 'Golden Disc Awards',
    year: '2021',
    description: 'Artis pria pendatang baru terbaik'
  },
  {
    title: 'Worldwide Fans Choice',
    award: 'Mnet Asian Music Awards',
    year: '2022',
    description: 'Pilihan penggemar dunia'
  },
  {
    title: 'Best Performance Award',
    award: 'Seoul Music Awards',
    year: '2023',
    description: 'Penghargaan performa terbaik'
  }
]

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-korean-cream via-pink-50 to-korean-coral">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gradient font-korean"
            >
              Raina Jay ENHYP
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-korean-navy hover:text-korean-red transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-7xl font-bold text-korean-navy font-korean"
                >
                  Jay
                  <span className="block text-gradient">ENHYPEN</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-korean-charcoal font-korean"
                >
                  안녕하세요! 저는 ENHYPEN의 Jay입니다
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg text-korean-charcoal"
                >
                  Halo! Saya Jay dari ENHYPEN. Selamat datang di portofolio resmi saya di mana Anda dapat menjelajahi perjalanan saya sebagai artis K-pop dan performer.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <button className="korean-gradient text-white px-8 py-3 rounded-full font-semibold hover-scale flex items-center gap-2">
                  <Play size={20} />
                  Tonton Video
                </button>
                <button className="border-2 border-korean-red text-korean-red px-8 py-3 rounded-full font-semibold hover:bg-korean-red hover:text-white transition-all duration-300">
                  Pelajari Lebih Lanjut
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden card-shadow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-6 glass-effect rounded-2xl card-shadow hover-scale"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 korean-gradient rounded-full">
                    <stat.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-korean-navy mb-2">{stat.number}</div>
                <div className="text-korean-charcoal font-semibold">{stat.label}</div>
                <div className="text-sm text-korean-charcoal/70">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-korean-navy font-korean mb-4">
              갤러리 | Galeri
            </h2>
            <p className="text-lg text-korean-charcoal">
              Jelajahi perjalanan saya melalui momen-momen indah ini
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative group cursor-pointer"
              >
                <div className="relative w-full h-64 rounded-2xl overflow-hidden card-shadow hover-scale">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Jay ENHYPEN</h3>
                    <p className="text-sm">Foto {image.id}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-korean-navy font-korean">
              소개 | Tentang Saya
            </h2>
            <p className="text-lg text-korean-charcoal leading-relaxed mb-4">
              Jay adalah anggota berbakat dari grup K-pop ENHYPEN, dikenal karena kemampuan vokal yang luar biasa, 
              kehadiran panggung yang karismatik, dan dedikasi terhadap karyanya. Lahir dengan hasrat untuk musik dan pertunjukan, 
              Jay terus menginspirasi penggemar di seluruh dunia dengan seni dan kepribadiannya yang asli.
            </p>
            <p className="text-lg text-korean-charcoal leading-relaxed mb-4">
              Perjalanan Jay di dunia musik dimulai sejak usia muda, mengasah bakatnya melalui pelatihan intensif dan kerja keras. 
              Sebagai salah satu anggota kunci ENHYPEN, ia telah berpartisipasi dalam berbagai album sukses dan tur dunia, 
              menunjukkan kemampuannya sebagai seorang performer serba bisa. Pengalamannya meliputi rekaman studio, 
              pembuatan koreografi, dan interaksi dengan penggemar di seluruh dunia, menjadikannya ikon yang dicintai.
            </p>
            <p className="text-lg text-korean-charcoal leading-relaxed mb-4">
              Dengan setiap penampilan, Jay selalu berusaha memberikan yang terbaik, tidak hanya sebagai seorang idola, 
              tetapi juga sebagai seorang seniman yang terus berkembang. Ia percaya bahwa musik adalah bahasa universal 
              yang dapat menyatukan orang, dan melalui karyanya, ia berharap dapat menyebarkan pesan positif dan kebahagiaan.
            </p>
            <p className="text-lg text-korean-charcoal leading-relaxed font-korean">
              제이는 뛰어난 보컬 실력과 카리스마 넘치는 무대 매력, 그리고 자신의 예술에 대한 헌신으로 유명한 
              K-pop 그룹 ENHYPEN의 재능 있는 멤버입니다. 음악과 공연에 대한 열정을 가지고 태어난 제이는 
              자신의 예술성과 진정한 성격으로 전 세계 팬들에게 영감을 주고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-korean-navy font-korean mb-4">
              앨범 | Album
            </h2>
            <p className="text-lg text-korean-charcoal">
              Koleksi album dan karya musik Jay bersama ENHYPEN
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {albums.map((album, index) => (
              <motion.div
                key={album.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden card-shadow hover-scale"
              >
                <div className="relative h-48">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-korean-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {album.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-korean-navy mb-2">{album.title}</h3>
                  <p className="text-korean-charcoal text-sm mb-4">{album.description}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-korean-red">Lagu Utama:</p>
                    {album.tracks.map((track, trackIndex) => (
                      <p key={trackIndex} className="text-xs text-korean-charcoal/70">• {track}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Songs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-korean-navy font-korean mb-4">
              인기곡 | Lagu Populer
            </h2>
            <p className="text-lg text-korean-charcoal">
              Lagu-lagu hits Jay yang paling banyak didengar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularSongs.map((song, index) => (
              <motion.div
                key={song.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 card-shadow hover-scale"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 korean-gradient rounded-full">
                      <Music className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-korean-navy">{song.title}</h3>
                      <p className="text-sm text-korean-charcoal/70">{song.album}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-korean-red">{song.views}</p>
                    <p className="text-xs text-korean-charcoal/70">views</p>
                  </div>
                </div>
                <p className="text-sm text-korean-charcoal mb-3">{song.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-korean-charcoal/70">{song.year}</span>
                  <button className="text-korean-red hover:text-korean-pink transition-colors">
                    <Play size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-korean-navy font-korean mb-4">
              수상 | Penghargaan
            </h2>
            <p className="text-lg text-korean-charcoal">
              Prestasi dan penghargaan yang diraih Jay bersama ENHYPEN
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 card-shadow hover-scale flex items-center gap-4"
              >
                <div className="p-3 korean-gradient rounded-full">
                  <Star className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-korean-navy mb-1">{achievement.title}</h3>
                  <p className="text-korean-red font-semibold mb-2">{achievement.award}</p>
                  <p className="text-sm text-korean-charcoal">{achievement.description}</p>
                  <p className="text-xs text-korean-charcoal/70 mt-2">{achievement.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-korean-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold font-korean">Raina Jay ENHYP</h3>
            <p className="text-korean-coral">
              Terima kasih telah mengunjungi website buatan Raina Yulia Farani | 웹사이트를 방문해 주셔서 감사합니다
            </p>
            <div className="flex justify-center space-x-6 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-korean-coral hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
