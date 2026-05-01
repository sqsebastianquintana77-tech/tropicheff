import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  MapPin, 
  ChevronRight, 
  CreditCard,
  Star,
  ShoppingBag,
  History,
  Phone,
  ArrowRight,
  Clock
} from 'lucide-react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="nav-modern">
      <div className="container nav-flex">
        <div className="brand-logo-container">
          <div className="logo-badge-img">
            <img src="/tropichef_logo.jpeg" alt="Tropi Chef Logo" className="original-logo" />
          </div>
          <span className="logo-brand-name">TropiCheff</span>
        </div>
        <div className="nav-links-desktop">
          <a href="#historia" className="nav-btn-secondary">
            <History size={16} /> Nuestra Historia
          </a>
          <a href="#menu" className="nav-btn-secondary">
            <Utensils size={16} /> Menú
          </a>
          <a href="#cashea" className="nav-btn-secondary">
            <CreditCard size={16} /> Pagar con Cashea
          </a>
          <a href="https://wa.me/5801429287880?text=Hola,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20Tropi%20Chef!" target="_blank" rel="noopener noreferrer" className="btn-small">Pedir Ahora</a>
        </div>
      </div>
    </nav>
  );
};

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const Hero = () => {
  const mesActual = meses[new Date().getMonth()];
  
  return (
    <section className="hero-modern pattern-bg">
      <div className="container hero-grid">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hero-text-content"
        >
          <span className="eyebrow">Auténtica Cocina Venezolana</span>
          <h1>¿Hallacas en {mesActual}? <br/><span className="script-font">¡Claro que sí!</span></h1>
          <p className="hero-description">
            Disfruta del sabor más reconfortante de Venezuela durante todo el año. Tradición, amor y los 15 años de maestría de la Chef Nohemí Castro en cada bocado.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Ver Menú de Hoy <ShoppingBag size={18}/></button>
            <div className="cashea-inline">
              <img src="/cashea.jpg" alt="Cashea" className="cashea-icon-img" />
              <span>Paga en cuotas con <strong>Cashea</strong></span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hero-image-wrapper"
        >
          <img src="/hallaca.jpg" alt="Hallacas tradicionales" className="main-hero-img" />
        </motion.div>
      </div>
    </section>
  );
};

const StorySection = () => (
  <section id="historia" className="story-section">
    <div className="container story-grid">
      <div className="story-image">
        <img src="/nohemi.PNG" alt="Chef Nohemí Castro" className="chef-portrait" />
      </div>
      <div className="story-content">
        <span className="section-tag">La Maestra de la Cocina</span>
        <h2>El Legado de Nohemí Castro</h2>
        <p>
          Desde Los Teques para todo el país, la Chef Nohemí ha dedicado más de una década a perfeccionar las recetas que heredó de su familia. En Tropi Chef, no solo servimos comida; servimos memorias.
        </p>
        <div className="story-features">
          <div className="s-feature">
            <Utensils className="s-icon" />
            <div>
              <h4>Recetas Auténticas</h4>
              <p>Sin atajos. Usamos ingredientes de primera calidad para ese sabor hogareño real.</p>
            </div>
          </div>
          <div className="s-feature">
            <History className="s-icon" />
            <div>
              <h4>Hallacas Todo el Año</h4>
              <p>Porque la navidad es un sentimiento que se puede comer cualquier día.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const menuItems = [
  {
    id: 1,
    name: "Pabellón Criollo",
    image: "/pabellon.jpg",
    description: "El plato nacional por excelencia. Carne mechada, caraotas negras, arroz blanco y tajadas fritas. Un abrazo en cada bocado.",
    price: "$00.00",
  },
  {
    id: 2,
    name: "Cachapa con Queso",
    image: "/cachapa.jpg",
    description: "Dulce, tierna y rebosante de auténtico queso de mano fundido. El equilibrio perfecto de sabores de nuestra tierra.",
    price: "$00.00",
  },
  {
    id: 3,
    name: "Tequeños",
    image: "/tequeños.jpg",
    description: "Los reyes de la fiesta. Dedos de queso envueltos en masa crujiente, dorados a la perfección.",
    price: "$00.00",
  },
  {
    id: 4,
    name: "Arepas Rellenas",
    image: "/arepas.jpg",
    description: "Asadas al punto exacto, crujientes por fuera y suaves por dentro. Elige entre nuestros rellenos tradicionales.",
    price: "$00.00",
  },
  {
    id: 5,
    name: "Desayuno Criollo",
    image: "/desayuno_criollo.jpg",
    description: "La mejor manera de empezar el día: arepitas, perico, caraotas refritas, carne mechada y queso rallado.",
    price: "$00.00",
  },
  {
    id: 6,
    name: "Empanadas",
    image: "/empanada.jpg",
    description: "Masa de maíz amarillo, fritas y crujientes con el clásico guiso de la abuela. ¡No te puedes comer solo una!",
    price: "$00.00",
  },
  {
    id: 7,
    name: "Pastelitos Andinos",
    image: "/pastelitos.jpg",
    description: "Tradición de los Andes en tu mesa. Rellenos de carne con arroz, pollo o queso, fritos hasta inflar.",
    price: "$00.00",
  },
  {
    id: 8,
    name: "Sopa de Mondongo",
    image: "/mondongo.jpg",
    description: "Un plato sustancioso y lleno de sabor, ideal para compartir los domingos en familia.",
    price: "$00.00",
  },
  {
    id: 9,
    name: "Ceviche Tropical",
    image: "/ceviche.jpg",
    description: "Una fusión fresca de sabores caribeños. Pescado fresco marinado en cítricos con un toque picante.",
    price: "$00.00",
  }
];

const MenuSection = () => (
  <section id="menu" className="menu-section">
    <div className="container">
      <div className="menu-header">
        <span className="section-tag">De Nuestra Cocina a tu Mesa</span>
        <h2>Nuestro Menú Tradicional</h2>
        <p className="menu-subtitle">Descubre los sabores auténticos que preparamos con amor, listos para disfrutar y pagar cómodamente.</p>
      </div>
      
      <div className="menu-grid">
        {menuItems.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="menu-card"
          >
            <div className="menu-image-container">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-price-tag">{item.price}</div>
            </div>
            <div className="menu-content">
              <h3>{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <div className="cashea-badge-small">
                <img src="/cashea.jpg" alt="Cashea" className="cashea-icon-img" />
                <span>Llévalo en cuotas con <strong>Cashea</strong></span>
              </div>
              <a href="https://wa.me/5801429287880?text=Hola,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20Tropi%20Chef!" target="_blank" rel="noopener noreferrer" className="btn-menu-action">
                Pedir Ahora <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CasheaSection = () => (
  <section id="cashea" className="cashea-section">
    <div className="container cashea-card">
      <div className="cashea-content">
        <div className="cashea-header">
          <img src="/cashea.jpg" alt="Cashea" className="cashea-logo-img" />
          <span className="cashea-tag">Disponible Ahora</span>
        </div>
        <h2>Come hoy, paga después en <span className="blue-text">cuotas sin interés</span></h2>
        <p>En Tropi Chef queremos que disfrutes sin preocupaciones. Por eso somos aliados oficiales de Cashea.</p>
        <ol className="cashea-steps">
          <li>Elige tus platos favoritos.</li>
          <li>Selecciona Cashea al pagar.</li>
          <li>Paga tu primera cuota y el resto después.</li>
        </ol>
        <button className="btn-outline-blue">Saber más sobre Cashea <ArrowRight size={18}/></button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer-modern">
    <div className="container footer-grid">
      <div className="footer-info">
        <div className="footer-brand">
          <img src="/tropichef_logo.jpeg" alt="Tropi Chef Logo" className="footer-logo" />
          <h3>TROPI CHEF</h3>
        </div>
        <p>Sabor que enamora, tradición que perdura. El auténtico sazón venezolano.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/tropicheff/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.tiktok.com/search?q=tropicheff" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
          </a>
        </div>
      </div>
      
      <div className="footer-links">
        <h4>Ubicación</h4>
        <ul className="footer-list">
          <li><MapPin size={16} className="text-yellow" /> <span>Los Teques, Edo. Miranda, Venezuela.</span></li>
          <li>
            <a href="https://maps.app.goo.gl/XzfKCTV3ouoXd1bB9" target="_blank" rel="noopener noreferrer" className="map-link">Ver en Google Maps</a>
          </li>
        </ul>
      </div>

      <div className="footer-links">
        <h4>Horario</h4>
        <ul className="footer-list">
          <li><Clock size={16} className="text-yellow" /> <strong>Jueves a Domingo</strong></li>
          <li>12:00 PM - 10:00 PM</li>
          <li className="delivery-tag">Delivery y Pick-up</li>
        </ul>
      </div>

      <div className="footer-cta">
        <h4>¿Antojo de Hallaca?</h4>
        <p>Visítanos o pide para llevar fácilmente desde tu celular.</p>
        <a href="https://wa.me/5801429287880?text=Hola,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20Tropi%20Chef!" target="_blank" rel="noopener noreferrer" className="btn-primary btn-footer">
          <Phone size={18} /> Pedir por WhatsApp
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container bottom-flex">
        <p>Para Tropichef 2026 todos los derechos reservados.</p>
        <div className="footer-credits cerotraba-credits">
          <span>Realizado por CeroTraba</span>
          <img src="/logo_limpio.png" alt="CeroTraba" className="cerotraba-logo" />
        </div>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/5801429287880?text=Hola,%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20Tropi%20Chef!" 
    className="floating-wa"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat en WhatsApp"
  >
    <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  </a>
);

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <StorySection />
      <MenuSection />
      <CasheaSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
