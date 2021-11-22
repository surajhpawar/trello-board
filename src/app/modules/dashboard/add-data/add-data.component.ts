import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-data',
	templateUrl: './add-data.component.html',
	styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

	formGroup: FormGroup;

	FORM_ELEMENTS = {
		name: 'name'
	};

	@Input() type: string;
	@Output() addValue: EventEmitter<any> = new EventEmitter<any>();
	@Output() onDialogClosed: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		private _cdr: ChangeDetectorRef,
		private _formBuilder: FormBuilder) {
	}

	get nameControl(): AbstractControl {
		return this.formGroup.get(this.FORM_ELEMENTS.name);
	}

	ngOnInit() {
		this.initForm();
		this._cdr.markForCheck();
	}

	initForm(): void {
		const dataForm = {};
		dataForm[this.FORM_ELEMENTS.name] = ['', Validators.required];

		this.formGroup = this._formBuilder.group(dataForm);
		this._cdr.markForCheck();
	}

	onAdd(): void {
		this.formGroup.markAllAsTouched();
		if (this.formGroup.valid) {
			this.addValue.emit(this.formGroup.value);
		}
	}

	onDialogClose(): void {
		this.onDialogClosed.emit();
	}
}
