import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Resume = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <PageHeader title={t('resume.title')} subtitle={t('resume.subtitle')} />

        {/* Download Section */}
        <Card className="p-8 mb-8 animate-slide-up text-center">
          <h2 className="text-2xl font-bold mb-4">{t('resume.download.title')}</h2>
          <p className="text-muted-foreground mb-6">{t('resume.download.text')}</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Download className="mr-2 h-5 w-5" />
            {t('resume.download.button')}
          </Button>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="p-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-6">{t('resume.contact.title')}</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{t('resume.contact.email')}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{t('resume.contact.phone')}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{t('resume.contact.location')}</span>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="p-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-6">{t('resume.timeline.title')}</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <p className="font-semibold">{t('resume.timeline.2020')}</p>
              </div>
              <div className="border-l-2 border-muted pl-4">
                <p className="text-muted-foreground">{t('resume.timeline.2016')}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Motivation */}
        <Card className="p-8 mt-8 animate-slide-up">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Heart className="mr-2 h-6 w-6 text-primary" />
            {t('resume.motivation.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('resume.motivation.text')}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
