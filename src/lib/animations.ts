
import { keyframes } from 'tailwindcss';

export const fadeIn = keyframes({
  from: { opacity: '0', transform: 'translateY(10px)' },
  to: { opacity: '1', transform: 'translateY(0)' },
});

export const scaleIn = keyframes({
  from: { transform: 'scale(0.95)', opacity: '0' },
  to: { transform: 'scale(1)', opacity: '1' },
});

export const slideIn = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
});
