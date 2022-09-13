export default ({ id, activeBodyClass, defaultOpen = false }) => ({
    isOpen: false,

    init() {
        if (defaultOpen) {
            this.open();
        }

        Alpine.effect(() => {
            if (this.$store.modal.id === id) {
                this.isOpen = true;
                document.body.style.overflow = "hidden";

                if (activeBodyClass) {
                    document.body.classList.add(activeBodyClass);
                }

                this.$dispatch("opened");
            } else if (!this.$store.modal.id && this.isOpen) {
                this.isOpen = false;
                document.body.style.overflow = "";

                if (activeBodyClass) {
                    document.body.classList.remove(activeBodyClass);
                }

                this.$dispatch("closed");
            }
        });

        document.addEventListener("keydown", (event) => {
            if (!this.isOpen) {
                return;
            }

            if (event.key === "Escape") {
                this.close();
            }
        });
    },

    toggle(id) {
        this.$store.modal.toggle(id);
    },

    close() {
        this.$store.modal.close();
    },

    open() {
        this.$store.modal.open(id);
    },
});
