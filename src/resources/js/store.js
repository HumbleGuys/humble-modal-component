export default {
    id: null,

    toggle(id) {
        this.id = this.id === id ? null : id;
    },

    open(id) {
        this.id = id;
    },

    close() {
        this.id = null;
    },
};
