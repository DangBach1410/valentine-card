app.component("gift-container", {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
    template:
    /*html*/
    `<div class="container">
        <h2>Gửi Lời Chúc Valentine</h2>
        <p>Hãy nhấn vào hộp quà để mở một thông điệp đặc biệt dành cho bạn!</p>
        <div class="gift-box" @click="openGift">🎁</div>
        <div class="message" id="message">{{message}}</div>
    </div>`,
    methods: {
        openGift() {
            const giftBox = document.querySelector(".gift-box");
            giftBox.style.animation = "none";
            giftBox.style.transform = "scale(1.2) rotate(360deg)";
            setTimeout(() => {
              giftBox.style.display = "none";
              this.showMessage();
              this.createHearts();
            }, 500);
        },
        showMessage() {
            this.$emit("show-message");
        },
        createHearts() {
            this.$emit("create-hearts");
        },
    }
});