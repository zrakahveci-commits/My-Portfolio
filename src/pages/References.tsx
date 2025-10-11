import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const References = () => {
  const { t } = useLanguage();

  const references = [
    {
      name: t('references.ref1.name'),
      position: t('references.ref1.position'),
      text: t('references.ref1.text'),
    },
    {
      name: t('references.ref2.name'),
      position: t('references.ref2.position'),
      text: t('references.ref2.text'),
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <PageHeader title={t('references.title')} subtitle={t('references.subtitle')} />

        <p className="text-center text-muted-foreground mb-12 animate-fade-in">
          {t('references.intro')}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {references.map((ref, index) => (
            <Card key={index} className="p-8 animate-slide-up relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
              <p className="text-lg text-muted-foreground italic mb-6 relative z-10">
                {ref.text}
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-foreground">{ref.name}</p>
                <p className="text-sm text-muted-foreground">{ref.position}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
