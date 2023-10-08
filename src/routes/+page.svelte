<script>
    import { navigating } from "$app/stores";
    import ScaletonCard from "../components/ScaletonCard.svelte";
</script>

<main id="bg" class="w-screen h-screen">
    <div
        class="backdrop-brightness-50 backdrop-blur-[3px] w-full h-full flex justify-center items-center flex-col"
    >
        <h1 class="text-6xl font-semibold text-gray-100">
            Short on Time? Long on News!<br /> Summarize and Stay Updated.
        </h1>
        <br /><br /><br />
        <div class="flex">
            <a href="/login">
                <button
                    type="submit"
                    class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black inline-flex items-center"
                    >LOGIN</button
                >
            </a>

            <div class="flex">
                <a href="/register">
                    <button
                        type="submit"
                        class="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black inline-flex items-center"
                        >REGISTER</button
                    >
                </a>
            </div>
        </div>
    </div>
</main>

<style>
    #bg {
        background-image: url("/images/bg.jpg");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
</style>
