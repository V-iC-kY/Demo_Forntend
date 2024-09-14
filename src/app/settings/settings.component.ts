import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

  settingsForm: any;
  settings: any;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      theme: ['light'],
      notifications: [false]
    });
  }

  saveSettings(): void {
    if (this.settingsForm.valid) {
      const settings = this.settingsForm.value;
      console.log('Settings saved:', settings);

    } else {
      console.log('Form is invalid');
    }
  }

}
