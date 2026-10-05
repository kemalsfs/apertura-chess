import { useEffect, useRef, type RefObject } from 'react';

const activeDialogs: HTMLElement[] = [];
const focusableSelector = 'button, [href], input, select, textarea, [tabindex], [contenteditable="true"]';

/** Keep keyboard interaction in the topmost dialog and restore its opener. */
export function useModalFocus(
  isOpen: boolean,
  onEscape: () => void,
  initialFocusRef?: RefObject<HTMLElement | null>,
) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const escapeRef = useRef(onEscape);

  useEffect(() => { escapeRef.current = onEscape; }, [onEscape]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    activeDialogs.push(dialog);
    const isTopmost = () => activeDialogs.at(-1) === dialog;
    const focusableElements = () => Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector))
      .filter(element => element.tabIndex >= 0 && !element.matches(':disabled')
        && !element.closest('[inert]') && element.getClientRects().length > 0
        && getComputedStyle(element).visibility !== 'hidden');
    const focusInside = () => {
      const elements = focusableElements();
      const initial = initialFocusRef?.current;
      (initial && elements.includes(initial) ? initial : elements[0] ?? dialog).focus();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isTopmost()) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        escapeRef.current();
      } else if (event.key === 'Tab') {
        const elements = focusableElements();
        const current = document.activeElement;
        const index = elements.findIndex(element => element === current);
        if (elements.length === 0 || index === -1 ||
            (event.shiftKey ? index === 0 : index === elements.length - 1)) {
          event.preventDefault();
          (event.shiftKey ? elements.at(-1) ?? dialog : elements[0] ?? dialog).focus();
        }
      }
    };
    const handleFocus = (event: FocusEvent) => {
      if (isTopmost() && event.target instanceof Node && !dialog.contains(event.target)) focusInside();
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('focusin', handleFocus);
    focusInside();
    return () => {
      const wasTopmost = isTopmost();
      activeDialogs.splice(activeDialogs.lastIndexOf(dialog), 1);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('focusin', handleFocus);
      if (wasTopmost && opener?.isConnected) opener.focus();
    };
  }, [isOpen, initialFocusRef]);

  return dialogRef;
}
