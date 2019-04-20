import 'path';

try {
  document;
} catch (e) {
  throw new Error('Must be run in explorer');
}
const editor = document.getElementById('editor');
editor.innerText = 'test';
