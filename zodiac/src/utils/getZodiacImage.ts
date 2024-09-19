import ariesImage from '../assets/aries.png';
import taurusImage from '../assets/taurus.png'; 
import geminiImage from '../assets/gemini.png';
import cancerImage from '../assets/cancer.png';
import leoImage from '../assets/leo.png';
import virgoImage from '../assets/virgo.png';
import libraImage from '../assets/libra.png';
import scorpioImage from '../assets/scorpio.png';
import saggitariusImage from '../assets/saggitarius.png';
import capricornImage from '../assets/capricorn.png';
import aquariusImage from '../assets/aquarius.png';
import piscesImage from '../assets/pisces.png';
import { Zodiac } from '../types/zodiac';

const imageMap: Record<string, string> = {
    aries: ariesImage,
    taurus: taurusImage,
    gemini: geminiImage,
    cancer: cancerImage,
    leo: leoImage,
    virgo: virgoImage,
    libra: libraImage,
    scorpio: scorpioImage,
    saggitarius: saggitariusImage,
    capricorn: capricornImage,
    aquarius: aquariusImage,
    pisces: piscesImage,
}

export const getZodiacImage = (zodiac: Zodiac) => imageMap[zodiac.toLowerCase()] || "";