import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Github, Linkedin, Instagram, Download, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background dots */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary/5 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: '0 0 20px var(--primary)',
            }}
          />
        ))}
      </div>

      {/* Moving lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-slide-in"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground animate-fade-in">
              Merhaba! Ben Burak 👋
            </span>
            <div className="mt-2">
              <span className="animate-bounce-subtle inline-block animate-color-shift text-primary drop-shadow-[0_0_8px_var(--primary)]">
                Backend & Frontend Geliştirici
              </span>
            </div>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-8 animate-fade-in-delayed">
            <span className="inline-block animate-color-shift text-primary drop-shadow-[0_0_8px_var(--primary)]">
              Modern Web Teknolojileri ile Yenilikçi Çözümler Sunuyorum
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
            Ben Burak Enes Yakşi, Yönetim Bilişim Sistemleri Öğrencisiyim. <br></br>Kullanıcı deneyimini ön planda tutan, 
            performans odaklı modern web uygulamaları geliştiriyorum. React, TypeScript, Node.js, Express ve diğer birçok teknolojiyle beraber kullanıcı dostu web siteler tasarlıyorum.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delayed">
            <Link
              to="/portfolyo"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg border border-primary/20 hover:bg-primary/90 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-sm"
            >
              Portfolyomu İncele
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/hakkimda"
              className="group flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground rounded-lg hover:bg-accent/50 hover:border-accent transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              Hakkımda
              <UserCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>

            
          </div>

          <div className="flex justify-center gap-6 mt-12 animate-fade-in-up-delayed">
            <a
              href="https://github.com/brkens7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub profilimi ziyaret et"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/burak-enes-yakşi-b128a9238/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn profilimi ziyaret et"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/brkens7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="Instagram profilimi ziyaret et"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;