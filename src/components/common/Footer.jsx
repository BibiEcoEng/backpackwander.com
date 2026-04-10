import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("_subject", `Newsletter Subscription from ${email}`);
      formData.append("_next", window.location.href);
      formData.append("_captcha", "false");

      try {
        await fetch("https://formsubmit.co/ajax/info@backpackwander.com", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        setShowSuccess(true);
        setEmail("");
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } catch (error) {
        console.error("Newsletter subscription error:", error);
        // Still show success to user but log error
        setShowSuccess(true);
        setEmail("");
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-[#52a77f]">Backpack</span> Wander
            </h3>
            <p className="mb-4 text-gray-300 text-sm">
              {t('footer.aboutDescription')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#52a77f] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#52a77f] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#52a77f] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector('#engineering');
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className="text-gray-300 hover:text-[#52a77f] transition-colors text-left"
                >
                  {t('footer.pipelineQuality')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector('#digital');
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className="text-gray-300 hover:text-[#52a77f] transition-colors text-left"
                >
                  {t('footer.bwDigit')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className="text-gray-300 hover:text-[#52a77f] transition-colors text-left"
                >
                  {t('footer.contactLink')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t('footer.contactSection')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#52a77f] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {t('footer.address')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#52a77f] flex-shrink-0" />
                <a href="mailto:info@backpackwander.com" className="text-gray-300 hover:text-[#52a77f] transition-colors text-sm">
                  {t('footer.email')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-300 text-sm">
                  {t('footer.hrb')}
                </span>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t('footer.aboutUs')}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.aboutDescription')}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {t('footer.rights', { year: currentYear })}
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link
              to="/privacy-policy"
              className="hover:text-[#52a77f] transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <span>|</span>
            <Link
              to="/impressum"
              className="hover:text-[#52a77f] transition-colors"
            >
              {t('footer.impressum')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
