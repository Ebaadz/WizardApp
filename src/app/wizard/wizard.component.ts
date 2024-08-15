import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { wizarddata } from '../wizarddata.service';

@Component({
  selector: 'app-wizard',
  standalone: true,
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  imports: [CommonModule]
})
export class WizardComponent implements OnInit {
  wizardData: any;

  constructor(private wizarddata: wizarddata) {}

  ngOnInit(): void {
    this.wizarddata.getWizardData().subscribe(data => {
      this.wizardData = data;
    });
  }
}
