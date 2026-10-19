import { useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, CalendarDays, ShieldCheck, Clock3, Crosshair, Waves, Leaf, CircleDot, MapPin, Menu, X, Camera, Star, HeartPulse, GraduationCap, ClipboardCheck, Users, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const nav = [['Tratamentos', 'tratamentos'], ['Como funciona', 'como-funciona'], ['Resultados', 'resultados'], ['Clínicas', 'clinicas'], ['Para Profissionais', 'profissionais']];
const benefits = [
  { icon: CircleDot, title: 'Reduz gordura localizada', text: 'Atua diretamente nas células de gordura, ajudando a definir o contorno corporal.' },
  { icon: Waves, title: 'Estimula o colágeno', text: 'A energia controlada estimula a produção de colágeno, melhorando a firmeza da pele.' },
  { icon: Leaf, title: 'Favorece retração da pele', text: 'Contribui para uma pele mais firme e com melhor elasticidade.' },
  { icon: BodyContourIcon, title: 'Contorno mais definido', text: 'Resultados naturais e harmoniosos, valorizando a sua melhor versão.' },
];
const womenAreas = ['Abdômen', 'Flancos', 'Braços', 'Coxas', 'Papada', 'Costas'];
const menAreas = ['Abdômen', 'Flancos', 'Braços', 'Peitoral', 'Costas'];

export const WHATSAPP_PHONE = '554896442231';
export const WHATSAPP_DISPLAY = '(48) 9644-2231';
export const FACEBOOK_URL = 'https://www.facebook.com/people/Endolipo/61582861073071/';
export const INSTAGRAM_URL = 'https://www.instagram.com/endolipo.brasil?exln=ajY3MTBhbW0yYjll';

export function getWhatsAppUrl(message = 'Olá! Gostaria de agendar uma avaliação Endolipo®.') {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function Logo() {
  return <a href="#inicio" className="brand" aria-label="Endolipo, início">endolipo<sup>®</sup><span className="brand-star">✧</span></a>;
}

function Heading({ title, note }: { title: string; note?: string }) {
  return <div className="section-heading"><h2>{title}</h2><span className="heading-line" />{note && <p className="eyebrow">{note}</p>}</div>;
}

function FatCellsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="8" cy="8.5" r="2.6" />
      <circle cx="12.5" cy="5.5" r="2.4" />
      <circle cx="16.5" cy="8" r="2.6" />
      <circle cx="17" cy="14" r="2.8" />
      <circle cx="12" cy="17.8" r="2.7" />
      <circle cx="7.2" cy="14.5" r="2.6" />
    </svg>
  );
}

function BodyContourIcon() {
  return <img src="/icone-contorno.png" alt="Contorno mais definido" width={43} height={43} className="benefit-icon-img" />;
}

export function EndolipoPage() {
  const [menu, setMenu] = useState(false);
  const [gender, setGender] = useState('Mulheres');
  const [dialog, setDialog] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const gallery = useRef<HTMLDivElement>(null);
  const openContact = (kind = 'Agende sua avaliação') => setDialog(kind);
  const areas = gender === 'Mulheres' ? womenAreas : menAreas;
  
  const regionPhoto = (area: string, male = false) => {
    if (male) {
      if (area === 'Abdômen') return '/abdomen-masc.jpg';
      if (area === 'Flancos') return '/flanco-masc.jpg';
      if (area === 'Braços') return '/bracos-masc.jpg';
      if (area === 'Peitoral') return '/peitoral-masc.jpg';
      if (area === 'Costas') return '/costas-masc.jpg';
    } else {
      if (area === 'Abdômen') return '/abdomen-fem.jpg';
      if (area === 'Flancos') return '/flanco-fem.jpg';
      if (area === 'Braços') return '/bracos-fem.jpeg';
      if (area === 'Coxas') return '/coxas-fem.jpg';
      if (area === 'Papada') return '/papadas-fem.jpg';
      if (area === 'Costas') return '/costas-fem.jpg';
    }
    return '/hero-bg-clean.webp';
  };
  
  const photos = ['/hero-bg-clean.webp', '/abdomen-fem.jpg', '/abdomen-masc.jpg', '/flanco-fem.jpg', '/bracos-fem.jpeg', '/papadas-fem.jpg', '/costas-fem.jpg', '/costas-masc.jpg'];

  return <main>
    <section className="hero" id="inicio">
      <img className="hero-coast" src="/hero-real.webp" alt="Endolipo — Menos gordura localizada. Mais você." width={1376} height={768} />
      <div className="hero-shade" />
      <header className="site-header container">
        <Logo />
        <nav className={menu ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">{nav.map(([label, id]) => <a key={id} href={id === 'profissionais' ? '/profissionais' : `#${id}`} onClick={() => setMenu(false)}>{label}</a>)}</nav>
        <Button className="action header-action" asChild><a href={getWhatsAppUrl('Olá! Gostaria de agendar uma avaliação Endolipo®.')} target="_blank" rel="noopener noreferrer">Agende sua avaliação <ArrowRight /></a></Button>
        <Button variant="ghost" size="icon" className="menu-toggle" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button>
      </header>
      <div className="hero-content container">
        <div className="hero-copy"><h1>Menos gordura<br />localizada.<span className="script">Mais você.</span></h1>
          <p>Endolipo<sup>®</sup> é um protocolo exclusivo de lipo sem cirurgia, minimamente invasivo, que reduz a gordura localizada, firma a pele e modela o seu corpo.</p>
          <div className="actions"><Button className="action" asChild><a href={getWhatsAppUrl('Olá! Gostaria de agendar uma avaliação Endolipo®.')} target="_blank" rel="noopener noreferrer">Agende sua avaliação <ArrowRight /></a></Button><Button className="action outline-light" variant="outline" asChild><a href="#clinicas"><MapPin /> Encontre uma clínica</a></Button></div>
        </div>
        <img className="hero-handwritten-img" src="/seu-corpo-script.png" alt="Seu corpo em sua nova versão!" width={175} height={150} />
        <div className="hero-perks">{[[ShieldCheck, 'Procedimento', 'seguro'], [CalendarDays, 'Retorno no', 'mesmo dia'], [Clock3, 'Sem tempo', 'de recuperação'], [Crosshair, 'Tecnologia', 'de precisão']].map(([Icon, first, second], i) => { const PerkIcon = Icon as typeof ShieldCheck; return <div className="perk" key={i}><PerkIcon /><span>{String(first)}<br />{String(second)}</span></div>; })}</div>
      </div>
    </section>

    <div className="explanation container">
      <section className="how-section" id="como-funciona">
        <div className="how-heading"><h2>Como funciona</h2><span className="how-line" /></div>
        <div className="how-copy"><p className="eyebrow">Tecnologia a favor do seu corpo.</p><p className="body-copy">Uma fibra óptica de precisão entrega energia controlada diretamente na camada tratada, promovendo ação na gordura localizada e estimulando a retração da pele.</p></div>
        <img className="skin-image" src="/como-funciona.webp" alt="Ilustração da fibra óptica atuando na camada de gordura sob a pele" loading="lazy" width={720} height={846} />
        <div className="process-icons">{[[Crosshair, 'Ação', 'precisa'], [FatCellsIcon, 'Atua na', 'gordura'], [Waves, 'Estimula', 'o colágeno'], [Leaf, 'Promove', 'retração da pele']].map(([Icon, a, b], i) => { const ProcessIcon = Icon as typeof Leaf; return <div key={i}><span><ProcessIcon /></span><p>{String(a)}<br />{String(b)}</p></div>; })}</div>
      </section>
      <section className="areas-section" id="tratamentos">
        <div className="areas-heading"><h2>Áreas tratadas</h2><div className="gender-toggle" aria-label="Áreas por perfil">{['Mulheres', 'Homens'].map(g => <Button key={g} variant="ghost" aria-pressed={gender === g} className={gender === g ? 'selected' : ''} onClick={() => setGender(g)}>{g}</Button>)}</div></div>
        <p className="eyebrow">Tratamentos personalizados para<br />diferentes regiões do corpo.</p>
        <div className="region-grid">{areas.map((a, i) => <Button variant="ghost" className="region" key={a} onClick={() => setDialog(`Tratamento de ${a.toLowerCase()}`)}><span className={`region-photo region-${i}`}><img src={regionPhoto(a, gender === 'Homens')} alt={a} loading="lazy" width={150} height={150} /></span><span>{a}</span></Button>)}</div>
        <div className="small-divider"><span>Tratamentos também para {gender === 'Mulheres' ? 'homens' : 'mulheres'}</span><i /></div>
        <div className="region-grid secondary-regions">{(gender === 'Mulheres' ? menAreas : womenAreas).map((a, i) => <Button variant="ghost" className="region" key={a} onClick={() => setDialog(`Tratamento de ${a.toLowerCase()}`)}><span className={`region-photo region-${i}`}><img src={regionPhoto(a, gender === 'Mulheres')} alt={a} loading="lazy" width={150} height={150} /></span><span>{a}</span></Button>)}</div>
      </section>
    </div>

    <section className="benefits orange-band" id="beneficios"><div className="container"><div className="benefits-heading"><h2>Por que escolher <span>Endolipo<sup>®</sup></span></h2><span className="heading-line" /><p className="eyebrow">Mais do que estética. Mais bem-estar.</p></div><div className="benefit-grid">{benefits.map(({ icon: Icon, title, text }) => <article key={title}><div className="benefit-title"><Icon /><h3>{title}</h3></div><p>{text}</p></article>)}</div></div></section>

    <section className="results container" id="resultados"><Heading title="Resultados e experiência" note="HISTÓRIAS REAIS DE MAIS CONFIANÇA E BEM-ESTAR." /><div className="results-grid"><div className="result-feature"><img src="/resultado-procedimento.webp" alt="Demonstração do procedimento Endolipo®" loading="lazy" width={698} height={402} /></div>{[
      ['"Me senti mais confiante e leve."', 'O procedimento superou minhas expectativas. Me senti mais confiante no meu corpo.', '/juliana.jpg', 'Juliana M.'],
      ['"Procedimento tranquilo e ótimo atendimento."', 'O processo foi leve e o resultado foi natural. Excelente equipe.', '/carlos.jpg', 'Carlos R.'],
      ['"Gostei do resultado e da praticidade."', 'Vi uma grande diferença na firmeza da pele e no contorno. Me sinto ainda mais eu.', '/mariana.jpg', 'Mariana S.'],
    ].map(([title, text, image, name]) => <article className="experience" key={title}><img src={image} alt={name} loading="lazy" width={80} height={80} /><div><h3>{title}</h3><p>{text}</p><div className="flex items-center gap-2 mt-1"><span className="text-xs font-semibold text-primary/80">{name}</span><span className="stars" aria-label="Cuidado e qualidade">{Array.from({ length: 5 }, (_, i) => <Star key={i} />)}</span></div></div></article>)}</div><p className="medical-note">Resultados e recuperação variam conforme a avaliação e as características de cada pessoa.</p></section>

    <section className="gallery-section container" id="galeria"><Heading title="Galeria de resultados" note="Fotos e vídeos reais de pacientes Endolipo" /><div className="gallery-wrap"><Button className="gallery-arrow previous" variant="outline" size="icon" aria-label="Fotos anteriores" onClick={() => gallery.current?.scrollBy({ left: -360, behavior: 'smooth' })}><ArrowLeft /></Button><div className="gallery-track" ref={gallery}>{photos.map((src, i) => <Button className="gallery-item" variant="ghost" key={src} onClick={() => setSelectedImage(src)} aria-label={`Ampliar foto ${i + 1}`}><img src={src} alt="Foto ilustrativa" loading="lazy" width={300} height={240} /><span className="photo-badge"><Camera /> Foto</span></Button>)}</div><Button className="gallery-arrow next" variant="outline" size="icon" aria-label="Próximas fotos" onClick={() => gallery.current?.scrollBy({ left: 360, behavior: 'smooth' })}><ArrowRight /></Button></div></section>

    <section className="professional orange-band" id="profissionais"><div className="professional-photo"><img src="/profissional-saude.webp" alt="Profissional da saúde em uma clínica" loading="lazy" width={1536} height={1024} /></div><div className="professional-copy"><h2>É profissional da saúde?</h2><p>Conheça a área exclusiva da Endolipo<sup>®</sup> para profissionais<br className="desktop-break" /> e descubra protocolos, formações e oportunidades na rede.</p><Button className="action" asChild><a href="/profissionais">Acessar área do profissional <ArrowRight /></a></Button></div><div className="professional-perks">{[[HeartPulse, 'Protocolos exclusivos'], [GraduationCap, 'Formação especializada'], [ClipboardCheck, 'Suporte científico'], [Users, 'Oportunidades na rede']].map(([Icon, label], i) => { const PerkIcon = Icon as typeof Users; return <div key={i}><PerkIcon /><span>{String(label)}</span></div>; })}</div></section>

    <section className="contact-section" id="clinicas"><img className="contact-bg" src="/hero-bg-clean.webp" alt="Paisagem da costa brasileira ao entardecer" loading="lazy" width={1920} height={1276} /><div className="contact-shade" /><div className="container contact-content"><div><h2>Sua nova versão<br />começa aqui.</h2><p>Encontre uma clínica Endolipo<sup>®</sup> e agende sua avaliação.</p><div className="actions"><Button className="action" asChild><a href={getWhatsAppUrl('Olá! Gostaria de agendar uma avaliação e encontrar a clínica Endolipo® mais próxima.')} target="_blank" rel="noopener noreferrer">Encontre uma clínica <ArrowRight /></a></Button><Button className="action whatsapp" asChild><a href={getWhatsAppUrl('Olá! Gostaria de falar no WhatsApp com a equipe da Endolipo®.')} target="_blank" rel="noopener noreferrer"><MessageCircle /> Falar no WhatsApp</a></Button></div><div className="contact-perks"><div><MapPin /><span>Atendimento<br />em Santa Catarina</span></div><div><Users /><span>Clínicas certificadas<br />e profissionais capacitados</span></div><div><ShieldCheck /><span>Segurança,<br />ciência e cuidado</span></div></div></div><p className="script contact-script">Mais saúde.<br />Mais bem-estar.<br />Mais você.</p></div></section>

    <footer className="site-footer orange-band"><div className="container footer-main"><Logo /><nav aria-label="Navegação do rodapé">{nav.map(([label, id]) => <a key={id} href={id === 'profissionais' ? '/profissionais' : `#${id}`}>{label}</a>)}</nav><div className="social-links">{[[Instagram, 'Instagram', INSTAGRAM_URL], [Facebook, 'Facebook', FACEBOOK_URL]].map(([Icon, name, url], i) => { const Social = Icon as typeof Instagram; return url ? <Button variant="ghost" size="icon" key={i} aria-label={String(name)} asChild><a href={String(url)} target="_blank" rel="noopener noreferrer"><Social /></a></Button> : <Button variant="ghost" size="icon" key={i} aria-label={String(name)} onClick={() => setDialog(String(name))}><Social /></Button>; })}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Endolipo<sup>®</sup>. Todos os direitos reservados.</span><span>Seu corpo. Sua essência. Sua melhor versão.</span></div></footer>

    <Dialog open={dialog !== null} onOpenChange={open => { if (!open) setDialog(null); }}><DialogContent className="contact-dialog"><span className="dialog-mark"><HeartPulse /></span><DialogTitle>{dialog}</DialogTitle><DialogDescription>{dialog?.startsWith('Tratamento') ? 'A indicação do tratamento depende de uma avaliação individual com profissional habilitado.' : 'Entre em contato diretamente com nossa equipe oficial pelo WhatsApp para tirar dúvidas e agendar sua avaliação.'}</DialogDescription><div className="actions justify-center mt-3"><Button className="action whatsapp" asChild><a href={getWhatsAppUrl(`Olá! Gostaria de agendar uma avaliação para ${dialog?.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer"><MessageCircle /> Agendar pelo WhatsApp <ArrowRight /></a></Button><Button variant="outline" onClick={() => setDialog(null)}>Voltar ao site</Button></div></DialogContent></Dialog>
    <Dialog open={selectedImage !== null} onOpenChange={open => { if (!open) setSelectedImage(null); }}><DialogContent className="photo-dialog"><DialogTitle>Galeria Endolipo</DialogTitle><DialogDescription>Imagem ilustrativa de cuidado e bem-estar.</DialogDescription>{selectedImage && <img src={selectedImage} alt="Foto ampliada da galeria Endolipo" />}</DialogContent></Dialog>
  </main>;
}