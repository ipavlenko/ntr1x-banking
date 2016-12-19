const validation = {
    email: /^([a-zA-Z0-9_\\.\\-]+)@([a-zA-Z0-9_\\.\\-]+)\.([a-zA-Z0-9]{2,})$/
}

export default {
    name: 'signin',
    props: {
        id: Number
    },
    data: function () {
        return {
            form: this.form,
            validation: this.validation
        }
    },
    created: function () {
        this.validation = {
            email: { dirty: false },
            password: { dirty: false }
        }
        this.form = {
            email: null,
            password: null
        }
        this.$watch('form', () => {
            this.validation.email = {
                dirty: true,
                required: this.form.email == null || this.form.email === '',
                illegal: this.form.email != null && !validation.email.test(this.form.email)
            }
            this.validation.password = {
                dirty: true,
                required: this.form.password == null || this.form.password === '',
                illegal: this.form.password != null && this.form.password.length < 8
            }
            this.validation.valid =
                   !this.validation.email.required &&
                   !this.validation.email.illegal &&
                   !this.validation.password.required &&
                   !this.validation.password.illegal
        }, { deep: true })
    },
    methods: {
        submit: function () {
            this.$store
                .dispatch('security/signin', this.form)
                .then(
                    (d) => {
                        this.$router.push({ path: this.$route.query.redirect || '/' })
                    }
                )
        }
    }
}
