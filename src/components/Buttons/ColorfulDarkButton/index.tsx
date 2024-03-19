import { twc } from 'react-twc';
import styles from './ColorfulDarkButton.module.css';

const base =
  'inline-flex items-center justify-center rounded-30 text-sm font-medium transition-colors duration-300 ease-out';
const sizeDefault = 'h-11 px-4 py-3';
const variantDark = 'bg-grey-900';

export const ColorfulDarkButton = twc.button.attrs({
  type: 'button',
})`relative ${styles['colourful-outline']} ${base} ${sizeDefault} ${variantDark}`;