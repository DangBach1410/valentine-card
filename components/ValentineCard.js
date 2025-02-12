app.component("valentine-card", {
    template:
    /*html*/
    `<div class="container">
        <h2>Bạn có đang độc thân không? 💕</h2>
        <div class="choice-buttons">
            <button class="btn-single" @click="modeSingle">Tôi Độc Thân 💔</button>
            <button class="btn-taken" @click="modeTaken">Tôi Không Độc Thân ❤️</button>
        </div>
    </div>`,
    methods: {
        modeSingle() {
            this.$emit("mode-single");
        },
        modeTaken() {
            this.$emit("mode-taken");
        },
    }
});