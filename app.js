const app = Vue.createApp({
    data() {
        return {
            message: 'Type here...',
            theme: 'light'
        };
    },

    computed: {
        htmlOutput() {
            return marked.parse(this.message);
        },

        charCount() {
            const textOnly = this.htmlOutput.replace(/<[^>]*>/g, '');
            return textOnly.length;
        },

        themeIcon() {
            return this.theme === 'dark' ? 'light_mode' : 'dark_mode';
        }
    },

    mounted () {
        const saved = localStorage.getItem('markdownText');
        if (saved) {
            this.message = saved;
        }

        const savedTheme = localStorage.getItem('theme');
        this.theme = savedTheme || 'light';

        document.documentElement
            .setAttribute('data-bs-theme', this.theme);
    },

    watch: {
        message(newMessage) {
            localStorage.setItem('markdownText', newMessage);
        },

        theme(newTheme) {
            localStorage.setItem('theme', newTheme);

            document.documentElement
                .setAttribute('data-bs-theme', newTheme);
        }
    },

    methods: {
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
        }
    }
});

app.mount('#app');
