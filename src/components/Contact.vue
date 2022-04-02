<template lang="">
<div class="w-full">
    <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div class="max-w-5xl px-6 mx-auto mb-12 sm:px-6 lg:px-8">
        <div class="w-full p-8 bg-white rounded shadow sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center">Contact me</p>
            <form action="" method="post">
                <div class="items-center mt-12 md:flex">
                    <div class="flex flex-col w-full md:w-1/2">
                        <label class="font-semibold leading-none">Name</label>
                        <input type="text" class="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-blue-700" />
                    </div>
                    <div class="flex flex-col w-full mt-4 md:w-1/2 md:ml-6 md:mt-0">
                        <label class="font-semibold leading-none">Phone</label>
                        <input type="email" class="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-blue-700"/>
                    </div>
                </div>
                <div class="items-center mt-8 md:flex">
                    <div class="flex flex-col w-full">
                        <label class="font-semibold leading-none">Subject</label>
                        <input type="text" class="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-blue-700"/>
                    </div>
                    
                </div>
                <div>
                    <div class="flex flex-col w-full mt-8">
                        <label class="font-semibold leading-none">Message</label>
                        <textarea type="text" class="h-40 p-3 mt-4 text-base leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:oultine-none focus:border-blue-700"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class="px-10 py-4 font-semibold leading-none text-white bg-blue-700 rounded mt-9 hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Send message
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
</script>