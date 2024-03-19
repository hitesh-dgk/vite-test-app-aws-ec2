import { twc } from 'react-twc';

const base =
  'inline-flex items-center justify-center rounded-30 text-sm font-medium transition-colors duration-300 ease-out';
const sizeDefault = 'h-11 px-4 py-3';
const variantOutline =
  'border border-white bg-background hover:bg-grey-800 hover:text-white';

export const OutlineButton = twc.button.attrs({
  type: 'button',
})`${base} ${sizeDefault} ${variantOutline}`;