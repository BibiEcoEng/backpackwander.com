import React from 'react';
import { SparklesCore } from './ui/Sparkel';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  const getEngineeringLink = () => {
    return i18n.language === 'de'
      ? 'https://www.pipelinequality.com/de/'
      : 'https://www.pipelinequality.com/en/';
  };

  const getDigitalLink = () => {
    return 'https://www.bwdigit.com/';
  };

  return (
    <div className='relative top-5 md:top-5 font-rubik py-10 bg-black text-white flex items-center justify-center min-h-screen'>
      {/* Background Image */}
      <img
        src='/images/background.png'
        alt='Hero Background'
        className='w-full max-sm:h-screen md:h-auto object-cover absolute inset-0 z-0'
      />

      {/* Sparkles Effect */}
      <div className='absolute top-[50%] inset-0'>
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={2}
          particleDensity={1200}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />
        <div className='absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(550px_500px_at_top,transparent_50%,white)]'></div>
      </div>

      {/* Content Container */}
      <div className='w-full flex flex-col items-center justify-center overflow-hidden rounded-md px-4 md:px-6 lg:px-8 z-20 relative py-20'>
        {/* Headline */}
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl mb-6'
        >
          {t('hero.headline')} <span className='text-[#52a77f]'></span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className='text-lg sm:text-xl text-gray-300 text-center max-w-3xl mb-12'
        >
          {t('hero.subheadline')}
        </motion.p>

        {/* Two Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mb-12'
        >
          {/* Pipeline Quality Card */}
          <div className='bg-black/50 backdrop-blur-md border border-[#52a77f]/30 rounded-xl p-8 hover:border-[#52a77f]/60 transition-all duration-300'>
            <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
              {t('hero.pipelineQuality.title')}
            </h2>
            <p className='text-gray-300 mb-6'>
              {t('hero.pipelineQuality.subtitle')}
            </p>
            <ul className='space-y-3 mb-8'>
              {t('hero.pipelineQuality.services', { returnObjects: true }).map((service, idx) => (
                <li key={idx} className='flex items-start gap-3'>
                  <span className='text-[#52a77f] font-bold text-lg'>•</span>
                  <span className='text-gray-200'>{service}</span>
                </li>
              ))}
            </ul>
            <motion.a
              href={getEngineeringLink()}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='block w-full bg-[#52a77f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3d8a66] transition-colors text-center'
            >
              {t('hero.pipelineQuality.button')}
            </motion.a>
          </div>

          {/* BW Digit Card */}
          <div className='bg-black/50 backdrop-blur-md border border-[#52a77f]/30 rounded-xl p-8 hover:border-[#52a77f]/60 transition-all duration-300'>
            <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
              {t('hero.bwDigit.title')}
            </h2>
            <p className='text-gray-300 mb-6'>
              {t('hero.bwDigit.subtitle')}
            </p>
            <ul className='space-y-3 mb-8'>
              {t('hero.bwDigit.services', { returnObjects: true }).map((service, idx) => (
                <li key={idx} className='flex items-start gap-3'>
                  <span className='text-[#52a77f] font-bold text-lg'>•</span>
                  <span className='text-gray-200'>{service}</span>
                </li>
              ))}
            </ul>
            <motion.a
              href={getDigitalLink()}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='block w-full bg-[#52a77f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3d8a66] transition-colors text-center'
            >
              {t('hero.bwDigit.button')}
            </motion.a>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className='bg-gradient-to-r from-[#52a77f]/10 to-[#52a77f]/5 border border-[#52a77f]/30 rounded-xl p-8 md:p-12 max-w-3xl w-full'
        >
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
            {t('hero.mission.title')}
          </h3>
          <p className='text-gray-300 text-lg leading-relaxed'>
            {t('hero.mission.content')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
