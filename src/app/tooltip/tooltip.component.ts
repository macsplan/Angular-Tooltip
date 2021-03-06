import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})

export class TooltipComponent implements OnInit {

  @Input() text: string
  @Input() visible: boolean
  @Input() buttonIdx: string
  
  constructor() { }

  ngOnInit() {

  }

}
