
function speak(lang) {
  const msg = new SpeechSynthesisUtterance("Welcome to PlayLovers Earning System");
  msg.lang = lang;
  window.speechSynthesis.speak(msg);
}
