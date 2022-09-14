const i = ({ id: e, activeBodyClass: s, defaultOpen: t = !1 }) => ({
  isOpen: !1,
  storage: null,
  init() {
    this.storage = this.setStorage(), this.shouldBeOpened() && this.open(), Alpine.effect(() => {
      this.$store.modal.id === e ? (this.isOpen = !0, document.body.style.overflow = "hidden", s && document.body.classList.add(s), this.$dispatch("opened")) : !this.$store.modal.id && this.isOpen && (this.isOpen = !1, document.body.style.overflow = "", s && document.body.classList.remove(s), this.storage && this.handleStorageBeforeClose(), this.$dispatch("closed"));
    }), document.addEventListener("keydown", (o) => {
      !this.isOpen || o.key === "Escape" && this.close();
    });
  },
  setStorage() {
    if (!(!t || !t.storage))
      return {
        driver: t.storage,
        id: (t == null ? void 0 : t.id) || e
      };
  },
  shouldBeOpened() {
    if (!t)
      return !1;
    if (typeof t == "boolean")
      return !0;
    if (!this.storage.driver || !this.storage.id)
      return !1;
    if (this.storage.driver === "localStorage")
      return !window.localStorage.getItem(this.storage.id);
    if (this.storage.driver === "sessionStorage")
      return !window.sessionStorage.getItem(this.storage.id);
  },
  handleStorageBeforeClose() {
    if (this.storage.driver === "localStorage")
      return window.localStorage.setItem(this.storage.id, "seen");
    if (this.storage.driver === "sessionStorage")
      return window.sessionStorage.setItem(this.storage.id, "seen");
  },
  toggle(o) {
    this.$store.modal.toggle(o);
  },
  close() {
    this.$store.modal.close();
  },
  open() {
    this.$store.modal.open(e);
  }
}), r = {
  id: null,
  toggle(e) {
    this.id = this.id === e ? null : e;
  },
  open(e) {
    this.id = e;
  },
  close() {
    this.id = null;
  }
};
document.addEventListener("alpine:init", () => {
  window.Alpine.data("modal", i), window.Alpine.store("modal", r);
});
