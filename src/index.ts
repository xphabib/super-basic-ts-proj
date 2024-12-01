import { greet } from './utils';
import { handleClick } from './event';

// document.addEventListener('DOMContentLoaded', () => {
//
// });

// (window as any).addEventListener('click', handleClick);
(window as any).clickMe = function (): void {
    handleClick();
    console.log('clickMe');
}