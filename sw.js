// 솔해연 인력관리 — 설치(홈 화면 추가)용 최소 서비스 워커. 캐시하지 않고 네트워크 그대로 사용.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
