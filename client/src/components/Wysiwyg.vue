<template>
    <div>
        <quill-editor v-model="content">
        </quill-editor>
    </div>
</template>

<script>
export default {
    data() {
      return {
        content: ``,
      }
    }
  }
</script>

<style>

</style>