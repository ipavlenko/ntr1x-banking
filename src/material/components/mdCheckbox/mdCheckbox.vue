<template>
    <div class="md-checkbox" :class="[themeClass, classes]">
        <div class="md-checkbox-container" @click.stop="toggleCheck" v-md-ink-ripple="disabled" tabindex="0">
            <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value" tabindex="-1">
        </div>

        <label :for="id || name" class="md-checkbox-label" v-if="$slots.default">
            <slot></slot>
        </label>
    </div>
</template>

<style lang="scss" src="./mdCheckbox.scss"></style>

<script>
    import theme from '../../core/components/mdTheme/mixin'

    export default {
        props: {
            name: String,
            value: [String, Boolean],
            id: String,
            disabled: Boolean
        },
        mixins: [theme],
        data() {
            return {
                checked: this.value
            }
        },
        computed: {
            classes() {
                return {
                    'md-checked': Boolean(this.checked),
                    'md-disabled': this.disabled
                }
            }
        },
        watch: {
            value() {
                this.checked = this.value
            }
        },
        methods: {
            toggleCheck($event) {
                if (!this.disabled) {
                    this.checked = !this.checked
                    this.$emit('change', this.checked, $event)
                    this.$emit('input', this.checked, $event)
                }
            }
        }
    }
</script>
