<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Error - Brief Bytes</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center px-6">
        <h1 class="text-6xl font-bold text-gray-800 mb-4">{$page.status}</h1>
        <p class="text-xl text-gray-600 mb-8">{$page.error?.message || 'Something went wrong'}</p>
        <a
            href="/news/main"
            class="inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
        >
            Back to News
        </a>
    </div>
</div>
