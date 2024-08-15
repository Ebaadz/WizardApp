import { Component, OnInit } from '@angular/core';
import { wizarddata } from '../wizarddata.service';

@Component({
  selector: 'app-wizard',
  standalone: true,
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  wizardData: any = {
    name: 'Severus Snape',
    image: 'https://tetervak.dev.fast.sheridanc.on.ca/exams/angular/images/snape.jpg',
    description: 'Severus Snape is a fictional character in J. K. Rowling\'s Harry Potter series. Snape is an exceptionally skilled wizard whose talents span many areas of magic.'
  };

  constructor(private wizarddata: wizarddata) {}

  ngOnInit(): void {
    this.wizarddata.getWizardData().subscribe(
      data => {
        this.wizardData = data;  
      },
      error => {
        console.error('Error fetching wizard data:', error);
       
      }
    );
  }
}
