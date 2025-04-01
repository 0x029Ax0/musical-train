<template>
    <div data-cy="form-field">

        <!-- Label -->
        <label :for="name" class="block mb-2 text-md text-black" v-if="label">
            {{ label }}<span v-if="required" class="text-red-600">*</span>
        </label>

        <!-- Input -->
        <div class="relative" v-if="!disabled">
            <div class="flex items-center"> 
                <span class="p-3 rounded-l-lg shadow text-sm text-gray-800" v-if="prepend">{{ prepend }}</span>
                <input
                    :id="name"
                    type="text"
                    v-model="mutableValue"
                    :placeholder="placeholder"
                    :autocomplete="autocomplete"
                    v-bind:maxlength="max > 0 ? max : null"
                    :class="{ 
                        'rounded-lg': props.rounded, 
                        'rounded-l-lg': props.roundedLeft, 
                        'rounded-r-lg': props.roundedRight
                    }"
                    class="bg-white border-2 border-gray-300 px-4 py-3 w-full outline-none"
                />
            </div>
            <div class="absolute -bottom-6 right-0 text-xs text-gray-600" v-if="max > 0">
                {{ mutableValue !== null ? mutableValue.length : 0 }}/{{ max }}
            </div>
        </div>

        <!-- Disabled input -->
        <div class="shadow px-4 py-3 w-full rounded-lg" v-if="disabled">
            {{ mutableValue }}
        </div>

        <!-- Hint -->
        <div class="text-gray-400 text-sm mt-2" 
            :class="{ 'pr-12': hasMax }"
            v-if="hasHint && !hasError">
            {{ hint }}
        </div>

        <!-- Errors -->
        <div data-cy="form-field-error" class="text-red-500 text-sm mt-1" v-if="hasError"
            :class="{ 'mr-8': max > 0 }">
            {{ errors }}
        </div>

    </div>
</template>

<script setup>

    // Import modules
    import { ref, watch, computed, onMounted } from "vue"

    // Define properties
    const props = defineProps({
        name: String,
        label: String,
        errors: String,
        modelValue: String,
        hint: String,
        placeholder: {
            type: String,
            default: ""
        },
        prepend: {
            type: String,
            default: ""
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        rounded: {
            type: Boolean,
            default: true,
        },
        roundedLeft: {
            type: Boolean,
            default: false,
        },
        roundedRight: {
            type: Boolean,
            default: false,
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        max: {
            type: Number,
            default: 0
        }
    })

    // Define emits
    const emit = defineEmits([
        "update:modelValue"
    ])

    // Mutable value
    const mutableValue = ref("")

    // Watch mutable value
    watch (mutableValue, (newValue) => {
        // Send new value up stream
        emit("update:modelValue", newValue)
    })

    // Watch prop modelValue
    watch(() => props.modelValue, (newValue) => {
        mutableValue.value = newValue
    })

    // Determine if we got a hint to display
    const hasHint = computed(() => {
        return props.hint !== undefined
            && props.hint !== null
            && props.hint !== ""
    })

    // Determine if we got an error to display
    const hasError = computed(() => {
        return props.errors !== undefined
            && props.errors !== null
            && props.errors !== ""
    })

    // Determine if we are displaying the max characters
    const hasMax = computed(() => {
        return props.max !== undefined
            && props.max !== null
            && props.max !== ""
            && parseInt(props.max) > 0
    })

    // Initialize the mutable value
    onMounted(() => {
        if (props.modelValue !== undefined && props.modelValue !== null) {
            mutableValue.value = props.modelValue
        }
    })
    
</script>