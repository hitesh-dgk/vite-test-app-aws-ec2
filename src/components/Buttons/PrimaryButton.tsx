import { twc } from 'react-twc';

const base =
  'inline-flex items-center justify-center rounded-30 text-sm font-medium transition-colors duration-300 ease-out disabled:pointer-events-none disabled:opacity-50';
const sizeDefault = 'h-11 px-6 py-3';
const variantPrimary =
  'bg-primary !important text-primary-foreground hover:bg-grey-800 hover:text-white';

export const PrimaryButton = twc.button.attrs({
  type: 'button',
})`${base} ${sizeDefault} ${variantPrimary}`;