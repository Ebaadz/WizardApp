import { Component, OnInit } from '@angular/core';
import { wizarddata } from '../wizarddata.service';

@Component({
  selector: 'app-wizard',
  standalone: true,
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
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
