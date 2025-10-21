import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Quote, Mail, Phone } from 'lucide-react';
import stefanSpuehlerImg from '@/assets/stefan-spuehler.jpg';

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
              {index === 0 && (
                <div className="mb-6 flex justify-center">
                  <img 
                    src={stefanSpuehlerImg} 
                    alt={ref.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-primary/10"
                  />
                </div>
              )}
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
              <p className="text-lg text-muted-foreground italic mb-6 relative z-10">
                {ref.text}
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-foreground">{ref.name}</p>
                <p className="text-sm text-muted-foreground mb-3">{ref.position}</p>
                {index === 0 && (
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${t('references.ref1.email')}`} className="hover:text-primary transition-colors">
                        {t('references.ref1.email')}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a href={`tel:${t('references.ref1.phone')}`} className="hover:text-primary transition-colors">
                        {t('references.ref1.phone')}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
