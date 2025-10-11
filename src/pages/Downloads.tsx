import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Award, Briefcase } from 'lucide-react';

const Downloads = () => {
  const { t } = useLanguage();

  const downloadItems = [
    {
      icon: FileText,
      title: t('downloads.cv.title'),
      description: t('downloads.cv.desc'),
      button: t('downloads.cv.button'),
    },
    {
      icon: Award,
      title: t('downloads.certificate.title'),
      description: t('downloads.certificate.desc'),
      button: t('downloads.certificate.button'),
    },
    {
      icon: Briefcase,
      title: t('downloads.portfolio.title'),
      description: t('downloads.portfolio.desc'),
      button: t('downloads.portfolio.button'),
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <PageHeader title={t('downloads.title')} subtitle={t('downloads.subtitle')} />

        <p className="text-center text-muted-foreground mb-12 animate-fade-in">
          {t('downloads.intro')}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {downloadItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-8 animate-slide-up text-center hover:shadow-lg transition-shadow">
                <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  {item.button}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
