const form = document.getElementById('contactForm');
const thankMessage = document.getElementById('thankMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // 페이지 새로고침 방지

    // 여기서 실제로 서버 전송 로직을 추가할 수도 있음

    thankMessage.classList.remove('hidden'); // 메시지 표시
    form.reset(); // 입력란 초기화

    // 3초 후 메시지 숨기기
    setTimeout(() => {
        thankMessage.classList.add('hidden');
    }, 3000);
});
