import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'kisisel-portfolyo',
    title: 'Kişisel Portfolyo Sitesi',
    description: 'Geliştirici olarak yeteneklerimi, projelerimi ve deneyimlerimi sergilemek için oluşturduğum kişisel portfolyo web sitesidir. Modern web teknolojileriyle geliştirilmiş, responsive (mobil uyumlu) ve kullanıcı dostu bir tasarıma sahiptir.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'React.js', 'Node.js', 'Express', 'Tailwind CSS'],
    image: '/images/burak site.png',
    repoUrl: 'https://github.com/brkens7/kisisel-portfolyo',
    featured: true
  },
  {
    id: 'yakinda',
    title: 'Çok Yakında...',
    description: 'Yönetim Bilişim Sistemleri ve Yapay Zeka üzerine geliştirdiğim yeni projelerim çok yakında burada olacak.',
    technologies: ['AI', 'DSS', 'MIS'],
    image: '/images/images.png', 
    repoUrl: '#',
    featured: true
  }
];