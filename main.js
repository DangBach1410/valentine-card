const app = Vue.createApp({
  data() {
    return {
      toggle: true,
      message: '',
      messagesSingle: [
        "Chúc mừng Valentine! Hãy tận hưởng ngày hôm nay thật vui vẻ và tràn đầy yêu thương!",
        "Mặc dù bạn đang độc thân, nhưng bạn xứng đáng được yêu thương hơn bao giờ hết. Chúc bạn một ngày tuyệt vời!",
        "Chúc bạn luôn vui vẻ và yêu đời, dù không có người yêu, nhưng luôn có bạn bè và gia đình bên cạnh!"
      ],
      messagesTaken: [
        "Chúc mừng Valentine! Hãy luôn yêu thương và trân trọng nhau, bạn thật may mắn khi có người yêu tuyệt vời!",
        "Chúc bạn và người yêu có một ngày Valentine ngọt ngào và lãng mạn! Cùng nhau tạo ra những kỷ niệm đẹp.",
        "Mỗi ngày bên người yêu là một món quà tuyệt vời. Chúc các bạn một ngày Valentine đầy yêu thương!"
      ],
    };
  },
  methods: {
    playMusic() {
      const music = document.getElementById("music");
      music.volume = 1.0;
      music.play().catch(function (error) {
        console.error("Không thể phát nhạc: ", error);
      });
    },
    showMessage() {
      const messageElement = document.getElementById("message");
      messageElement.style.display = "inline-block";
      this.playMusic();
    },
    createHearts() {
      const heartSize = 50;
      for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("hearts");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * (window.innerWidth - heartSize) + "px";
        heart.style.top = Math.random() * (window.innerHeight - heartSize) + "px";
        document.body.appendChild(heart);
        heart.style.animationDuration = Math.random() * 2 + 1 + "s";
      }
    },
    changeToSingle() {
      this.toggle = false;
      const randomIndex = Math.floor(Math.random() * this.messagesSingle.length);
      this.message = this.messagesSingle[randomIndex];
    },
    changeToTaken() {
      this.toggle = false;
      const randomIndex = Math.floor(Math.random() * this.messagesTaken.length);
      this.message = this.messagesTaken[randomIndex];
    }
  },
});
