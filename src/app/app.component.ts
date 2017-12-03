import {Component, OnInit} from '@angular/core';

declare var AMap;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  map;

  private administrativeRegion = [{
    name: '秀峰区',
    center: '110.264183,25.273625'
  }, {
    name: '叠彩区',
    center: '110.30188,25.31402'
  }, {
    name: '象山区',
    center: '110.28110,25.26159'
  }, {
    name: '七星区',
    center: '110.322224,25.252701'
  }, {
    name: '雁山区',
    center: '110.28669,25.101935'
  }, {
    name: '临桂区',
    center: '110.212463,25.238628'
  }];

  constructor() {
  }

  ngOnInit() {
    this.map = new AMap.Map('mapContainer', {
      resizeEnable: true,
      zoom: 11,
      center: [110.29002, 25.27361]
    });
    this.map.on('complete', () => {
      for (const item of this.administrativeRegion) {
        new AMap.Marker({
          position: item.center.split(','),
          // offset: new AMap.Pixel(-12, -12),
          map: this.map
        });
      }
    });
  }
}
