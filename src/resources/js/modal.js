export default ({ id, activeBodyClass, defaultOpen = false }) => ({
    isOpen: false,

    storage: null,

    init() {
        this.storage = this.setStorage();

        if (this.shouldBeOpened()) {
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

    setStorage() {
        if (!defaultOpen || !defaultOpen.storage) {
            return;
        }

        return {
            driver: defaultOpen.storage,
            id: defaultOpen?.id || id,
        };
    },

    shouldBeOpened() {
        if (!defaultOpen) {
            return false;
        }

        if (typeof defaultOpen == "boolean") {
            return true;
        }

        if (!this.storage.driver || !this.storage.id) {
            return false;
        }

        if (this.storage.driver === "localStorage") {
            return !window.localStorage.getItem(this.storage.id);
        }

        if (this.storage.driver === "sessionStorage") {
            return !window.sessionStorage.getItem(this.storage.id);
        }
    },

    handleStorageBeforeClose() {
        if (this.storage.driver === "localStorage") {
            return window.localStorage.setItem(this.storage.id, "seen");
        }

        if (this.storage.driver === "sessionStorage") {
            return window.sessionStorage.setItem(this.storage.id, "seen");
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
