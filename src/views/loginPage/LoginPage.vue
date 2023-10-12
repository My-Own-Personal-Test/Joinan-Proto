<script setup lang="ts">
const _dialogState = useDialogState()
function openModal() {
  _dialogState.dialogTrigger({ content: 'modal-login', size: '2xl' })
}
</script>

<template>
  <div class="min-h-screen grid place-items-center">
    <CardRoot class="w-1/2 p-6">
      <div class="pb-8 pt-2 pl-2">
        <img
          src="@/assets/images/JoinanLogo.svg"
          class="w-44"
        >
      </div>
      <div class="w-2/3 mx-auto">
        <p class="mb-2 text-center text-3xl font-bold">
          Masuk
        </p>

        <div class="flex flex-col gap-y-4">
          <BaseInput
            id="email"
            label="Email"
            type="email"
          >
            <label for="email-input">
              email
            </label>
          </BaseInput>
          <BaseInput
            id="password"
            type="password"
            label="Password"
          >
            <label for="password-input">
              password
            </label>
          </BaseInput>
        </div>
      </div>

      <BaseButton
        id="login"
        class="btn-primary mt-6 mb-10 w-2/3 mx-auto"
        :disabled="false"
        @click="openModal"
      >
        <p>masuk</p>
        <BaseSpinner />
      </BaseButton>
    </CardRoot>
  </div>
</template>
