import { createFileRoute } from '@tanstack/react-router';
import { EndolipoPage } from '@/components/endolipo';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Endolipo® — Menos gordura localizada. Mais você.' },
    { name: 'description', content: 'Conheça a Endolipo: tecnologia de precisão para gordura localizada, firmeza da pele e contorno corporal. Encontre uma clínica e agende sua avaliação.' },
    { property: 'og:title', content: 'Endolipo® — Sua melhor versão começa aqui' },
    { property: 'og:description', content: 'Tecnologia, cuidado personalizado e bem-estar. Conheça os tratamentos e a experiência Endolipo.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: EndolipoPage,
});
