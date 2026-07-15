import assert from 'node:assert/strict';
import test from 'node:test';
import { copyText, createStatusController } from '../src/lib/copyText.mjs';

function fakeDocument(copyResult = true) {
  let selected = false;
  const node = {
    value: '', style: {}, setAttribute() {}, remove() {}, select() { selected = true; },
  };
  return {
    body: { appendChild() {} },
    createElement() { return node; },
    execCommand(command) { return command === 'copy' && copyResult; },
    get selected() { return selected; },
  };
}

test('Clipboard API로 화면에 표시된 전체 문자열을 복사한다', async () => {
  let copied = '';
  const document = fakeDocument();
  const result = await copyText('화면에 표시된 문의 양식', {
    clipboard: { async writeText(text) { copied = text; } },
    document,
  });
  assert.equal(result, true);
  assert.equal(copied, '화면에 표시된 문의 양식');
});

test('Clipboard API 실패 시 fallback 복사를 시도한다', async () => {
  const document = fakeDocument();
  const result = await copyText('문의 양식', {
    clipboard: { async writeText() { throw new Error('denied'); } },
    document,
  });
  assert.equal(result, true);
  assert.equal(document.selected, true);
});

test('Clipboard API와 fallback이 모두 실패하면 false를 반환한다', async () => {
  const result = await copyText('문의 양식', { document: fakeDocument(false) });
  assert.equal(result, false);
});

test('상태 메시지는 마지막 호출을 기준으로 일정 시간 후 초기화된다', () => {
  let message = '';
  let callback;
  let clearedTimer;
  const showStatus = createStatusController({
    setMessage(value) { message = value; },
    setTimer(next) { callback = next; return 7; },
    clearTimer(timer) { clearedTimer = timer; },
  });

  showStatus('문의 양식을 복사했습니다');
  showStatus('문의 양식을 복사했습니다');
  assert.equal(message, '문의 양식을 복사했습니다');
  assert.equal(clearedTimer, 7);
  callback();
  assert.equal(message, '');
});
