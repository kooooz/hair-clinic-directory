interface FaqQuestion {
  q: string;
  a: string;
}

interface Translations {
  [key: string]: {
    nav: {
      home: string;
      clinics: string;
      about: string;
      contact: string;
      compare: string;
      faq: string;
      recommendations: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      keywords: string;
    };
    about: {
      title: string;
      subtitle: string;
      experience: string;
      years: string;
      patients: string;
      satisfaction: string;
      content: string;
      keywords: string;
      clinics: string;
    };
    clinics: {
      title: string;
      subtitle: string;
      compare: string;
      rating: string;
      price: string;
      location: string;
      features: {
        experience: string;
        technology: string;
        doctors: string;
        results: string;
      };
      keywords: string;
    };
    contact: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      message: string;
      send: string;
      success: string;
      error: string;
    };
    faq: {
      title: string;
      questions: FaqQuestion[];
    };
    footer: {
      rights: string;
      privacy: string;
      terms: string;
      imprint: string;
      contact: string;
      social: string;
    };
  };
}

export const translations: Translations = {
  de: {
    nav: {
      home: 'Startseite',
      clinics: 'Kliniken',
      about: 'Über mich',
      contact: 'Kontakt',
      compare: 'Kliniken vergleichen',
      faq: 'Häufige Fragen',
      recommendations: 'Unsere Empfehlungen',
    },
    hero: {
      title: 'Finden Sie die beste Haarklinik in der Türkei',
      subtitle: 'Vergleichen Sie die Top-Kliniken und treffen Sie eine fundierte Entscheidung',
      cta: 'Kliniken vergleichen',
      keywords: 'Haartransplantation Türkei, Haarklinik Istanbul, Haartransplantation Kosten, Beste Haarklinik Türkei'
    },
    about: {
      title: 'Meine persönliche Erfahrung mit dem Thema Haartransplantation in der Türkei',
      subtitle: 'Vertrauen Sie auf jahrelange Erfahrung und Expertise',
      experience: 'Erfahrung',
      years: 'Jahre',
      patients: 'Patienten',
      satisfaction: 'Zufriedenheit',
      content: 'Als Experte für Haartransplantation in der Türkei helfe ich Ihnen, die beste Klinik für Ihre Bedürfnisse zu finden. Mit über 10 Jahren Erfahrung und mehr als 1.000 erfolgreichen Vermittlungen kenne ich die Top-Kliniken in Istanbul und der gesamten Türkei.',
      keywords: 'Haartransplantation Erfahrung, Haarklinik Experte, Haartransplantation Türkei Erfahrung',
      clinics: 'Kliniken'
    },
    clinics: {
      title: 'Top Haarkliniken in der Türkei',
      subtitle: 'Vergleichen Sie die besten Kliniken für Ihre Haartransplantation',
      compare: 'Kliniken vergleichen',
      rating: 'Bewertung',
      price: 'Preis',
      location: 'Standort',
      features: {
        experience: 'Erfahrung',
        technology: 'Moderne Technologie',
        doctors: 'Erfahrene Ärzte',
        results: 'Nachweisbare Ergebnisse'
      },
      keywords: 'Haarklinik Vergleich, Haartransplantation Preise, Beste Haarklinik Istanbul'
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Wir helfen Ihnen bei der Auswahl der richtigen Klinik',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Nachricht senden',
      success: 'Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.',
      error: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.'
    },
    faq: {
      title: 'Häufige Fragen zur Haartransplantation',
      questions: [
        {
          q: 'Was kostet eine Haartransplantation in der Türkei?',
          a: 'Die Kosten für eine Haartransplantation in der Türkei variieren je nach Klinik und Umfang des Eingriffs. Im Durchschnitt liegen sie zwischen 1.500€ und 3.000€, was deutlich günstiger ist als in Deutschland.'
        },
        {
          q: 'Wie lange dauert der Heilungsprozess?',
          a: 'Der Heilungsprozess dauert in der Regel 7-10 Tage. Die ersten Haare fallen nach 2-3 Wochen aus, und nach 3-4 Monaten beginnt das neue Haar zu wachsen.'
        },
        {
          q: 'Welche Klinik ist die beste für Haartransplantation?',
          a: 'Die beste Klinik hängt von Ihren individuellen Bedürfnissen ab. Wir helfen Ihnen, die passende Klinik basierend auf Erfahrung, Technologie und Bewertungen zu finden.'
        }
      ]
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      privacy: 'Datenschutz',
      terms: 'AGB',
      imprint: 'Impressum',
      contact: 'Kontakt',
      social: 'Folgen Sie uns'
    }
  },
  en: {
    nav: {
      home: 'Home',
      clinics: 'Clinics',
      about: 'About',
      contact: 'Contact',
      compare: 'Compare Clinics',
      faq: 'FAQ',
      recommendations: 'Our Recommendations',
    },
    hero: {
      title: 'Find the Best Hair Transplant Clinic in Turkey',
      subtitle: 'Compare top-rated clinics and make an informed decision for your hair transplant',
      cta: 'Compare Clinics',
      keywords: 'hair transplant Turkey, hair clinic Istanbul, hair transplant cost, best hair clinic Turkey'
    },
    about: {
      title: 'My Personal Experience with Hair Transplantation in Turkey',
      subtitle: 'Trust in years of expertise and successful patient outcomes',
      experience: 'Experience',
      years: 'Years',
      patients: 'Patients',
      satisfaction: 'Satisfaction',
      content: 'As an expert in hair transplantation in Turkey, I help you find the best clinic for your needs. With over 10 years of experience and more than 1,000 successful referrals, I know the top clinics in Istanbul and throughout Turkey.',
      keywords: 'hair transplant experience, hair clinic expert, hair transplant Turkey experience',
      clinics: 'Clinics'
    },
    clinics: {
      title: 'Top Hair Transplant Clinics in Turkey',
      subtitle: 'Compare the best clinics for your hair transplantation procedure',
      compare: 'Compare Clinics',
      rating: 'Rating',
      price: 'Price',
      location: 'Location',
      features: {
        experience: 'Experience',
        technology: 'Modern Technology',
        doctors: 'Experienced Doctors',
        results: 'Proven Results'
      },
      keywords: 'hair clinic comparison, hair transplant prices, best hair clinic Istanbul'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We help you choose the right clinic for your hair transplant',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Thank you for your message. We will get back to you as soon as possible.',
      error: 'There was a problem sending your message. Please try again later.'
    },
    faq: {
      title: 'Frequently Asked Questions About Hair Transplantation',
      questions: [
        {
          q: 'How much does a hair transplant cost in Turkey?',
          a: 'The cost of a hair transplant in Turkey varies depending on the clinic and the extent of the procedure. On average, prices range from €1,500 to €3,000, which is significantly lower than in other European countries.'
        },
        {
          q: 'How long is the recovery process?',
          a: 'The recovery process typically takes 7-10 days. The transplanted hair falls out after 2-3 weeks, and new hair growth begins after 3-4 months.'
        },
        {
          q: 'Which clinic is the best for hair transplantation?',
          a: 'The best clinic depends on your individual needs. We help you find the right clinic based on experience, technology, and patient reviews.'
        }
      ]
    },
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      imprint: 'Legal Notice',
      contact: 'Contact',
      social: 'Follow Us'
    }
  }
}; 