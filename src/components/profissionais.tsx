import { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Users, 
  Award, 
  ShieldCheck, 
  FileCheck2, 
  Megaphone, 
  Stethoscope, 
  MapPin, 
  MessageCircle, 
  Sparkles, 
  ChevronRight,
  HelpCircle,
  Menu,
  X,
  Instagram,
  Facebook,
  GraduationCap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  WHATSAPP_PHONE, 
  WHATSAPP_DISPLAY, 
  INSTAGRAM_URL, 
  FACEBOOK_URL, 
  getWhatsAppUrl,
  Logo
} from '@/components/endolipo';

export function getProfissionalWhatsAppUrl(cidade = '') {
  const msg = cidade 
    ? `Olá! Sou profissional da saúde e gostaria de saber mais sobre a capacitação e credenciamento Endolipo® em ${cidade}.`
    : 'Olá! Sou profissional da saúde e gostaria de receber informações sobre o credenciamento e próximas turmas de capacitação da Endolipo®.';
  return getWhatsAppUrl(msg);
}

export function ProfissionaisPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const pillars = [
    {
      icon: TrendingUp,
      title: 'Altamente Rentável',
      desc: 'Ticket médio de R$ 2.500 a R$ 4.000 por procedimento, com alta margem de lucro e rápido retorno sobre o investimento.'
    },
    {
      icon: Award,
      title: 'Marca Registrada',
      desc: 'Autoridade e credibilidade de um protocolo consolidado e patenteado no mercado nacional de estética avançada.'
    },
    {
      icon: Sparkles,
      title: 'Protocolo Exclusivo',
      desc: 'Tecnologia de fibra óptica de precisão minimamente invasiva, sem cortes, com recuperação no mesmo dia e resultados notáveis.'
    },
    {
      icon: GraduationCap,
      title: 'Capacitação Técnica MEC',
      desc: 'Treinamento completo teórico e prático (hands-on) em pacientes reais, com certificado reconhecido pelo MEC ★★★★★.'
    },
    {
      icon: Megaphone,
      title: 'Material de Marketing',
      desc: 'Acesso a criativos validados, fotos de casos, roteiros de consulta de alta conversão e suporte contínuo de captação.'
    },
    {
      icon: ShieldCheck,
      title: 'Respaldo Jurídico',
      desc: 'Termos de consentimento esclarecido, orientações éticas dos conselhos profissionais e total segurança jurídica para atuar.'
    }
  ];

  const audiences = [
    {
      role: 'Médicos',
      specialties: 'Dermatologia, Cirurgia Plástica, Medicina Estética e Integrativa'
    },
    {
      role: 'Biomédicos Estetas',
      specialties: 'Habilitados em procedimentos invasivos não cirúrgicos e contorno corporal'
    },
    {
      role: 'Fisioterapeutas',
      specialties: 'Dermatofuncionais com atuação em estética avançada e retração tecidual'
    },
    {
      role: 'Demais Profissionais',
      specialties: 'Farmacêuticos estetas e profissionais legalmente habilitados'
    }
  ];

  const locations = [
    {
      city: 'Florianópolis / SC',
      badge: 'Inscrições Abertas',
      dates: 'Turmas Mensais Confirmadas',
      status: 'Vagas limitadas para prática supervisionada'
    },
    {
      city: 'Balneário Camboriú / SC',
      badge: 'Inscrições Abertas',
      dates: 'BC e Região Metropolitana',
      status: 'Poucas vagas disponíveis para o polo'
    },
    {
      city: 'Blumenau / SC',
      badge: 'Turma em Seleção',
      dates: 'Vale do Itajaí e Região',
      status: 'Processo seletivo aberto para credenciados'
    }
  ];

  const faqs = [
    {
      q: 'Quem pode realizar a capacitação e se credenciar à Endolipo®?',
      a: 'A capacitação é destinada a Médicos, Biomédicos Estetas, Fisioterapeutas Dermatofuncionais, Farmacêuticos Estetas e profissionais da área da saúde habilitados por seus respectivos conselhos de classe para a realização de procedimentos estéticos injetáveis e minimamente invasivos.'
    },
    {
      q: 'O curso tem reconhecimento oficial pelo MEC?',
      a: 'Sim! A formação e capacitação técnica Endolipo® possui certificação reconhecida pelo MEC com nota máxima (★★★★★), garantindo autoridade acadêmica e validação para o seu currículo profissional.'
    },
    {
      q: 'Como é realizada a parte prática da capacitação?',
      a: 'As turmas são restritas e exclusivas, com modelo hands-on onde você aplica o protocolo diretamente em pacientes reais sob orientação e supervisão direta dos especialistas e desenvolvedores do método.'
    },
    {
      q: 'Recebo suporte após a conclusão do curso?',
      a: 'Com certeza. Ao se credenciar, você ingressa em nossa rede exclusiva com suporte técnico, jurídico e de marketing, além de acesso à comunidade de profissionais credenciados para troca contínua de experiências e dúvidas clínicas.'
    },
    {
      q: 'Qual é a rentabilidade esperada para a clínica?',
      a: 'Nossos profissionais relatam faturamento adicional entre R$ 25.000 e R$ 60.000+ ao mês, trabalhando com ticket médio entre R$ 2.500 e R$ 4.000 por área tratada, com alta retenção e recomendação de pacientes.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center shrink-0">
            <Logo className="text-2xl lg:text-3xl" />
            <span className="hidden sm:inline-flex items-center text-xs lg:text-[13px] font-bold uppercase tracking-wider text-brand-orange bg-orange-50/90 dark:bg-orange-950/60 border border-brand-orange/40 px-4 lg:px-5 py-2 rounded-full whitespace-nowrap ml-4 lg:ml-5 mr-5 lg:mr-7 shadow-xs">
              Área Profissional
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-xs xl:text-sm font-medium mr-4 xl:mr-8">
            <a href="#pilares" className="whitespace-nowrap hover:text-brand-orange transition-colors">6 Pilares</a>
            <a href="#publico" className="whitespace-nowrap hover:text-brand-orange transition-colors">Quem pode participar</a>
            <a href="#turmas" className="whitespace-nowrap hover:text-brand-orange transition-colors">Próximas Turmas</a>
            <a href="#faq" className="whitespace-nowrap hover:text-brand-orange transition-colors">Dúvidas</a>
            <a href="/" className="whitespace-nowrap text-muted-foreground hover:text-brand-orange text-xs uppercase tracking-wider transition-colors pl-3 border-l border-border">
              ← Voltar ao site
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Button 
              className="h-9 px-3.5 rounded-full bg-whatsapp text-white hover:opacity-95 font-semibold text-xs flex items-center gap-1.5 shadow-sm shrink-0 whitespace-nowrap transition-all" 
              asChild
            >
              <a href={getProfissionalWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Falar com Consultor</span>
              </a>
            </Button>

            <button 
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-b border-border px-6 py-6 space-y-4">
            <a 
              href="#pilares" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium py-1"
            >
              6 Pilares
            </a>
            <a 
              href="#publico" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium py-1"
            >
              Quem pode participar
            </a>
            <a 
              href="#turmas" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium py-1"
            >
              Próximas Turmas
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium py-1"
            >
              Dúvidas Frequentes
            </a>
            <a 
              href="/" 
              className="block text-sm text-brand-orange font-semibold pt-2 border-t border-border"
            >
              ← Voltar para a página inicial
            </a>
          </div>
        )}
      </header>

      {/* Hero Section B2B */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-background to-background py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Faça parte de uma Rede Exclusiva</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
                Fature de <span className="font-semibold text-brand-orange">R$ 25 a 60 mil+</span> por mês com a Endolipo<sup>®</sup>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Estamos selecionando <strong>Médicos, Biomédicos, Fisioterapeutas e profissionais habilitados</strong> para levar o protocolo de lipo sem cirurgia com fibra óptica para suas clínicas.
              </p>

              {/* Metrics Pill Grid */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:border-brand-orange/40 transition-colors">
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">+25k a 60k</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Faturamento mensal médio estimado</div>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:border-brand-orange/40 transition-colors">
                  <div className="text-2xl lg:text-3xl font-bold text-brand-orange">R$ 2.500 a 4.000</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Ticket médio por procedimento</div>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 shadow-sm hover:border-brand-orange/40 transition-colors">
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">+ LTV & Tempo</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Mais valorização e fidelização de clientes</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="action whatsapp h-14 px-8 text-base shadow-md" asChild>
                  <a href={getProfissionalWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span>Quero me credenciar agora</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <Button variant="outline" className="h-14 px-6 text-base" asChild>
                  <a href="#turmas">
                    Ver próximas turmas e cidades
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Vagas limitadas por polo
                </span>
                <span>•</span>
                <span>Inscrições abertas em Santa Catarina</span>
              </div>
            </div>

            {/* Right Image / Badge Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-md">
                
                {/* Hero professional banner */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/80 bg-muted aspect-[4/3]">
                  <img 
                    src="/profissional-saude.webp" 
                    alt="Profissional da saúde no ambiente clínico da Endolipo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-300">Capacitação Oficial</p>
                    <p className="text-sm font-medium">Treinamento prático individual supervisionado</p>
                  </div>
                </div>

                {/* Floating MEC Badge */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 filter drop-shadow-xl hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/selo-mec.svg" 
                    alt="Selo oficial: Reconhecido pelo MEC com nota máxima 5 estrelas" 
                    className="w-full h-full"
                  />
                </div>

                {/* Left Floating Tag */}
                <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-foreground">Rede Exclusiva Endolipo®</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6 Pillars Section */}
      <section className="py-20 bg-card border-b border-border" id="pilares">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="eyebrow">Diferenciais do Credenciamento</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
              Os <span className="font-semibold text-brand-orange">6 Pilares</span> do Sucesso na sua Clínica
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Tudo o que você precisa para dominar o método e transformar seu consultório em referência regional de contorno corporal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-background border border-border rounded-xl p-8 shadow-sm hover:shadow-md hover:border-brand-orange/50 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-brand-orange flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{pillar.title}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quem Pode Participar */}
      <section className="py-20 bg-background border-b border-border" id="publico">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="eyebrow">Público-Alvo Selecionado</span>
            <h2 className="text-3xl sm:text-4xl font-light">
              Estamos Selecionando <span className="font-semibold text-brand-orange">Profissionais Habilitados</span>
            </h2>
            <p className="text-muted-foreground text-base">
              A Endolipo<sup>®</sup> preza pelo rigor técnico, segurança médica e ética profissional em todas as unidades credenciadas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {audiences.map((aud, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border rounded-xl p-6 text-center space-y-3 hover:border-brand-orange/40 transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-orange-50 dark:bg-orange-950/40 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{aud.role}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {aud.specialties}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/40 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6">
            <img src="/selo-mec.svg" alt="MEC" className="w-20 h-20 shrink-0" />
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-foreground text-base">Certificação Oficial com Validação do MEC</h4>
              <p className="text-xs text-muted-foreground">
                Sua capacitação conta com o selo e chancela oficial do Ministério da Educação, conferindo respaldo acadêmico inquestionável para a sua prática estética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próximas Turmas & Cidades */}
      <section className="py-20 bg-card border-b border-border" id="turmas">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="eyebrow">Polos de Capacitação</span>
            <h2 className="text-3xl sm:text-4xl font-light">
              Próximas Turmas em <span className="font-semibold text-brand-orange">Santa Catarina</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Vagas limitadas por turma para garantir que cada profissional execute o protocolo completo sob supervisão direta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {locations.map((loc, idx) => (
              <div 
                key={idx}
                className="bg-background border-2 border-border hover:border-brand-orange rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {loc.badge}
                    </span>
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{loc.city}</h3>
                    <p className="text-sm font-medium text-brand-orange mt-1">{loc.dates}</p>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {loc.status}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border">
                  <Button 
                    className="w-full h-11 rounded-full bg-whatsapp text-white hover:opacity-95 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 px-3 shadow-sm transition-all" 
                    asChild
                  >
                    <a href={getProfissionalWhatsAppUrl(loc.city)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Consultar vagas</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dúvidas Frequentes (FAQ) */}
      <section className="py-20 bg-background border-b border-border" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <span className="eyebrow">Tire suas dúvidas</span>
            <h2 className="text-3xl sm:text-4xl font-light">
              Perguntas Frequentes dos <span className="font-semibold text-brand-orange">Profissionais</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-border rounded-xl bg-card overflow-hidden transition-colors"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-foreground hover:text-brand-orange transition-colors"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronRight 
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 text-brand-orange ${
                      faqOpen === idx ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Conversion Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl space-y-6">
          <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
            Vagas Limitadas por Turma
          </span>

          <h2 className="text-3xl sm:text-5xl font-light leading-tight">
            Transforme o faturamento e a autoridade da sua clínica agora.
          </h2>

          <p className="text-base sm:text-lg text-orange-100 max-w-xl mx-auto leading-relaxed">
            Fale diretamente com o consultor oficial de formação da Endolipo<sup>®</sup> e receba a grade programática, datas e valores de investimento.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="h-14 px-8 text-base bg-white text-orange-700 hover:bg-orange-50 shadow-xl font-bold" asChild>
              <a href={getProfissionalWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 text-emerald-600" />
                <span>Falar agora no WhatsApp</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          <p className="text-xs text-orange-200 pt-2">
            Atendimento direto pelo WhatsApp oficial: {WHATSAPP_DISPLAY}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 text-sm text-muted-foreground">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a href="/" className="brand text-2xl" aria-label="Endolipo">
              endolipo<sup>®</sup>
            </a>
            <span className="text-xs">| Formação & Credenciamento de Profissionais</span>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="/" className="hover:text-foreground transition-colors">Página Inicial</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Instagram className="w-3.5 h-3.5" /> Instagram
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Facebook className="w-3.5 h-3.5" /> Facebook
            </a>
          </div>

          <p className="text-xs text-center sm:text-right">
            © {new Date().getFullYear()} Endolipo<sup>®</sup>. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
