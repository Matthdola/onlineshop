import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  defaultBrews = [
    {
      name: 'Avondale Brewing Co',
      country: 'UNITED STATES',
      website_url: 'www.avondale.com'
    },
    {
      name: 'Bad Water Brewing Co',
      country: 'UNITED STATES',
      website_url: 'www.avondale.com'
    },
    {
      name: 'Brand of Brothers Brewing Company',
      country: 'UNITED STATES',
      website_url: 'www.avondale.com'
    },
    {
      name: 'Trim Tab Brewing',
      country: 'UNITED STATES',
      website_url: 'www.avondale.com'
    },
    {
      name: 'Yellowhammer Brewery',
      country: 'UNITED STATES',
      website_url: 'www.avondale.com'
    },
    {
      name: 'Bearpaw River Brewing Co',
      country: 'UNITED STATES',
      website_url: 'www.avondale.com'
    },
    {
      name: 'King Street Brewing Co',
      country: 'UNITED STATES',
      website_url: 'www.avondale.com'
    },
    {
      name: '1912 Brewing Co',
      country: 'UNITED STATES',
      website_url: 'www.avondale.com'
    }
  ];

  brews: Object;

  constructor(private http: HttpService) { }

  ngOnInit() {
    /*
    this.http.getBeer().subscribe(data => {
      this.brews = data;
    });
    */
  }

}
