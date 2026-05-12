import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="py-16 bg-white dark:bg-[#0d1117]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-[#c9d1d9] mb-6">Ben Kimim?</h1>  
            <div className="bg-white dark:bg-[#161b22] rounded-lg shadow-md overflow-hidden mb-8 border border-[#30363d]">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-[#c9d1d9] mb-2"> Burak Enes Yakşi</h2>
                  <p className="text-[#58a6ff] dark:text-[#58a6ff] mb-4">Backend & Frontend Geliştirici (Full Stack)</p>
                  
                  <div className="flex space-x-4 mb-4">
                    <a 
                      href="https://github.com/Brkens7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/burak-enes-yakşi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/brkens7/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                      aria-label="Instagram Profile"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href="mailto:burakenesyaksi9@gmail.com" 
                      className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                      aria-label="Email Contact"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                  
                 
                </div>
              </div>
            </div>
            
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-[#c9d1d9] prose-p:text-slate-600 dark:prose-p:text-[#8b949e] prose-strong:text-slate-900 dark:prose-strong:text-[#c9d1d9] prose-code:text-slate-900 dark:prose-code:text-[#c9d1d9] prose-code:bg-slate-100 dark:prose-code:bg-[#161b22] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-100 dark:prose-pre:bg-[#161b22] prose-pre:text-slate-900 dark:prose-pre:text-[#c9d1d9] prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-[#30363d] prose-blockquote:text-slate-600 dark:prose-blockquote:text-[#8b949e] prose-blockquote:border-l-slate-200 dark:prose-blockquote:border-l-[#30363d] prose-li:text-slate-600 dark:prose-li:text-[#8b949e] prose-a:text-[#58a6ff] prose-a:no-underline hover:prose-a:underline">
              <h2>Hakkımda</h2>
              <p>
              Ben Burak Enes Yakşi, 22 yaşındayım Fırat Üniversitesi Yönetim Bilişim Sistemleri
               3. sınıf öğrencisiyim.  kendimi yazılım
              sektöründe geliştirmeye çalışıyorum C , C++ , Veritabanı dersleri aldım.
              Uzunca bir süre Wordpress tabanlı Blog, E-Ticaret, Haber siteleri geliştirdim.
              </p>
              
              <p>
              Kısaca kendimden bahsetmek gerekirse; aktif olarak React.js, Tailwind
              CSS ve Node.js üzerine yoğunlaşıyorum. 
              Yazılım geliştirme konusunda tutkulu biriyim ve sürekli olarak yeni teknolojileri öğrenmeye ve kendimi geliştirmeye çalışıyorum.
              </p>
              
              <h2>Kariyer Hedefi</h2>
              <p>
              Yazılım geliştirme yetkinliğimi sağlam temeller
              üzerine inşa etmek ve profesyonel projelerde aktif rol alarak işin
              mutfağında yer almaktır.
              </p>
              
              <h2>Yetenek & Deneyimler</h2>
              <ul>
                <li><strong>Frontend:</strong> React, TypeScript, Next.js, </li>
                <li><strong>Backend:</strong> Node.js, , PostgreSQL, </li>
                <li><strong>Tools:</strong> Git, Docker, AWS, Vercel</li>
              </ul>
              
              <h2>Kodlama Yapmadığım Zamanlarda</h2>
              <p>
Genel olarak Oyun Oynamayı  ve kendimi çoğu alanda geliştirmeyi seviyorum, son zamanlarda kişisel blogumu geliştirmek amacıyla makaleler yazmaya çalışıyorum, bunları yaparken de arkadaşlarımla birlikte vakit geçirmeyi önemsiyor düzenli olarak dışarıda vakit geçirmeye çalışıyorum. <br></br>Bunların yanı sıra "League of Legends" , gibi oyunları oynamayı ve oyun oynanış videolarını izlemeyi seviyorum. <br></br> Hobi olarak futbol maçlarını izlemeyi ve gündem konularını takip etmeyi seviyorum.
              </p>
              
              <h2>İletişime Geçin</h2>
              <p>
Yeni insanlara, yeni fikirlere ve yeni başlangıçlara her zaman açığım, dilediğiniz zaman benimle iletişime geçmekten çekinmeyin! <Link to="/iletisim" className="text-[#58a6ff] hover:text-[#79c0ff] hover:underline">İletişim Sayfası</Link>'nı kullanarak veya sosyal medya hesaplarım üzerinden benimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;