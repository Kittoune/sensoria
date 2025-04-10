import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const slides = [
  {
    season: 'Printemps',
    emotion: 'Éveil',
    bgColor: '#BFE6BA',
    bgImage: '/spring.jpg',
    text: "Redécouvrez le goût du vivant.",
    dish: 'Asperges, herbes fraîches, touche acidulée',
  },
  {
    season: 'Été',
    emotion: 'Joie',
    bgColor: '#FFE066',
    bgImage: '/summer.jpg',
    text: "Chaque bouchée éclate comme un rire d’enfance.",
    dish: 'Fruits rôtis, textures fondantes',
  },
  {
    season: 'Automne',
    emotion: 'Sérénité',
    bgColor: '#E3C5A8',
    bgImage: '/autumn.jpg',
    text: "Savourer le calme du crépuscule.",
    dish: 'Potiron fondant, champignons, notes boisées',
  },
  {
    season: 'Hiver',
    emotion: 'Introspection',
    bgColor: '#BFD7EA',
    bgImage: '/winter.jpg',
    text: "Se retrouver dans le silence du goût.",
    dish: 'Bouillon umami, légumes racines, épices chaudes',
  },
];

export default function SensoriaExperience() {
  const [index, setIndex] = useState(0);
  const [emotion, setEmotion] = useState('');
  const [destination, setDestination] = useState('');
  const slide = slides[index];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleEmotionSubmit = (e) => {
    e.preventDefault();
    const match = slides.find(s => s.emotion.toLowerCase() === emotion.toLowerCase());
    setDestination(match ? `${match.season} – ${match.emotion}` : "Aucune destination trouvée");
  };

  return (
    <div
      className="w-full flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.bgImage})`, backgroundColor: '#8e1d3f' }}
    >
      {/* Header avec logo, slogan et menu */}
      <header className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-4 bg-[#8e1d3f] text-white shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo-sensoria.png" alt="Sensoria Logo" className="h-12" />
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold uppercase tracking-wide">Sensoria</h1>
            <p className="text-sm italic">Le théâtre des saveurs</p>
          </div>
        </div>
        <nav className="mt-4 md:mt-0 space-x-6 font-semibold">
          <a href="#experience" className="hover:underline transition hover:text-yellow-300">Expérience</a>
          <a href="#salles" className="hover:underline transition hover:text-yellow-300">Les Salles</a>
          <a href="#menu" className="hover:underline transition hover:text-yellow-300">Menu</a>
          <a href="#contact" className="hover:underline transition hover:text-yellow-300">Contact</a>
          <a href="#destinations" className="hover:underline transition hover:text-yellow-300">Destination émotion</a>
        </nav>
      </header>

      /* Bandeau immersif vidéo */
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/ambiance-sensoria.mp4"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold italic tracking-widest">
            Un lieu où chaque sens s’éveille...
          </h2>
        </div>
      </section>

      
      <section id="experience" className="w-full px-8 py-16 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-4xl font-bold mb-4">Le repas qui vous fait voyager… Jusqu’à l’essentiel !</h2>
          <p className="max-w-3xl mx-auto mb-6">Et si chaque repas devenait un portail vers un monde sensoriel et imaginaire ?<br/>Chez Sensoria, chaque bouchée est une clé d’entrée vers un <strong>univers inédit</strong>, où goût, lumière, son et interaction digitale fusionnent pour <strong>réveiller les sens, les souvenirs, et l’âme d’enfant</strong>.</p>
          <p className="text-yellow-200 font-semibold text-lg">Ici, votre curiosité devient votre passeport.</p>
          <p className="mt-2 italic">À chaque table, une histoire. À chaque plat, un voyage intérieur.</p>
        </motion.div>
      </section>

      {/* Section Destination émotion */}
      <div id="destinations" className="w-full px-8 py-12 bg-white text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h3 className="text-3xl font-bold text-[#8e1d3f] mb-6">Trouvez votre destination émotion</h3>
          <form onSubmit={handleEmotionSubmit} className="flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Quelle émotion vous anime ? (Éveil, Joie, Sérénité, Introspection)"
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
              className="px-4 py-2 rounded shadow border border-[#8e1d3f] focus:outline-none focus:ring focus:ring-[#8e1d3f] w-full max-w-md"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#8e1d3f] text-white rounded-full hover:bg-[#a83250] shadow"
            >
              Découvrir ma destination
            </button>
          </form>
          {destination && (
            <p className="mt-4 text-xl font-semibold text-[#8e1d3f]">{destination}</p>
          )}
        </motion.div>
      </div>

      {/* Section Les Salles */}
      <section id="salles" className="w-full px-8 py-16 text-center bg-[#f3f3f3]">
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-[#8e1d3f] mb-10">Les 3 univers immersifs de Sensoria</motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-purple-900 text-white rounded-xl shadow-lg p-6">
            <img src="/foret-enchantee.jpg" alt="Forêt Enchantée" className="rounded mb-4 w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold text-yellow-300 mb-2">Forêt Enchantée</h4>
            <p className="text-sm">Un univers féerique et végétal, peuplé de lianes lumineuses, de sons naturels et de plats inspirés de la terre et des bois.</p>
            <a href="#menu" className="inline-block mt-4 px-4 py-2 bg-yellow-600 rounded-full hover:bg-yellow-500 transition">Voir le menu</a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#e4b838] text-black rounded-xl shadow-lg p-6">
            <img src="/oasis-epices.jpg" alt="Oasis des Épices" className="rounded mb-4 w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold mb-2">Oasis des Épices</h4>
            <p className="text-sm">Un décor oriental vibrant et chaleureux où les épices dansent dans l’air et réveillent vos papilles à travers des mets colorés et parfumés.</p>
            <a href="#menu" className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition">Voir le menu</a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-black text-white rounded-xl shadow-lg p-6">
            <img src="/salle-etoiles.jpg" alt="Salle des Étoiles" className="rounded mb-4 w-full h-48 object-cover" />
            <h4 className="text-xl font-semibold text-yellow-300 mb-2">Salle des Étoiles</h4>
            <p className="text-sm">Plongez dans un univers cosmique, où les constellations s’animent au plafond pendant que des plats raffinés vous transportent hors du temps.</p>
            <a href="#menu" className="inline-block mt-4 px-4 py-2 bg-yellow-600 text-black rounded-full hover:bg-yellow-500 transition">Voir le menu</a>
          </motion.div>
        </div>
      </section>

      {/* Footer enrichi */}
      <footer id="contact" className="w-full px-8 py-12 bg-gradient-to-tr from-[#8e1d3f] to-black text-white text-sm text-center">
        <p className="text-lg font-bold mb-4">Abonnez-vous à notre newsletter</p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="px-4 py-2 rounded text-black w-full max-w-xs"
          />
          <button className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-500 transition">
            S'abonner
          </button>
        </form>
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-yellow-400"><FaInstagram /></a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-yellow-400"><FaFacebookF /></a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-yellow-400"><FaTwitter /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sensoria. Tous droits réservés.</p>
        <p className="mt-2">Contact : contact@sensoria.com</p>
      </footer>
    </div>
  );
}
