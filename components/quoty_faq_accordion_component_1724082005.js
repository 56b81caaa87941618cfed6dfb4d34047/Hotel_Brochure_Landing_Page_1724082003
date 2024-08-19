/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1724082005", {
    template: `
    <section class="py-8 bg-white pl-4">
        <h2 class="text-lg font-semibold mb-5">Frequently Asked Questions About Our Hotel Brochures</h2>
        <!-- Accordion -->
        <div class="space-y-3">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" :class="[{ 'expanded': term.expanded }]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span>{{ term.title }}</span>
                        <svg class="shrink-0 ml-8 fill-slate-400 dark:fill-slate-500" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="text-slate-500 dark:text-slate-400 grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            terms: [
                { title: "What information is included in your hotel brochures?", description: "Our hotel brochures provide comprehensive details about amenities, room types, dining options, local attractions, and special packages to give potential guests a complete overview of what our hotel offers.", expanded: false },
                { title: "How can I request a physical copy of your hotel brochure?", description: "You can request a physical copy of our brochure by filling out the form on our website, calling our customer service line, or visiting our hotel in person. We'll be happy to mail it to you free of charge.", expanded: false },
                { title: "Is there a digital version of your hotel brochure available?", description: "Yes, we offer a downloadable PDF version of our hotel brochure on our website. It's easily accessible and can be viewed on any device, perfect for those who prefer digital formats or need immediate access to our information.", expanded: false },
                { title: "How often are your hotel brochures updated?", description: "We update our hotel brochures annually to ensure all information is current. However, for the most up-to-date details on promotions and seasonal offerings, we recommend checking our website or contacting our reservation team directly.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
