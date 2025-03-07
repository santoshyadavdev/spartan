import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { CodePreviewDirective } from '../../../../shared/code/code-preview.directive';
import { CodeComponent } from '../../../../shared/code/code.component';
import { MainSectionDirective } from '../../../../shared/layout/main-section.directive';
import { PageBottomNavPlaceholderComponent } from '../../../../shared/layout/page-bottom-nav-placeholder.component';
import { PageBottomNavLinkComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav.component';
import { PageNavLinkComponent } from '../../../../shared/layout/page-nav/page-nav-link.component';
import { PageNavComponent } from '../../../../shared/layout/page-nav/page-nav.component';
import { SectionIntroComponent } from '../../../../shared/layout/section-intro.component';
import { SectionSubHeadingComponent } from '../../../../shared/layout/section-sub-heading.component';
import { TabsComponent } from '../../../../shared/layout/tabs.component';
import { metaWith } from '../../../../shared/meta/meta.util';
import { AlertDialogPreviewComponent, defaultCode, defaultImports, defaultSkeleton } from './alert-dialog.preview';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Alert Dialog' },
	meta: metaWith(
		'spartan/ui - Alert Dialog',
		'A modal dialog that interrupts the user with important content and expects a response.',
	),
	title: 'spartan/ui - Alert Dialog',
};

@Component({
	selector: 'spartan-alert-dialog',
	standalone: true,
	imports: [
		MainSectionDirective,
		CodeComponent,
		SectionIntroComponent,
		SectionSubHeadingComponent,
		TabsComponent,
		CodePreviewDirective,
		PageNavLinkComponent,
		PageNavComponent,
		PageBottomNavComponent,
		PageBottomNavLinkComponent,
		PageBottomNavPlaceholderComponent,
		AlertDialogPreviewComponent,
	],
	template: `
		<section spartanMainSection>
			<spartan-section-intro
				name="Alert Dialog"
				lead="A modal dialog that interrupts the user with important content and expects a response."
			/>

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-alert-dialog-preview />
				</div>
				<spartan-code secondTab [code]="defaultCode" />
			</spartan-tabs>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
			<spartan-tabs class="mt-4" firstTab="Nx Plugin" secondTab="Angular CLI">
				<spartan-code firstTab language="sh" code="npx nx g @spartan-ng/cli:ui alertdialog" />
				<spartan-code secondTab language="sh" code="ng g @spartan-ng/cli:ui alertdialog" />
			</spartan-tabs>

			<spartan-section-sub-heading id="usage">Usage</spartan-section-sub-heading>
			<div class="space-y-4">
				<spartan-code [code]="defaultImports" />
				<spartan-code [code]="defaultSkeleton" />
			</div>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="aspect-ratio" label="Aspect Ratio" />
				<spartan-page-bottom-nav-link direction="previous" href="alert" label="Alert" />
			</spartan-page-bottom-nav>
		</section>
		<spartan-page-nav>
			<spartan-page-nav-link fragment="installation" label="Installation" />
			<spartan-page-nav-link fragment="usage" label="Usage" />
		</spartan-page-nav>
	`,
})
export default class AlertPageComponent {
	readonly defaultCode = defaultCode;
	readonly defaultSkeleton = defaultSkeleton;
	readonly defaultImports = defaultImports;
}
