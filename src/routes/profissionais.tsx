import { createFileRoute } from '@tanstack/react-router';
import { ProfissionaisPage } from '@/components/profissionais';

export const Route = createFileRoute('/profissionais')({
  head: () => ({ meta: [
    { title: 'Endolipo® — Credenciamento e Formação para Profissionais da Saúde' },
    { name: 'description', content: 'Leve o protocolo exclusivo Endolipo® para sua clínica. Fature de R$ 25k a R$ 60k+/mês. Capacitação com reconhecimento do MEC ★★★★★ para Médicos, Biomédicos e Fisioterapeutas.' },
    { property: 'og:title', content: 'Endolipo® — Credenciamento Oficial de Profissionais da Saúde' },
    { property: 'og:description', content: 'Faça parte de uma rede exclusiva de alta rentabilidade. Inscrições abertas em Santa Catarina com turmas práticas hands-on.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ProfissionaisPage,
});
