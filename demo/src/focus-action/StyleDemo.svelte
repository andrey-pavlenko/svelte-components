<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import 'svelte-highlight/styles/atom-one-dark.css';

  import useFocus from '@apsc/focus-action';

  let isActive1 = false;
  let isActive2 = false;
</script>

<section class="prose max-w-none my-4">
  <div class="mb-8 pb-2 border-b text-center text-gray-500">
    This example highlights a focused fieldset.
  </div>
  <div class="form">
    <div class="basis-1/2">
      <fieldset
        use:useFocus={[() => (isActive1 = true), () => (isActive1 = false)]}
        class:active={isActive1}
      >
        <legend>Your details</legend>
        <label>
          <span>Name</span>
          <input type="text" class="input" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" class="input" />
        </label>
        <label>
          <span>Phone</span>
          <input type="text" class="input" />
        </label>
      </fieldset>
      <div class="mt-8">
        <button
          type="button"
          class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8"
          >Submit</button
        >
      </div>
    </div>
    <fieldset
      class="basis-1/2"
      use:useFocus={[() => (isActive2 = true), () => (isActive2 = false)]}
      class:active={isActive2}
    >
      <legend>Delivery address</legend>
      <label>
        <span>Address</span>
        <textarea rows="3" class="input" />
      </label>
      <label>
        <span>Postcode</span>
        <input type="text" class="input" />
      </label>
      <label>
        <span>Country</span>
        <input type="text" class="input" />
      </label>
    </fieldset>
  </div>

  <h3>Code</h3>
  <HighlightSvelte
    code={`<${'script lang="ts"'}
  import useFocus from '@apsc/focus-action';

  let isActive1 = false;
  let isActive2 = false;
</script>

<section class="prose max-w-none my-4">
  <div class="form">
    <div class="basis-1/2">
      <fieldset
        use:useFocus={[() => (isActive1 = true), () => (isActive1 = false)]}
        class:active={isActive1}
      >
        <legend>Your details</legend>
        <label>
          <span>Name</span>
          <input type="text" class="input" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" class="input" />
        </label>
        <label>
          <span>Phone</span>
          <input type="text" class="input" />
        </label>
      </fieldset>
      <div class="mt-8">
        <button
          type="button"
          class="input bg-blue-600 hover:bg-blue-800 text-white !border-blue-800 !px-8"
          >Submit</button
        >
      </div>
    </div>
    <fieldset
      class="basis-1/2"
      use:useFocus={[() => (isActive2 = true), () => (isActive2 = false)]}
      class:active={isActive2}
    >
      <legend>Delivery address</legend>
      <label>
        <span>Address</span>
        <textarea rows="3" class="input" />
      </label>
      <label>
        <span>Postcode</span>
        <input type="text" class="input" />
      </label>
      <label>
        <span>Country</span>
        <input type="text" class="input" />
      </label>
    </fieldset>
  </div>
</section>

<${'style lang="postcss"'}>
  .form {
    @apply flex items-start gap-5;
  }
  .form fieldset {
    @apply p-2 border ring-blue-200 rounded-md;
  }
  .form fieldset.active {
    @apply ring-blue-200 ring-2;
  }
  .form fieldset.active legend {
    @apply text-blue-600;
  }
  .form fieldset legend {
    @apply bg-white px-2;
  }
  .form label {
    @apply block;
  }
  .form label .input {
    @apply w-full;
  }
</style>`}
  />
</section>

<style lang="postcss">
  .form {
    @apply flex items-start gap-5;
  }
  .form fieldset {
    @apply p-2 border ring-blue-200 rounded-md;
  }
  .form fieldset.active {
    @apply ring-blue-200 ring-2;
  }
  .form fieldset.active legend {
    @apply text-blue-600;
  }
  .form fieldset legend {
    @apply bg-white px-2;
  }
  .form label {
    @apply block;
  }
  .form label .input {
    @apply w-full;
  }
</style>
