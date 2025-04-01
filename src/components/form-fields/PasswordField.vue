<template>
    <div data-cy="form-field">

        <!-- Label -->
        <label :for="name" class="block mb-2 text-md text-black">
            {{ label }}<span v-if="required" class="text-red-600">*</span>
        </label>

        <!-- Input -->
        <input
            :id="name"
            type="password"
            v-model="mutableValue"
            :autocomplete="autocomplete"
            class="bg-white border-2 border-gray-300 px-4 py-3 w-full rounded-lg outline-none" />

        <!-- Errors -->
        <div data-cy="form-field-error" class="text-red-500 text-sm mt-1" v-if="errors">
            {{ errors }}
        </div>
        
    </div>
</template>

<script setup>

    // Import modules
    import { ref, onMounted, watch } from "vue"

    // Define properties
    const props = defineProps({
        name: String,
        label: String,
        errors: String,
        modelValue: String,
        hint: String,
        required: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: String,
            default: "on"
        }
    })

    // Define events
    const emit = defineEmits([
        "update:modelValue"
    ])

    // Mutable value
    const mutableValue = ref("")

    // Watch mutable value
    watch (mutableValue, (newValue) => {
        // Send new value upstream
        emit("update:modelValue", newValue)
    })
    
    // Watch prop modelValue
    watch(() => props.modelValue, (newValue) => {
        mutableValue.value = newValue
    })

    // Initialize the mutable value onMount
    onMounted(() => {
        if (props.modelValue !== undefined && props.modelValue !== null) {
            mutableValue.value = props.modelValue
        }
    })

</script>