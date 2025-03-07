import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { radixBell, radixCheck } from '@ng-icons/radix-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
	HlmCardHeaderDirective,
	HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnSwitchComponent, BrnSwitchThumbComponent } from '@spartan-ng/ui-switch-brain';
import { HlmSwitchDirective, HlmSwitchThumbDirective } from '@spartan-ng/ui-switch-helm';

@Component({
	selector: 'spartan-card-notifications',
	standalone: true,
	imports: [
		HlmButtonDirective,
		HlmCardContentDirective,
		HlmCardDescriptionDirective,
		HlmCardDirective,
		HlmCardFooterDirective,
		HlmCardHeaderDirective,
		HlmCardTitleDirective,
		HlmIconComponent,
		BrnSwitchComponent,
		BrnSwitchThumbComponent,
		HlmSwitchThumbDirective,
		HlmSwitchDirective,
		NgForOf,
	],
	providers: [provideIcons({ radixCheck, radixBell })],
	template: `
		<section hlmCard>
			<div hlmCardHeader>
				<h3 hlmCardTitle>Notifications</h3>
				<p hlmCardDescription>You have 3 unread notifications</p>
			</div>
			<div hlmCardContent class="grid gap-4">
				<div class="border-border flex items-center space-x-4 rounded-md border p-4">
					<hlm-icon size="lg" name="radixBell" />
					<div class="flex-1 space-y-1">
						<p class="text-sm font-medium leading-none">Push Notifications</p>
						<p class="text-muted-foreground text-sm">Send notifications to device.</p>
					</div>
					<brn-switch aria-label="Enable notifications" hlm>
						<brn-switch-thumb hlm />
					</brn-switch>
				</div>
				<div>
					<div
						*ngFor="let notification of notifications"
						class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
					>
						<span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
						<div class="space-y-1">
							<p class="text-sm font-medium leading-none">{{ notification.title }}</p>
							<p class="text-muted-foreground text-sm">{{ notification.description }}</p>
						</div>
					</div>
				</div>
			</div>
			<div hlmCardFooter class="justify-between">
				<button class="w-full" hlmBtn>
					<hlm-icon size="sm" class="mr-2" name="radixCheck" />
					Mark all as read
				</button>
			</div>
		</section>
	`,
})
export class CardNotificationsComponent {
	protected notifications = [
		{
			title: 'Your call has been confirmed.',
			description: '1 hour ago',
		},
		{
			title: 'You have a new message!',
			description: '1 hour ago',
		},
		{
			title: 'Your subscription is expiring soon!',
			description: '2 hours ago',
		},
	];
}

export const cardNotificationsCode = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { radixBell, radixCheck } from '@ng-icons/radix-icons';
import { BrnSwitchComponent, BrnSwitchThumbComponent } from '@spartan-ng/ui-switch-brain';
import { HlmSwitchDirective, HlmSwitchThumbDirective } from '@spartan-ng/ui-switch-helm';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'spartan-card-notifications',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmIconComponent,
    BrnSwitchComponent,
    BrnSwitchThumbComponent,
    HlmSwitchThumbDirective,
    HlmSwitchDirective,
    NgForOf,
  ],
  providers: [provideIcons({ radixCheck, radixBell })],
  template: \`
    <section hlmCard>
      <div hlmCardHeader>
        <h3 hlmCardTitle>Notifications</h3>
        <p hlmCardDescription>You have 3 unread notifications</p>
      </div>
      <div hlmCardContent class="grid gap-4">
        <div class="border-border flex items-center space-x-4 rounded-md border p-4">
          <hlm-icon size="lg" name="radixBell" />
          <div class="flex-1 space-y-1">
            <p class="text-sm font-medium leading-none">Push Notifications</p>
            <p class="text-sm text-muted-foreground">Send notifications to device.</p>
          </div>
          <brn-switch aria-label="Enable notifications" hlm>
            <brn-switch-thumb hlm />
          </brn-switch>
        </div>
        <div>
          <div
            *ngFor="let notification of notifications"
            class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
            <div class="space-y-1">
              <p class="text-sm font-medium leading-none">{{ notification.title }}</p>
              <p class="text-sm text-muted-foreground">{{ notification.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div hlmCardFooter class="justify-between">
        <button class="w-full" hlmBtn>
          <hlm-icon size="sm" class="mr-2" name="radixCheck" />
          Mark all as read
        </button>
      </div>
    </section>
  \`,
})
export class CardNotificationsComponent {
  protected notifications = [
    {
      title: 'Your call has been confirmed.',
      description: '1 hour ago',
    },
    {
      title: 'You have a new message!',
      description: '1 hour ago',
    },
    {
      title: 'Your subscription is expiring soon!',
      description: '2 hours ago',
    },
  ];
}
`;
