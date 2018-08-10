import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
package_data=[
  {title: 'asfas',place:'tesf',price: 3000, duration: '4-5 days',commission: 900, pdf: 'hsvljs\dssd'},
  {title: 'asfas',place:'tesf',price: 3000, duration: '4-5 days',commission: 900, pdf: 'hsvljs\dssd'}
];
  package = new FormGroup({
    title: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    commission: new FormControl('', [Validators.required]),
    pdf: new FormControl('', [Validators.required])
  });
 

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  save_package_data(){
    this.spinner.show();
    setTimeout(()=> {
      this.spinner.hide();
      this.package_data.push(this.package.value);
      this.package.reset();
    },500);
    //console.log(this.package_data);
  }
}
