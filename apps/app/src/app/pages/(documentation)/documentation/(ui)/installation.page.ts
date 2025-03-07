import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { radixChevronRight } from '@ng-icons/radix-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { hlmCode, hlmP } from '@spartan-ng/ui-typography-helm';
import { CodeComponent } from '../../../../shared/code/code.component';
import { MainSectionDirective } from '../../../../shared/layout/main-section.directive';
import { PageBottomNavLinkComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav.component';
import { PageNavLinkComponent } from '../../../../shared/layout/page-nav/page-nav-link.component';
import { PageNavComponent } from '../../../../shared/layout/page-nav/page-nav.component';
import { SectionIntroComponent } from '../../../../shared/layout/section-intro.component';
import { SectionSubHeadingComponent } from '../../../../shared/layout/section-sub-heading.component';
import { TabsComponent } from '../../../../shared/layout/tabs.component';
import { metaWith } from '../../../../shared/meta/meta.util';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Installation' },
	meta: metaWith('spartan - Installation', 'Getting up and running with spartan'),
	title: 'spartan - Installation',
};

@Component({
	selector: 'spartan-installation',
	standalone: true,
	imports: [
		MainSectionDirective,
		SectionIntroComponent,
		PageBottomNavComponent,
		PageBottomNavLinkComponent,
		PageNavComponent,
		SectionSubHeadingComponent,
		CodeComponent,
		HlmButtonDirective,
		HlmIconComponent,
		RouterLink,
		PageNavLinkComponent,
		TabsComponent,
	],
	providers: [provideIcons({ radixChevronRight })],
	template: `
		<section spartanMainSection>
			<spartan-section-intro name="Installation" lead="Getting up and running with spartan." />
			<section>
				<p class="${hlmP}">
					Adding
					<code class="${hlmCode}">spartan/ui</code>
					to your project requires only a couple steps!
				</p>
				<p class="${hlmP}">We support the Angular CLI & Nx! Start with installing our plugin:</p>
				<spartan-code class="mt-4" code="npm i -D @spartan-ng/cli" />
			</section>
			<spartan-section-sub-heading id="prerequisites">Prerequisites</spartan-section-sub-heading>
			<section>
				<p class="${hlmP}">
					<code class="${hlmCode}">spartan/ui</code>
					is built on top of TailwindCSS. Make sure your application has a working TailwindCSS setup before you
					continue.
				</p>
			</section>
			<spartan-section-sub-heading id="installing-ui-core">Installing ui-core</spartan-section-sub-heading>
			<section>
				<p class="${hlmP}">
					<code class="${hlmCode}">spartan/ui</code>
					comes with a core package. To get started install this package with the command below:
				</p>
				<spartan-code class="mt-4" code="npm i @spartan-ng/ui-core" />
			</section>
			<spartan-section-sub-heading id="setting-up-tailwind">Setting up tailwind.config.js</spartan-section-sub-heading>
			<section>
				<p class="${hlmP}">
					You now have to add our spartan-specific configuration to your TailwindCSS setup. To make the setup of your
					<code class="${hlmCode}">tailwind.config.js</code>
					as easy as possible, the
					<code class="${hlmCode}">&#64;spartan-ng/ui-core</code>
					package comes with it own preset.
				</p>
				<p class="${hlmP}">Simply add it to the presets array of your config file:</p>
				<spartan-tabs class="mb-6 mt-4" firstTab="Nx" secondTab="Angular CLI">
					<spartan-code
						firstTab
						code="
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
"
					/>
					<spartan-code
						secondTab
						code="
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './REPLACE_WITH_PATH_TO_YOUR_COMPONENTS_DIRECTORY/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
"
					/>
				</spartan-tabs>
			</section>

			<spartan-section-sub-heading id="adding-css-vars">Adding CSS variables</spartan-section-sub-heading>
			<section>
				<p class="${hlmP}">
					To complete your TailwindCSS setup, you need to add our spartan-specific CSS variables to your style
					entrypoint. This is most likely a
					<code class="${hlmCode}">styles.css</code>
					in the
					<code class="${hlmCode}">src</code>
					folder of your application.
				</p>
				<p class="${hlmP}">
					Again, if you are using Nx, we have written a plugin that will take care of the heavy lifting:
				</p>
				<spartan-tabs class="mb-6 mt-4" firstTab="Nx" secondTab="Angular CLI">
					<spartan-code firstTab code="npx nx g @spartan-ng/cli:ui-theme" />
					<spartan-code secondTab code="ng g @spartan-ng/cli:ui-theme" />
				</spartan-tabs>
				<p class="${hlmP}">To learn more about the Nx plugin check out the CLI docs below.</p>
				<div class="my-2 flex items-center justify-end">
					<a routerLink="/documentation/cli" variant="outline" size="sm" hlmBtn outline="">
						CLI documentation
						<hlm-icon name="radixChevronRight" class="ml-2" size="sm" />
					</a>
				</div>
				<p class="${hlmP}">
					If you are not using Nx (yet) you can copy the variables of the default theme below and manually add them to
					your style entrypoint, such as
					<code class="${hlmCode}">styles.css</code>
					:
				</p>
				<spartan-code
					class="mb-6 mt-4"
					code="
:root {
  --font-sans: '';
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
  --radius: 0.5rem;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}
"
				/>
				<p class="${hlmP}">
					Also, make sure to check out the theming section to better understand the convention behind them and learn how
					to customize your theme.
				</p>
			</section>

			<spartan-section-sub-heading id="adding-primitives">Adding primitives</spartan-section-sub-heading>
			<section>
				<p class="${hlmP}">
					With the Nx plugin, adding primitives is as simple as running a single command. It will allow you to pick and
					choose which primitives to add to your project. It will add all brain dependencies and copy helm code into its
					own library:
				</p>
				<spartan-tabs class="mb-6 mt-4" firstTab="Nx" secondTab="Angular CLI">
					<spartan-code firstTab code="npx nx g @spartan-ng/cli:ui" />
					<spartan-code secondTab code="ng g @spartan-ng/cli:ui" />
				</spartan-tabs>
				<p class="${hlmP}">To learn more about the command line interface check out the docs below.</p>
				<div class="my-2 flex items-center justify-end">
					<a routerLink="/documentation/cli" variant="outline" size="sm" hlmBtn outline="">
						CLI documentation
						<hlm-icon name="radixChevronRight" class="ml-2" size="sm" />
					</a>
				</div>
			</section>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="theming" label="Theming" />
				<spartan-page-bottom-nav-link direction="previous" href="/stack" label="Stack" />
			</spartan-page-bottom-nav>
		</section>

		<spartan-page-nav>
			<spartan-page-nav-link fragment="prerequisites" label="Prerequisites" />
			<spartan-page-nav-link fragment="installing-ui-core" label="Installing ui-core" />
			<spartan-page-nav-link fragment="setting-up-tailwind" label="Setting up tailwind.config.js" />
			<spartan-page-nav-link fragment="adding-css-vars" label="Adding CSS variables" />
			<spartan-page-nav-link fragment="adding-primitives" label="Adding primitives" />
		</spartan-page-nav>
	`,
})
export default class InstallationPageComponent {}
