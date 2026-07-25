import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, SendHorizontal } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import contactSectionBg from '/files/bg/Global-Agent-Customer-logo-grid-background-Version-3.webp';
import contactSectionBaseBg from '/files/bg/Education_Salesforce-for-Education_Marquee-Background_Version-1.webp';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    niche: '',
  });
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const N8N_WEBHOOK_URL = 'https://levinbiz.app.n8n.cloud/webhook/mail';

  const features = [
    { id: 'rag', label: 'Умная база знаний' },
    { id: 'gen', label: 'Генерация медиа' },
    { id: 'auto', label: 'Автоматизация лидов' },
    { id: 'other', label: 'Другое' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const selectedFeatureLabels = features
        .filter((feature) => selectedFeatures.includes(feature.id))
        .map((feature) => feature.label);

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedFeatures,
          selectedFeatureLabels,
          submittedAt: new Date().toISOString(),
          source: 'site-main_t/contact-form',
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook request failed: ${response.status}`);
      }

      setSubmitted(true);
      setFormData({ name: '', contactInfo: '', niche: '' });
      setSelectedFeatures([]);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('Failed to submit form to n8n webhook', error);
      setSubmitError('Не удалось отправить форму. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32 bg-slate-50"
      style={{
        backgroundImage: `url(${contactSectionBg}), url(${contactSectionBaseBg}), url(${contactSectionBaseBg})`,
        backgroundSize: '100% 45%, 100% 120%, 100% 120%',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'center center, center 330%, center bottom',
      }}
    >
      <div className="section-fade-top fade-rose"></div>
      <div className="section-fade-bottom fade-sand"></div>
      <div className="site-shell max-w-4xl">
        <SectionTitle
          title="Рассчитать стоимость проекта"
          subtitle="Заполните форму, и мы свяжемся с вами для обсуждения задач и оценки бюджета."
          className="mb-12 md:mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка отправлена</h3>
              <p className="text-slate-600">Мы скоро свяжемся с вами по указанным контактам для проведения оценки.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Имя *</label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                    placeholder="Иван"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contactInfo" className="text-sm font-medium text-slate-700">Email *</label>
                  <input
                    required
                    type="text"
                    id="contactInfo"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData((prev) => ({ ...prev, contactInfo: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                    placeholder="mail@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="niche" className="text-sm font-medium text-slate-700">Коротко о Вашем проекте *</label>
                <input
                  type="text"
                  id="niche"
                  value={formData.niche}
                  onChange={(e) => setFormData((prev) => ({ ...prev, niche: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  placeholder="Например: интернет-магазин одежды, необходим чат-бот для поддержки клиентов."
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium text-slate-700">Какие функции вас интересуют? (можно выбрать несколько)</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <label key={feature.id} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/50">
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feature.id)}
                        onChange={() => toggleFeature(feature.id)}
                        className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <span className="text-sm font-medium text-slate-700">{feature.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {submitError && (
                <p className="text-sm text-red-600 font-medium">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 disabled:bg-slate-500 text-white font-semibold py-4 px-8 rounded-xl transition-colors shadow-lg"
              >
                {isSubmitting ? 'Отправляем...' : 'Получить расчет стоимости'}
                <SendHorizontal size={18} />
              </button>
              <p className="text-xs text-center text-slate-500">
                Примерное время ответа: 2 часа в рабочее время.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
