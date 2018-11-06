import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenDataParisServices } from '../services/OpenDataParisServices';

@Component({
  selector: 'app-details-events',
  templateUrl: './details-events.component.html',
  styleUrls: ['./details-events.component.css']
})
export class DetailsEventsComponent implements OnInit {
  dataFiltered = [];
  event: any;

  constructor(private route: ActivatedRoute, private api: OpenDataParisServices) { }

  ngOnInit() {
    this.dataFiltered = this.api.dataFiltered;
    const id = this.route.snapshot.params['id'];
    this.event = this.api.getEventById(id);
    console.log(this.event);
  }
}
