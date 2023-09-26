<script>
    // export let news_source='';
    // export let author='';
    export let title='';
    export let description='';
    export let readMoreurl='';
    export let urlToImage='';
    
    // "content": "Sign up for CNNs Wonder Theory sciestay aboard … [+3200 chars]"
    // }
</script>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {#if urlToImage && urlToImage !== ''}
        <a href={readMoreurl}>
            <img class="rounded-t-lg aspect-video" src={urlToImage} alt="" />
        </a>
    {/if}
    <div class="p-5">
        <a href={readMoreurl}>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{description}</p>
        <a href={readMoreurl} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
