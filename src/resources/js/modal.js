export default ({ id, activeBodyClass, defaultOpen = false }) => ({
    isOpen: false,

    storage: null,

    init() {
        if (defaultOpen) {
            if (typeof defaultOpen == "boolean") {
                this.open();
            } else if (this.shouldBeOpened(defaultOpen)) {
                this.open();
            }
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

                if (this.storage) {
                    this.handleStorageBeforeClose();
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

    shouldBeOpened({ driver, id }) {
        if (!driver || !id) {
            return;
        }

        this.storage = {
            driver: driver,
            id: id,
        };

        if (driver === "localStorage") {
            return !window.localStorage.getItem(id);
        }

        if (driver === "sessionStorage") {
            return !window.sessionStorage.getItem(id);
        }
    },

    handleStorageBeforeClose() {
        if (this.storage.driver === "localStorage") {
            return window.localStorage.setItem(id, "seen");
        }

        if (this.storage.driver === "sessionStorage") {
            return window.sessionStorage.setItem(id, "seen");
        }
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
