import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.form.success'),
      duration: 5000,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <PageHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <p className="text-center text-muted-foreground mb-12 animate-fade-in">
          {t('contact.intro')}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="p-8 md:col-span-2 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.subject')}</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                {t('contact.form.send')}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <Card className="p-8 animate-slide-up">
            <h3 className="text-xl font-bold mb-6">{t('contact.info.title')}</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-sm mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">{t('contact.info.email')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-sm mb-1">Telefon</p>
                  <p className="text-sm text-muted-foreground">{t('contact.info.phone')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-sm mb-1">Standort</p>
                  <p className="text-sm text-muted-foreground">{t('contact.info.location')}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <p className="text-center text-muted-foreground mt-12 animate-fade-in">
          {t('contact.outro')}
        </p>
      </div>
    </div>
  );
};

export default Contact;
