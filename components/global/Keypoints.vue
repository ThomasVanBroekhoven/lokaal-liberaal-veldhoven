<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-secondary-50 overflow-hidden">
    <div class="relative mx-auto py-16 sm:py-24 px-4 max-w-md sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-secondary-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg>

      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-extrabold tracking-tight text-primary-500 sm:text-4xl">
            Zo kijken wij naar Veldhoven.
          </h2>
        </div>
        <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
          <div v-for="i in 8" :key="i">
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white">
                <!-- Heroicon name: outline/globe-alt -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <p class="mt-5 text-lg leading-6 font-medium text-gray-900">Competitive rates</p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
