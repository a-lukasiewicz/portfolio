<template>
  <div
    id="contact"
    class="w-full"
  >
    <div class="bg-mainLighter h-96" />
    <div class="max-w-5xl px-6 mx-auto mb-12 sm:px-6 lg:px-8">
      <div class="w-full p-8 bg-white rounded shadow sm:p-12 -mt-72">
        <p class="text-3xl font-bold leading-7 text-center">
          Skontaktuj się ze mną
        </p>
        <form
          id="form"
        >
          <div class="items-center mt-12 md:flex">
            <div class="flex flex-col w-full">
              <label class="font-semibold leading-none">Imię i nazwisko</label>
              <input
                type="text"
                class="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-mainLighter"
              >
            </div>
          </div>
          <div class="items-center mt-8 md:flex">
            <div class="flex flex-col w-full">
              <label class="font-semibold leading-none">Temat</label>
              <input
                type="text"
                class="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-mainLighter"
              >
            </div>
          </div>
          <div>
            <div class="flex flex-col w-full mt-8">
              <label class="font-semibold leading-none">Treść wiadomości</label>
              <textarea
                type="text"
                class="h-40 p-3 mt-4 text-base leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:oultine-none focus:border-mainLighter"
              />
            </div>
          </div>
          <div class="flex items-center justify-center w-full">
            <button
              class="px-10 py-4 font-semibold leading-none text-white rounded bg-mainLighter mt-9 hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
            >
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
