<template>
  <div class="proposal-page min-h-screen font-sans bg-[#F9FAFB] text-[#09090b]">
    
    <!-- Printable PDF Layout (Hidden on Screen) -->
    <div class="print-only hidden font-sans text-gray-900 bg-white mx-auto min-h-screen flex-col">
        <div class="flex justify-between items-center border-b-2 border-gray-800 pb-2 mb-4">
            <img src="/images/dagsolution-light-logo.png" class="h-14 object-contain" alt="DAGSOLUTION" />
            <div class="text-right">
                <h1 class="text-xl font-bold text-gray-800 uppercase tracking-wide m-0">{{ $t('proposal.pdf.title') }}</h1>
                <p class="text-gray-500 mt-1 m-0">Tarih: {{ new Date().toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US') }}</p>
            </div>
        </div>

        <div v-if="clientName" class="mb-2">
            <h2 class="font-bold text-gray-800 m-0">{{ $t('proposal.pdf.clientName', { name: clientName }) }}</h2>
        </div>

        <!-- Table -->
        <div class="border border-gray-300 rounded overflow-hidden mb-4">
            <table class="w-full text-left border-collapse">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="py-1 px-2 font-bold text-gray-800 w-3/4 border-b border-gray-300">{{ $t('proposal.pdf.service') }}</th>
                        <th class="py-1 px-2 font-bold text-gray-800 text-right border-b border-gray-300">{{ $t('proposal.pdf.price') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-200">
                        <td class="py-1 px-2 text-gray-700 font-bold">{{ coreDevTitle }} <span class="text-gray-500 font-normal" v-if="projectType === 'mobile' || projectType === 'web'">({{ Math.max(projectType === 'mobile' ? 8 : 5, pageCount || (projectType === 'mobile' ? 8 : 5)) }} pages)</span></td>
                        <td class="py-1 px-2 text-right font-mono">${{ frontendPrice }}</td>
                    </tr>
                    <tr v-if="backendEnabled" class="border-b border-gray-200">
                        <td class="py-1 px-2 text-gray-700 font-bold">{{ $t('proposal.calc.backend') }}</td>
                        <td class="py-1 px-2 text-right font-mono">${{ backendPrice }}</td>
                    </tr>
                    <tr v-if="deliveryFee > 0" class="border-b border-gray-200">
                        <td class="py-1 px-2 text-gray-700 font-bold">{{ deliveryTime === 14 ? $t('proposal.calc.days14') : $t('proposal.calc.days21') }}</td>
                        <td class="py-1 px-2 text-right font-mono">${{ deliveryFee }}</td>
                    </tr>
                    <tr v-for="f in features.filter(x => x.type === 'number' ? x.count > 0 : x.selected)" :key="f.id" class="border-b border-gray-100">
                        <td class="py-0.5 px-2 text-gray-600 pl-4">• {{ f.labelTr ? (locale === 'tr' ? f.labelTr : f.labelEn) : $t(`proposal.features.${f.id}`) }} <span v-if="f.type === 'number'">({{ f.count }})</span></td>
                        <td class="py-0.5 px-2 text-right font-mono text-gray-600">${{ f.type === 'number' ? f.count * f.price : f.price }}</td>
                    </tr>
                </tbody>
                <tfoot class="bg-gray-50">
                    <tr>
                        <td class="py-2 px-2 font-bold text-left text-gray-900 border-t-2 border-gray-800">{{ $t('proposal.pdf.total') }}:</td>
                        <td class="py-2 px-2 font-bold text-right text-gray-900 font-mono border-t-2 border-gray-800">${{ totalPrice.toLocaleString() }}</td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <div class="text-gray-600 mb-6">
            <p class="m-0">{{ $t('proposal.pdf.validity') }}</p>
        </div>

        <!-- Signatures -->
        <div class="flex justify-between items-end pt-2">
            <div class="w-1/3">
                <p class="font-bold text-gray-800 mb-16 border-b border-gray-300 pb-1">{{ $t('proposal.pdf.clientSignature') }}</p>
                <p class="text-gray-500 text-center m-0">{{ $t('proposal.pdf.signLine') }}</p>
            </div>
            <div class="w-1/3">
                <p class="font-bold text-gray-800 mb-16 border-b border-gray-300 pb-1 text-right">{{ $t('proposal.pdf.companySignature') }}</p>
                <p class="text-gray-500 text-center m-0">{{ $t('proposal.pdf.signLine') }}</p>
            </div>
        </div>

        <div class="print-footer pt-2 border-t border-gray-200 text-gray-400 flex justify-between">
            <span>Dagsolution Yazılım Çözümleri</span>
            <span>www.dagsolution.com</span>
        </div>
    </div>

    <!-- Screen Layout -->
    <div class="screen-only">
        <!-- Navbar -->
        <nav class="sticky top-0 z-50 glass-card py-4 border-b border-gray-200">
            <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <div class="flex items-center gap-2 md:gap-3">
                    <img src="/images/dagsolution-light-logo.png" class="h-6 md:h-8" alt="DAGSOLUTION" />
                    <span class="font-bold text-lg md:text-xl tracking-tight">DAGSOLUTION</span>
                </div>
                <div class="hidden md:flex gap-8 font-medium text-sm text-gray-600">
                    <button @click="scrollToSection('hero')" class="nav-link" :class="{ active: activeSection === 'hero' }">{{ $t('proposal.nav.start') }}</button>
                    <button @click="scrollToSection('calculator')" class="nav-link" :class="{ active: activeSection === 'calculator' }">{{ $t('proposal.nav.budget') }}</button>
                    <button @click="scrollToSection('timeline')" class="nav-link" :class="{ active: activeSection === 'timeline' }">{{ $t('proposal.nav.process') }}</button>
                    <button @click="scrollToSection('terms')" class="nav-link" :class="{ active: activeSection === 'terms' }">{{ $t('proposal.nav.terms') }}</button>
                </div>
                <!-- Language Switcher -->
                <div class="flex gap-2">
                    <button @click="setLocale('tr')" class="px-3 py-1.5 text-xs font-bold rounded-lg transition-colors border border-gray-200" :class="locale === 'tr' ? 'bg-zinc-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'">TR</button>
                    <button @click="setLocale('en')" class="px-3 py-1.5 text-xs font-bold rounded-lg transition-colors border border-gray-200" :class="locale === 'en' ? 'bg-zinc-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'">EN</button>
                </div>
            </div>
        </nav>

        <main class="max-w-6xl mx-auto px-6 pb-20">
            <!-- Hero Section -->
            <section id="hero" class="py-12 md:py-20 text-center">
                <h1 class="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
                    {{ $t('proposal.hero.title1') }} <span class="text-blue-600">{{ $t('proposal.hero.title2') }}</span> <br v-if="$t('proposal.hero.title3')">{{ $t('proposal.hero.title3') }}
                </h1>
                <p class="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
                    {{ $t('proposal.hero.desc') }}
                </p>
                <div class="flex flex-wrap justify-center gap-6">
                    <div class="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center gap-1 min-w-[160px]">
                        <p class="text-xs text-gray-400 uppercase font-bold tracking-wider">{{ $t('proposal.hero.f1') }}</p>
                        <p class="font-semibold text-gray-800">{{ $t('proposal.hero.f1d') }}</p>
                    </div>
                    <div class="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center gap-1 min-w-[160px]">
                        <p class="text-xs text-gray-400 uppercase font-bold tracking-wider">{{ $t('proposal.hero.f2') }}</p>
                        <p class="font-semibold text-gray-800">{{ $t('proposal.hero.f2d') }}</p>
                    </div>
                    <div class="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center gap-1 min-w-[160px]">
                        <p class="text-xs text-gray-400 uppercase font-bold tracking-wider">{{ $t('proposal.hero.f3') }}</p>
                        <p class="font-semibold text-gray-800">{{ $t('proposal.hero.f3d') }}</p>
                    </div>
                </div>
            </section>

            <!-- Interactive Calculator -->
            <section id="calculator" class="py-16">
                <div class="mb-12 max-w-3xl">
                    <h2 class="text-3xl font-bold mb-4 tracking-tight">{{ $t('proposal.calc.title') }}</h2>
                    <p class="text-gray-500">{{ $t('proposal.calc.desc') }}</p>
                </div>

                <!-- Project Type Selector -->
                <div class="mb-8 md:mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
                    <button v-for="type in projectTypes" :key="type.id" 
                        @click="projectType = type.id"
                        class="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-xl border transition-all flex items-center gap-2 font-medium"
                        :class="projectType === type.id ? 'border-zinc-900 bg-zinc-900 text-white shadow-md' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'">
                        <span>{{ type.icon }}</span>
                        {{ locale === 'tr' ? type.labelTr : type.labelEn }}
                    </button>
                </div>

                <div v-if="projectType === 'custom'" class="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-zinc-900 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ locale === 'tr' ? 'Projeniz benzersiz ise, çözümümüz de benzersiz olmalı.' : 'If your project is unique, our solution must be too.' }}</h3>
                    <p class="text-gray-500 mb-8 text-base md:text-lg">{{ locale === 'tr' ? 'Size özel teknoloji yığınları, modüller ve bütçe planlaması için bizimle iletişime geçin. Ekibimiz detayları görüşmek için hazır.' : 'Contact us for custom tech stacks, modules and budget planning. Our team is ready to discuss the details with you.' }}</p>
                    
                    <div class="flex flex-col md:flex-row gap-3 md:gap-4 justify-center flex-wrap">
                        <a href="mailto:mustafa@dagsolution.com" class="px-5 py-3 md:px-6 md:py-4 bg-zinc-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition text-sm md:text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            mustafa@dagsolution.com
                        </a>
                        <a href="mailto:mustafabicer.iletisim@gmail.com" class="px-5 py-3 md:px-6 md:py-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition text-sm md:text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            mustafabicer.iletisim@gmail.com
                        </a>
                        <a href="https://t.me/poqob0" target="_blank" class="px-5 py-3 md:px-6 md:py-4 bg-[#229ED9] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1C88BA] transition text-sm md:text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            @poqob0
                        </a>
                    </div>
                </div>

                <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Selector -->
                    <div class="lg:col-span-7 space-y-6">
                        
                        <!-- Delivery Time Selection -->
                        <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                            <h3 class="font-bold text-lg mb-4 text-gray-900 border-l-4 border-blue-600 pl-3">
                                {{ $t('proposal.calc.deliveryTime') }}
                            </h3>
                            <div class="space-y-3">
                                <label class="flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all" :class="deliveryTime === 28 ? 'border-blue-600 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'">
                                    <div class="flex items-center gap-3">
                                        <input type="radio" v-model="deliveryTime" :value="28" class="w-5 h-5 accent-blue-600">
                                        <span class="font-medium text-gray-800">{{ $t('proposal.calc.days28') }}</span>
                                    </div>
                                    <span class="font-mono font-bold text-gray-500">$0</span>
                                </label>
                                <label class="flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all" :class="deliveryTime === 21 ? 'border-blue-600 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'">
                                    <div class="flex items-center gap-3">
                                        <input type="radio" v-model="deliveryTime" :value="21" class="w-5 h-5 accent-blue-600">
                                        <span class="font-medium text-gray-800">{{ $t('proposal.calc.days21') }}</span>
                                    </div>
                                    <span class="font-mono font-bold text-blue-600">+$50</span>
                                </label>
                                <label class="flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all" :class="deliveryTime === 14 ? 'border-blue-600 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'">
                                    <div class="flex items-center gap-3">
                                        <input type="radio" v-model="deliveryTime" :value="14" class="w-5 h-5 accent-blue-600">
                                        <span class="font-medium text-gray-800">{{ $t('proposal.calc.days14') }}</span>
                                    </div>
                                    <span class="font-mono font-bold text-blue-600">+$150</span>
                                </label>
                            </div>
                        </div>

                        <!-- Core Dev -->
                        <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                            <h3 class="font-bold text-lg mb-4 text-gray-900 border-l-4 border-zinc-800 pl-3">
                                {{ $t('proposal.calc.core') }}
                            </h3>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                    <div>
                                        <p class="font-semibold text-gray-800">{{ coreDevTitle }}</p>
                                        <p class="text-xs text-gray-500" v-if="projectType === 'mobile'">{{ $t('proposal.calc.frontendDesc') }}</p>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <div v-if="projectType === 'mobile' || projectType === 'web'" class="flex items-center gap-2">
                                            <input type="number" v-model.number="pageCount" :min="projectType === 'mobile' ? 8 : 5" class="w-16 p-2 border border-gray-300 rounded text-center text-sm outline-none focus:border-blue-500 transition">
                                            <span class="text-sm font-medium text-gray-600">{{ locale === 'tr' ? 'Sayfa' : 'Pages' }}</span>
                                        </div>
                                        <span class="font-mono font-bold text-gray-800">${{ frontendPrice }}</span>
                                    </div>
                                </div>
                                <label v-if="projectType === 'mobile' || projectType === 'web'" class="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 cursor-pointer transition-all hover:border-gray-300">
                                    <div class="flex items-center gap-3">
                                        <input type="checkbox" v-model="backendEnabled" class="w-5 h-5 accent-zinc-800 cursor-pointer">
                                        <span class="font-semibold text-gray-800">{{ $t('proposal.calc.backend') }}</span>
                                    </div>
                                    <span class="font-mono font-bold text-gray-800">${{ projectType === 'web' ? (backendEnabled ? 150 : 0) : (backendEnabled ? 300 : 0) }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- Features -->
                        <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                            <h3 class="font-bold text-lg mb-4 text-gray-900 border-l-4 border-gray-400 pl-3">
                                {{ $t('proposal.calc.features') }}
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <label v-for="f in features" :key="f.id" class="flex items-center justify-between p-3 rounded-lg border transition-all" :class="f.selected ? 'border-gray-800 bg-gray-50' : 'border-gray-200 hover:border-gray-300', f.type !== 'number' ? 'cursor-pointer' : ''">
                                    <div class="flex items-center gap-3 w-full">
                                        <input v-if="f.type !== 'number'" type="checkbox" v-model="f.selected" class="w-5 h-5 accent-zinc-800 cursor-pointer flex-shrink-0">
                                        <span class="text-sm font-medium text-gray-700 flex-1">{{ f.labelTr ? (locale === 'tr' ? f.labelTr : f.labelEn) : $t(`proposal.features.${f.id}`) }}</span>
                                        
                                        <div v-if="f.type === 'number'" class="flex items-center gap-2">
                                            <input type="number" v-model.number="f.count" min="0" class="w-12 p-1 border border-gray-300 rounded text-center text-sm outline-none focus:border-zinc-800">
                                            <span class="font-mono text-sm font-bold text-gray-600">${{ f.count * f.price }}</span>
                                        </div>
                                        <span v-else class="font-mono text-sm font-bold text-gray-600">${{ f.price }}</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Dashboard -->
                    <div class="lg:col-span-5">
                        <div class="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl sticky top-24">
                            <div class="text-center mb-8">
                                <p class="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">{{ $t('proposal.calc.estimateLabel') }}</p>
                                <h2 class="text-5xl font-extrabold text-gray-900 tracking-tight">${{ totalPrice.toLocaleString() }}</h2>
                            </div>

                            <div class="chart-container mb-8 relative w-full h-[250px] md:h-[300px] max-w-[500px] mx-auto">
                                <canvas ref="priceChartCanvas"></canvas>
                            </div>

                            <div class="space-y-4 pt-6 border-t border-gray-100">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">{{ $t('proposal.calc.delivery') }}</span>
                                    <span class="font-bold text-gray-800">{{ $t('proposal.calc.deliveryVal', { days: deliveryTime }) }}</span>
                                </div>
                                
                                <div class="pt-4">
                                    <input type="text" v-model="clientName" :placeholder="$t('proposal.pdf.clientPlaceholder')" class="w-full mb-3 p-3 text-sm border border-gray-300 rounded-xl outline-none focus:border-zinc-800 transition" />
                                    <button @click="printPage" class="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        {{ $t('proposal.calc.print') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Timeline Section -->
            <section v-if="projectType !== 'custom'" id="timeline" class="py-16">
                <div class="mb-12 max-w-3xl">
                    <h2 class="text-3xl font-bold mb-4 tracking-tight">{{ $t('proposal.timeline.title', { days: deliveryTime }) }}</h2>
                    <p class="text-gray-500">{{ $t('proposal.timeline.desc') }}</p>
                </div>

                <div class="relative max-w-4xl">
                    <div class="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200"></div>
                    <div class="space-y-8 md:space-y-12 relative">
                        <div class="flex items-start gap-4 md:gap-8 timeline-step">
                            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center z-10 step-circle transition-all flex-shrink-0">
                                <span class="font-bold text-gray-700 text-xs md:text-sm">{{ stepRanges[0] }}</span>
                            </div>
                            <div class="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 flex-1 shadow-sm hover:border-gray-400 transition-colors">
                                <h3 class="font-bold text-lg md:text-xl mb-2 text-gray-900">{{ currentTimeline[0].title }}</h3>
                                <p class="text-gray-500 text-xs md:text-sm">{{ currentTimeline[0].desc }}</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4 md:gap-8 timeline-step">
                            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center z-10 step-circle transition-all flex-shrink-0">
                                <span class="font-bold text-gray-700 text-xs md:text-sm">{{ stepRanges[1] }}</span>
                            </div>
                            <div class="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 flex-1 shadow-sm hover:border-gray-400 transition-colors">
                                <h3 class="font-bold text-lg md:text-xl mb-2 text-gray-900">{{ currentTimeline[1].title }}</h3>
                                <p class="text-gray-500 text-xs md:text-sm">{{ currentTimeline[1].desc }}</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4 md:gap-8 timeline-step">
                            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center z-10 step-circle transition-all flex-shrink-0">
                                <span class="font-bold text-gray-700 text-xs md:text-sm">{{ stepRanges[2] }}</span>
                            </div>
                            <div class="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 flex-1 shadow-sm hover:border-gray-400 transition-colors">
                                <h3 class="font-bold text-lg md:text-xl mb-2 text-gray-900">{{ currentTimeline[2].title }}</h3>
                                <p class="text-gray-500 text-xs md:text-sm">{{ currentTimeline[2].desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tech Stack -->
            <section v-if="projectType !== 'custom'" id="techstack" class="py-16">
                <div class="mb-12 max-w-3xl">
                    <h2 class="text-3xl font-bold mb-4 tracking-tight">{{ $t('proposal.techStack.title') }}</h2>
                    <p class="text-gray-500">{{ $t('proposal.techStack.desc') }}</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="(tech, i) in currentTechStack" :key="i" class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition" :class="tech.fullWidth ? 'lg:col-span-2' : ''">
                        <h3 class="font-bold text-lg mb-2 text-gray-900">{{ tech.title }}</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">{{ tech.desc }}</p>
                    </div>
                </div>
            </section>

            <!-- Terms & Rules -->
            <section v-if="projectType !== 'custom'" id="terms" class="py-16">
                <div class="bg-white border border-gray-200 text-gray-800 p-10 rounded-3xl shadow-sm">
                    <h2 class="text-3xl font-bold mb-8 tracking-tight text-gray-900">{{ $t('proposal.terms.title') }}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
                        <div v-for="(col, i) in currentTerms" :key="i">
                            <h4 class="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">{{ col.title }}</h4>
                            <ul class="space-y-3 text-gray-600">
                                <li v-for="(item, j) in col.items" :key="j" class="flex items-start gap-2">
                                    <span class="mr-2 text-gray-400" v-if="i === 1 && projectType === 'mobile'">$</span>
                                    <span class="mr-2 text-gray-400" v-else>•</span>
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="bg-white border-t border-gray-200 py-12">
            <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex items-center gap-3">
                    <img src="/images/dagsolution-light-logo.png" class="h-5" alt="DAGSOLUTION" />
                    <a href="https://www.dagsolution.com" class="font-bold text-gray-400 hover:text-gray-900 transition">DAGSOLUTION</a>
                </div>
                <p class="text-sm text-gray-400">© 2026 Dagsolution Yazılım Çözümleri. {{ $t('footer.rights') }}</p>
            </div>
        </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Chart from 'chart.js/auto'

const { t, locale, setLocale } = useI18n()

useHead({
    title: 'Proje Teklifi - Project Proposal',
})

definePageMeta({
    layout: false,
})

const activeSection = ref('hero')

const projectTypes = [
    { id: 'mobile', icon: '📱', labelTr: 'Mobil Uygulama', labelEn: 'Mobile App' },
    { id: 'automation', icon: '🤖', labelTr: 'Otomasyon', labelEn: 'Automation' },
    { id: 'web', icon: '🌐', labelTr: 'Web Sitesi', labelEn: 'Website' },
    { id: 'crm', icon: '📊', labelTr: 'CRM Sistemi', labelEn: 'CRM System' },
    { id: 'custom', icon: '✨', labelTr: 'Özel Proje', labelEn: 'Custom Project' }
]
const projectType = ref('mobile')

const pageCount = ref(8)
const backendEnabled = ref(false)
const backendPrice = computed(() => {
    if (!backendEnabled.value) return 0
    if (projectType.value === 'web') return 150
    return 300
})
const deliveryTime = ref(28)
const clientName = ref('')

const defaultMobileFeatures = [
    { id: 'auth', price: 10, type: 'number', count: 0 },
    { id: 'ai', price: 100, selected: false },
    { id: 'revenuecat', price: 50, selected: false },
    { id: 'credits', price: 50, selected: false },
    { id: 'l10n', price: 5, type: 'number', count: 0 },
    { id: 'bug', price: 10, selected: false },
    { id: 'ios', price: 100, selected: false },
    { id: 'android', price: 100, selected: false },
    { id: 'appgallery', price: 100, selected: false },
    { id: 'store_meta', price: 30, selected: false },
    { id: 'branding', price: 150, selected: false },
    { id: 'source', price: 200, selected: false },
    { id: 'support', price: 150, selected: false },
    { id: 'landing', price: 100, selected: false },
    { id: 'admin', price: 50, selected: false }
]

const features = ref(JSON.parse(JSON.stringify(defaultMobileFeatures)))

watch(projectType, (newType) => {
    backendEnabled.value = false
    pageCount.value = newType === 'web' ? 5 : 8

    if (newType === 'mobile') {
        features.value = JSON.parse(JSON.stringify(defaultMobileFeatures))
    } else if (newType === 'automation') {
        features.value = [
            { id: 'auth', price: 10, type: 'number', count: 0 },
            { id: 'scraping', price: 200, selected: false, labelTr: 'Veri Çekme (Scraping)', labelEn: 'Data Scraping' },
            { id: 'cron', price: 100, selected: false, labelTr: 'Zamanlanmış Görevler', labelEn: 'Cron Jobs' },
            { id: 'ai_analysis', price: 300, selected: false, labelTr: 'Yapay Zeka Analizi', labelEn: 'AI Analysis' },
            { id: 'reporting', price: 150, selected: false, labelTr: 'Otomatik Raporlama', labelEn: 'Automated Reporting' },
            { id: 'api_integration', price: 150, selected: false, labelTr: '3. Parti API Entegrasyonu', labelEn: '3rd Party API' }
        ]
    } else if (newType === 'web') {
        features.value = [
            { id: 'auth', price: 10, type: 'number', count: 0 },
            { id: 'seo_advanced', price: 150, selected: false, labelTr: 'Gelişmiş SEO Paketi', labelEn: 'Advanced SEO' },
            { id: 'blog', price: 100, selected: false, labelTr: 'Blog Sistemi', labelEn: 'Blog System' },
            { id: 'ecommerce', price: 400, selected: false, labelTr: 'E-Ticaret Modülü', labelEn: 'E-Commerce' },
            { id: 'payment', price: 150, selected: false, labelTr: 'Ödeme Geçidi', labelEn: 'Payment Gateway' }
        ]
    } else if (newType === 'crm') {
        features.value = [
            { id: 'auth', price: 10, type: 'number', count: 0 },
            { id: 'roles', price: 200, selected: false, labelTr: 'Gelişmiş Rol Yönetimi', labelEn: 'Advanced Roles' },
            { id: 'kanban', price: 250, selected: false, labelTr: 'Kanban Görev Panosu', labelEn: 'Kanban Board' },
            { id: 'mail_integration', price: 200, selected: false, labelTr: 'Mail Entegrasyonu', labelEn: 'Mail Integration' },
            { id: 'export', price: 100, selected: false, labelTr: 'Excel/PDF Dışa Aktarım', labelEn: 'Export Excel/PDF' }
        ]
    } else {
        features.value = [
            { id: 'custom_module1', price: 100, selected: false, labelTr: 'Özel Modül 1', labelEn: 'Custom Module 1' },
            { id: 'custom_module2', price: 150, selected: false, labelTr: 'Özel Modül 2', labelEn: 'Custom Module 2' }
        ]
    }
})

const coreDevTitle = computed(() => {
    if (projectType.value === 'mobile') return t('proposal.calc.frontend')
    if (projectType.value === 'web') return locale.value === 'tr' ? 'Web Tasarım & Geliştirme' : 'Web Design & Development'
    if (projectType.value === 'automation') return locale.value === 'tr' ? 'Otomasyon Core Script' : 'Automation Core Script'
    if (projectType.value === 'crm') return locale.value === 'tr' ? 'CRM Altyapısı' : 'CRM Infrastructure'
    return locale.value === 'tr' ? 'Özel Geliştirme' : 'Custom Development'
})

const frontendPrice = computed(() => {
    if (projectType.value === 'mobile') return 300 + ((Math.max(8, pageCount.value || 8) - 8) * 20)
    if (projectType.value === 'web') return 150 + ((Math.max(5, pageCount.value || 5) - 5) * 15)
    if (projectType.value === 'automation') return 400
    if (projectType.value === 'crm') return 800
    return 0
})

const currentTimeline = computed(() => {
    if (projectType.value === 'automation') {
        return [
            { title: locale.value === 'tr' ? 'Analiz & Tasarım' : 'Analysis & Design', desc: locale.value === 'tr' ? 'Otomasyon senaryolarının çıkarılması ve akış şemalarının hazırlanması.' : 'Extracting automation scenarios and preparing flowcharts.' },
            { title: locale.value === 'tr' ? 'Scripting & Test' : 'Scripting & Testing', desc: locale.value === 'tr' ? 'Botların yazılması, sınır koşullarının test edilmesi ve optimizasyon.' : 'Writing bots, testing edge cases and optimization.' },
            { title: locale.value === 'tr' ? 'Yayına Alma' : 'Deployment', desc: locale.value === 'tr' ? 'Sunucu kurulumu, zamanlanmış görevlerin (cron) ayarlanması ve teslimat.' : 'Server setup, setting up cron jobs and delivery.' }
        ]
    } else if (projectType.value === 'crm') {
        return [
            { title: locale.value === 'tr' ? 'Mimari Planlama' : 'Architecture Planning', desc: locale.value === 'tr' ? 'Veritabanı şemasının, rollerin ve yetkilendirme katmanlarının planlanması.' : 'Planning database schema, roles and authorizations.' },
            { title: locale.value === 'tr' ? 'Core Development' : 'Core Development', desc: locale.value === 'tr' ? 'Backend API, Admin paneli ve temel iş kurallarının kodlanması.' : 'Coding Backend API, Admin panel and core business rules.' },
            { title: locale.value === 'tr' ? 'Entegrasyon & Teslim' : 'Integration & Delivery', desc: locale.value === 'tr' ? '3. Parti servislerin entegrasyonu, veri aktarımı ve ekibe eğitim.' : 'Integration of 3rd Party services, data transfer and team training.' }
        ]
    } else if (projectType.value === 'web') {
        return [
            { title: locale.value === 'tr' ? 'UI/UX Tasarımı' : 'UI/UX Design', desc: locale.value === 'tr' ? 'Marka kimliğine uygun, özgün kurumsal web sitesi arayüz tasarımı.' : 'Corporate website interface design suitable for brand identity.' },
            { title: locale.value === 'tr' ? 'Frontend & CMS' : 'Frontend & CMS', desc: locale.value === 'tr' ? 'Tasarımların kodlanması ve içerik yönetim sistemine (CMS) bağlanması.' : 'Coding designs and connecting to content management system.' },
            { title: locale.value === 'tr' ? 'SEO & Yayına Alma' : 'SEO & Launch', desc: locale.value === 'tr' ? 'Site içi SEO ayarları, performans optimizasyonu ve canlıya alma süreci.' : 'On-page SEO settings, performance optimization and launch.' }
        ]
    } else {
        return [
            { title: t('proposal.timeline.step1'), desc: t('proposal.timeline.step1d') },
            { title: t('proposal.timeline.step2'), desc: t('proposal.timeline.step2d') },
            { title: t('proposal.timeline.step3'), desc: t('proposal.timeline.step3d') }
        ]
    }
})

const currentTerms = computed(() => {
    if (projectType.value === 'automation') {
        return [
            {
                title: locale.value === 'tr' ? 'BAKIM & DESTEK' : 'MAINTENANCE & SUPPORT',
                items: [
                    locale.value === 'tr' ? '1 Ay Ücretsiz Bakım' : '1 Month Free Maintenance',
                    locale.value === 'tr' ? 'Hedef site değişimlerinde ek ücret' : 'Additional fee for target site changes',
                    locale.value === 'tr' ? '7/24 Kesintisiz Sunucu İzleme' : '24/7 Server Monitoring'
                ]
            },
            {
                title: locale.value === 'tr' ? 'ÖDEME PLANI' : 'PAYMENT PLAN',
                items: [
                    locale.value === 'tr' ? '%50 Peşinat' : '50% Upfront',
                    locale.value === 'tr' ? '%50 Proje Teslimi' : '50% on Delivery'
                ]
            },
            {
                title: locale.value === 'tr' ? 'HUKUKİ SORUMLULUK' : 'LEGAL RESPONSIBILITY',
                items: [
                    locale.value === 'tr' ? 'Hedef site politikaları müşteri sorumluluğundadır.' : 'Target site policies are customer responsibility.',
                    locale.value === 'tr' ? 'GDPR/KVKK uyumluluğu gözetilir.' : 'GDPR/KVKK compliance is observed.'
                ]
            }
        ]
    } else if (projectType.value === 'crm') {
        return [
            {
                title: locale.value === 'tr' ? 'VERİ GÜVENLİĞİ' : 'DATA SECURITY',
                items: [
                    locale.value === 'tr' ? 'Uçtan uca şifreleme' : 'End-to-end encryption',
                    locale.value === 'tr' ? 'Düzenli yedekleme (Günlük)' : 'Regular backup (Daily)',
                    locale.value === 'tr' ? 'Rol bazlı erişim denetimi (RBAC)' : 'Role-based access control (RBAC)'
                ]
            },
            {
                title: locale.value === 'tr' ? 'ÖDEME PLANI' : 'PAYMENT PLAN',
                items: [
                    locale.value === 'tr' ? '%40 Peşinat' : '40% Upfront',
                    locale.value === 'tr' ? '%30 Ara Sürüm (Alpha)' : '30% Alpha Release',
                    locale.value === 'tr' ? '%30 Proje Teslimi' : '30% on Delivery'
                ]
            },
            {
                title: locale.value === 'tr' ? 'KAYNAK KOD' : 'SOURCE CODE',
                items: [
                    locale.value === 'tr' ? 'Teslimat sonrası %100 mülkiyet' : '100% ownership after delivery',
                    locale.value === 'tr' ? 'Dokümantasyon dahildir' : 'Documentation included'
                ]
            }
        ]
    } else if (projectType.value === 'web') {
        return [
            {
                title: locale.value === 'tr' ? 'İÇERİK YÖNETİMİ' : 'CONTENT MANAGEMENT',
                items: [
                    locale.value === 'tr' ? 'Özelleştirilebilir Admin Paneli' : 'Customizable Admin Panel',
                    locale.value === 'tr' ? 'SEO Dostu Altyapı' : 'SEO Friendly Infrastructure',
                    locale.value === 'tr' ? '1 Yıl Ücretsiz Hosting & Domain' : '1 Year Free Hosting & Domain'
                ]
            },
            {
                title: locale.value === 'tr' ? 'ÖDEME PLANI' : 'PAYMENT PLAN',
                items: [
                    locale.value === 'tr' ? '%50 Peşinat' : '50% Upfront',
                    locale.value === 'tr' ? '%50 Proje Teslimi' : '50% on Delivery'
                ]
            },
            {
                title: locale.value === 'tr' ? 'REVİZYON HAKKI' : 'REVISION RIGHTS',
                items: [
                    locale.value === 'tr' ? 'Tasarım aşamasında 2 büyük revizyon' : '2 major revisions during design',
                    locale.value === 'tr' ? 'Yazılım aşamasında minör düzeltmeler' : 'Minor fixes during software phase'
                ]
            }
        ]
    } else {
        return [
            {
                title: t('proposal.terms.t1'),
                items: [t('proposal.terms.t1_1'), t('proposal.terms.t1_2'), t('proposal.terms.t1_3')]
            },
            {
                title: t('proposal.terms.t3'),
                items: [t('proposal.terms.t3_1'), t('proposal.terms.t3_2'), t('proposal.terms.t3_3'), t('proposal.terms.t3_4'), t('proposal.terms.t3_5')]
            },
            {
                title: t('proposal.terms.t2'),
                items: [t('proposal.terms.t2_1'), t('proposal.terms.t2_2'), t('proposal.terms.t2_3')]
            }
        ]
    }
})

const currentTechStack = computed(() => {
    if (projectType.value === 'mobile') {
        return [
            { title: t('proposal.techStack.mobile'), desc: t('proposal.techStack.mobileDesc') },
            { title: t('proposal.techStack.state'), desc: t('proposal.techStack.stateDesc') },
            { title: t('proposal.techStack.native'), desc: t('proposal.techStack.nativeDesc') },
            { title: t('proposal.techStack.backend'), desc: t('proposal.techStack.backendDesc') },
            { title: t('proposal.techStack.devops'), desc: t('proposal.techStack.devopsDesc'), fullWidth: true }
        ]
    } else if (projectType.value === 'automation') {
        return [
            { title: locale.value === 'tr' ? 'Scripting & Bot' : 'Scripting & Bot', desc: 'Python, Node.js, Puppeteer, Selenium' },
            { title: locale.value === 'tr' ? 'Veri İşleme' : 'Data Processing', desc: 'Pandas, NumPy, Apache Kafka' },
            { title: locale.value === 'tr' ? 'Veritabanı' : 'Database', desc: 'MongoDB, PostgreSQL, Redis' }
        ]
    } else if (projectType.value === 'web') {
        return [
            { title: locale.value === 'tr' ? 'Frontend Framework' : 'Frontend Framework', desc: 'Nuxt 4, Vue 3, TailwindCSS' },
            { title: locale.value === 'tr' ? 'Backend API' : 'Backend API', desc: 'Node.js, Nitro Server' },
            { title: locale.value === 'tr' ? 'Veritabanı' : 'Database', desc: 'PostgreSQL, Prisma ORM' },
            { title: locale.value === 'tr' ? 'Sunucu' : 'Deployment', desc: 'Docker, Vercel / Cloudflare' }
        ]
    } else if (projectType.value === 'crm') {
        return [
            { title: locale.value === 'tr' ? 'Mimari' : 'Architecture', desc: 'Microservices, REST API, GraphQL' },
            { title: locale.value === 'tr' ? 'Backend Core' : 'Backend Core', desc: 'FastAPI (Python) / Node.js' },
            { title: locale.value === 'tr' ? 'Frontend' : 'Frontend', desc: 'React, Next.js, Material UI' },
            { title: locale.value === 'tr' ? 'Güvenlik & Auth' : 'Security & Auth', desc: 'JWT, OAuth2, RBAC' }
        ]
    } else {
        return [
            { title: locale.value === 'tr' ? 'Özel Mimari' : 'Custom Architecture', desc: locale.value === 'tr' ? 'Projenize özel teknoloji yığını belirlenecektir.' : 'Tech stack will be determined specifically for your project.' }
        ]
    }
})

const deliveryFee = computed(() => {
    if (deliveryTime.value === 14) return 150
    if (deliveryTime.value === 21) return 50
    return 0
})

const featuresTotal = computed(() => {
    return features.value.reduce((acc, curr) => {
        if (curr.type === 'number') {
            return acc + (curr.count * curr.price)
        }
        return curr.selected ? acc + curr.price : acc
    }, 0)
})

const totalPrice = computed(() => {
    return frontendPrice.value + backendPrice.value + featuresTotal.value + deliveryFee.value
})

const stepRanges = computed(() => {
    if (deliveryTime.value === 28) return ['1-10', '11-22', '23-28']
    if (deliveryTime.value === 21) return ['1-7', '8-16', '17-21']
    return ['1-5', '6-11', '12-14']
})

const priceChartCanvas = ref(null)
let chartInstance = null

const updateChart = () => {
    if (!priceChartCanvas.value) return

    const newData = []
    const newLabels = []
    const colors = []
    
    if (frontendPrice.value > 0) {
        newData.push(frontendPrice.value)
        newLabels.push(t('proposal.chart.frontend'))
        colors.push('#27272a')
    }
    if (backendPrice.value > 0) {
        newData.push(backendPrice.value)
        newLabels.push(t('proposal.chart.backend'))
        colors.push('#a1a1aa')
    }
    if (featuresTotal.value > 0) {
        newData.push(featuresTotal.value)
        newLabels.push(t('proposal.chart.modules'))
        colors.push('#d4d4d8')
    }
    if (deliveryFee.value > 0) {
        newData.push(deliveryFee.value)
        newLabels.push(t('proposal.chart.delivery'))
        colors.push('#3b82f6')
    }

    if (chartInstance) {
        chartInstance.data.labels = newLabels
        chartInstance.data.datasets[0].data = newData
        chartInstance.data.datasets[0].backgroundColor = colors
        chartInstance.update()
    } else {
        chartInstance = new Chart(priceChartCanvas.value.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: newLabels,
                datasets: [{
                    data: newData,
                    backgroundColor: colors,
                    borderWidth: 0,
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 400
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: { family: 'Inter', size: 12, weight: '500' }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return ` $${context.raw}`
                            }
                        }
                    }
                },
                cutout: '75%'
            }
        })
    }
}

watch([frontendPrice, backendPrice, featuresTotal, deliveryFee, locale], () => {
    updateChart()
}, { deep: true })

onMounted(() => {
    updateChart()
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id
            }
        })
    }, { threshold: 0.5 })
    
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section)
    })
})

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
        const navHeight = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = el.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - navHeight

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}

const printPage = () => {
    window.print()
}
</script>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
}
.nav-link {
    @apply text-gray-500 hover:text-gray-900 pb-1 border-b-2 border-transparent transition-colors;
}
.nav-link.active {
    @apply text-gray-900 border-gray-900;
}
.timeline-step:hover .step-circle {
    transform: scale(1.1);
    border-color: #27272a;
    color: #27272a;
}

@media print {
    @page {
        size: A4;
        margin: 0 !important;
    }
    body {
        background-color: white !important;
        margin: 0 !important;
        padding: 0 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .screen-only {
        display: none !important;
    }
    .print-only {
        display: block !important;
        position: relative !important;
        height: 296mm !important;
        padding: 2cm 2cm !important;
        box-sizing: border-box !important;
        font-family: "Times New Roman", Times, serif !important;
        font-size: 12pt !important;
        line-height: 1.3 !important;
        overflow: hidden !important;
    }
    .print-footer {
        position: absolute !important;
        bottom: 2cm !important;
        left: 2cm !important;
        right: 2cm !important;
    }
    .print-only * {
        font-family: "Times New Roman", Times, serif !important;
    }
}
</style>
