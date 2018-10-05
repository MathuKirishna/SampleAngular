import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import {SearchService} from '../providers/search.service';
@Component({
  selector: 'app-advancedsearchbar',
  templateUrl: './advancedsearchbar.component.html',
  styleUrls: ['./advancedsearchbar.component.css']
})
export class AdvancedsearchbarComponent implements OnInit {

  values : any;
  constructor(private router :ActivatedRoute,private searchService: SearchService ) { }

  ngOnInit() {
   console.log(this.searchService.optionValue);
  }

}
