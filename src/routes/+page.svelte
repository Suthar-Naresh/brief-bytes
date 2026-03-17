<svelte:head>
    <title>Brief Bytes - Short on Time? Long on News!</title>
    <meta name="description" content="Brief Bytes simplifies news consumption with AI-powered summaries. Get concise yet informative summaries of top articles in seconds." />
    <meta property="og:title" content="Brief Bytes - News Summarized" />
    <meta property="og:description" content="Short on time? Get AI-powered news summaries. Stay informed in seconds." />
    <meta property="og:type" content="website" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl">
        <div class="mb-6">
            <span class="inline-block px-4 py-1.5 text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                AI-Powered News Summarization
            </span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Short on Time?
            <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Long on News!</span>
        </h1>

        <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get concise, machine-learning-powered summaries of the latest news. Stay informed without the overwhelm.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login"
                class="px-8 py-3.5 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
                Log In
            </a>
            <a href="/register"
                class="px-8 py-3.5 text-lg font-semibold text-indigo-300 bg-white/5 hover:bg-white/10 border border-indigo-500/30 rounded-xl transition-all duration-200"
            >
                Create Account
            </a>
        </div>

        <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <div class="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-3">
                    <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 class="text-white font-semibold mb-1">Instant Summaries</h3>
                <p class="text-gray-400 text-sm">ML-powered extractive summarization delivers key insights in seconds.</p>
            </div>
            <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                </div>
                <h3 class="text-white font-semibold mb-1">Multiple Categories</h3>
                <p class="text-gray-400 text-sm">Browse headlines, business, tech, sports, and entertainment news.</p>
            </div>
            <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <div class="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                    <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </div>
                <h3 class="text-white font-semibold mb-1">Full Articles</h3>
                <p class="text-gray-400 text-sm">Read summarized or full articles -- you choose how deep to dive.</p>
            </div>
        </div>
    </div>
</main>
