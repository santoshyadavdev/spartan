import { CdkMenuItemCheckbox } from '@angular/cdk/menu';
import { booleanAttribute, Directive, inject, Input, Output, signal } from '@angular/core';

@Directive({
	selector: '[brnMenuItemCheckbox]',
	standalone: true,
	hostDirectives: [CdkMenuItemCheckbox],
	host: {
		'[class.checked]': '_checked()',
		'[disabled]': '_disabled()',
	},
})
export class BrnMenuItemCheckboxDirective {
	private readonly _cdkMenuItem = inject(CdkMenuItemCheckbox, { host: true });

	get checked() {
		return this._checked();
	}

	get disabled() {
		return this._disabled();
	}

	protected readonly _checked = signal(this._cdkMenuItem.checked);
	@Input({ transform: booleanAttribute })
	set checked(value: boolean) {
		this._cdkMenuItem.checked = value;
		this._checked.set(value);
	}

	protected readonly _disabled = signal(this._cdkMenuItem.disabled);
	@Input({ transform: booleanAttribute })
	set disabled(value: boolean) {
		this._cdkMenuItem.disabled = value;
		this._disabled.set(value);
	}

	@Output()
	public readonly triggered = this._cdkMenuItem.triggered;
}
