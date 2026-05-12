import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-[#161b22] border-t border-slate-200 dark:border-[#30363d] text-black dark:text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4"> Burak Enes Yakşi</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              İş birlikleri, Web sitesi, mobil uygulama geliştirme, SEO optimizasyonu gibi Freelance projeler için iletişime geçebilirsiniz.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/brkens7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/burak-enes-yakşi-b128a9238/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/brkens7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:burakenesyaksi9@gmail.com" 
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/portfolyo" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Portfolyo
                </Link>
              </li>
              <li>
                <Link to="/hakkimda" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-slate-700 dark:text-slate-300">
                <Mail size={20} className="inline-block mr-2" />
                burakenesyaksi9@gmail.com
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <Mail size={20} className="inline-block mr-2" />
                iletisim@burakenesyaksi.com
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <span className="inline-block mr-2">📍</span>
                Elazığ / Malatya, Türkiye
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-slate-600 dark:text-slate-400">
          <p>&copy; {currentYear} Burak Enes Yakşi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;