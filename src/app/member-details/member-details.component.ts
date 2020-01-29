import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberDetailService } from '../member-detail.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  contact_details: any;
  isDataAvailable:boolean = false;
  constructor(private contactService: MemberDetailService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    console.log(params.get('id'))
    this.contactService.getContact(params.get('id')).subscribe((data)=> {console.log(data)
      this.contact_details=(data);
      this.isDataAvailable= true;
    });
  });
  }
}
