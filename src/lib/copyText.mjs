/** @param {string} text @param {Document} document */
export function fallbackCopy(text, document) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = typeof document.execCommand === 'function' && document.execCommand('copy');
  textarea.remove();
  return copied;
}

/**
 * @param {string} text
 * @param {{ clipboard?: Pick<Clipboard, 'writeText'>, document: Document }} dependencies
 */
export async function copyText(text, dependencies) {
  try {
    if (dependencies.clipboard?.writeText) {
      await dependencies.clipboard.writeText(text);
      return true;
    }
  } catch {
    // 보안 정책 등으로 Clipboard API가 거부되면 기존 복사 방식으로 재시도합니다.
  }
  return fallbackCopy(text, dependencies.document);
}

/**
 * 여러 번 호출되어도 기존 초기화 예약을 취소하고 마지막 메시지만 유지합니다.
 * @param {{ setMessage: (message: string) => void, setTimer: (callback: () => void, delay: number) => unknown, clearTimer: (timer: unknown) => void, delay?: number }} dependencies
 */
export function createStatusController(dependencies) {
  let timer;
  return (message) => {
    dependencies.setMessage(message);
    if (timer !== undefined) dependencies.clearTimer(timer);
    timer = dependencies.setTimer(() => dependencies.setMessage(''), dependencies.delay ?? 3600);
  };
}
