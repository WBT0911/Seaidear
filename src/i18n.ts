import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Use this language if the translation in the specified language is not available
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    resources: {
      en: {
        translation: {
          logo: "Seaidear",
          language: "English",
          viewTitle : "Enterpreneur",
          viewAnswer  :"Best Coding Service For Crypto Investors",
          viewContent: "Providing customer services since July 2024",
          viewResult: "Products Sold",
          viewQuality : "Product Quality",
          views : "reviews",
          products : "Products",
          contact : "Contact",
          feedback : "Feedback",
          faq : "F.A.Q",
          terms : "Terms",
          trustedAdvisor : "Trusted Advisor",
          identify : "Identify Verified",
          identifyDesc : "This business has verified its identity and details to Sellix. Verified businesses have gone through an address and document validation phase which confirms their identity and the uniqueness of the merchant.",
          lowSales : "Low sales in the last 14 days",
          lowSalesDesc : "This metric takes into consideration the quantity of sales this business had in the last 14 days. High and Medium sales mean that the business has been proactively selling goods with at least one order daily.",
          appreal : " 0 feedback appeal ratio",
          apprealDesc : "The feedback appeal ratio takes into consideration the total amount of feedback a merchant has and how many have been appealed (either removed or contested). The appeal ratio has a value between 0.00 and 1, where 0.10 corresponds to 10% of all feedback appealed.",
          score : " 5 feedback score",
          scoreDesc : "The feedback score helps customers understand whether or not this business has had positive feedback recently, meaning that every customer purchased a valid good.",
          paypal : "PayPal or Credit/Debit cards not accepted",
          paypalDesc : "This merchant does not accept any payment method with consumer protection. For example, Cryptocurrencies and Cash App cannot accept refunds due to their nature. Proceed with caution and be sure that you know what you're buying.",
          question : "What is Trusted Advisor and what does this mean for customers?",
          footer : "E-commerce solution powered by Seaidear  ",
          footerDesc : "Could not connect to the reCAPTCHA service. Please check your internet connection and reload to get a reCAPTCHA challenge.",

        },
      },
      fr: {
        translation: {
          views: "Bienvenue"
        },
      },
      es: {
        translation: {
          views: "Bienvenido"
        },
      },
      de: {
        translation: {
          views: "Willkommen"
        },
      },
      it: {
        translation: {
          views: "Benvenuto"
        },
      },
      // Add more languages here
    },
  });

export default i18n;