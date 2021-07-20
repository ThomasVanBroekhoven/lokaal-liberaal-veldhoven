<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-secondary-50 py-16 sm:py-24">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div class="relative sm:py-16 lg:py-0">
        <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
          <svg
            class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" class="text-secondary-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          <!-- Testimonial card-->
          <div class="relative pt-72 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img
              class="absolute inset-0 h-full w-full object-cover"
              src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2 class="text-3xl text-primary-500 font-extrabold tracking-tight sm:text-4xl">
            Wij zijn Lokaal Liberaal
          </h2>
          <div class="mt-6 text-gray-500 space-y-6">
            <p class="text-lg">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
              porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
            <p class="text-base leading-7">
              Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit
              faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim
              sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
            </p>
          </div>
        </div>

        <!-- Stats section -->
        <div class="mt-10">
          <div>
            <a href="#" class="text-base font-medium text-secondary-600">
              Meer over onze mensen <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
