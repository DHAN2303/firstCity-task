
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-tf-info',
  templateUrl: './tf-info.component.html',
  styleUrls: ['./tf-info.component.css']
})
export class TfInfoComponent implements OnInit {

  name = 'NGX-Graph Demo';

  clusters = [
    {
      id: 'third',
      label: 'Cluster node',
      childNodeIds: ['c1', 'c2']
    }
  ];



  nodes = [
    {
      id: 'first',
      label: 'محطة الجمرات',
      count: '800',
      code: "JMR"
    }, {
      id: 'second',
      label: 'المسجد الحرام',
      count: '11,650',
      code: "HRM"

    }, {
      id: 'c1',
      label: 'مخيمات منى',
      count: '1,000',
      code: "MIN"

    }, {
      id: 'c2',
      label: 'مشعر عرفات',
      count: '43,434',
      code: "ARF"

    }, {
      id: 'd',
      label: 'مشعر مزدلفة',
      count: '0',
      code: "MUZ"

    }
  ]





  links = [{
    id: 'a',
    source: 'first',
    target: 'second',
    label: '0'
  }, {
    id: 'b',
    source: 'second',
    target: 'c1',
    label: '0'
  }, {
    id: 'd',
    source: 'first',
    target: 'c1',
    label: '0'
  }, {
    id: 'e',
    source: 'c1',
    target: 'first',
    label: '0'
  }, {
    id: 'f',
    source: 'c1',
    target: 'c2',
    label: '0'
  }, {
    id: 'g',
    source: 'c2',
    target: 'd',
    label: '0'
  }, {
    id: 'h',
    source: 'd',
    target: 'c1',
    label: '0'
  }


  ]


  dagreLayout = {
    ranksep: 50 //set here the value you want
  }
  layout = 'dagreCluster';
  layouts: any[] = [
    {
      label: 'Dagre',
      value: 'dagre',
    },
    {
      label: 'Dagre Cluster',
      value: 'dagreCluster',
      isClustered: true,
    },
    {
      label: 'Cola Force Directed',
      value: 'colaForceDirected',
      isClustered: true,
    },
    {
      label: 'D3 Force Directed',
      value: 'd3ForceDirected',
    },
  ];


  // line interpolation
  curveType: string = 'Step Before';
  curve: any = shape.curveLinear;
  interpolationTypes = [
    'Linear',
    'Cardinal',
    'Catmull Rom',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before'
  ];

  draggingEnabled: boolean = false;
  panningEnabled: boolean = true;
  zoomEnabled: boolean = false;


  panOnZoom: boolean = true;

  autoZoom: boolean = false;
  autoCenter: boolean = false;

  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

  ngOnInit() {
    this.setInterpolationType(this.curveType);
  }

  setInterpolationType(curveType) {
    this.curveType = curveType;
    if (curveType === 'Linear') {
      this.curve = shape.curveBundle.beta(1);
    }
    if (curveType === 'Cardinal') {
      this.curve = shape.curveCardinal;
    }
    if (curveType === 'Catmull Rom') {
      this.curve = shape.curveCatmullRom;
    }
    if (curveType === 'Bundle') {
      this.curve = shape.curveLinear;
    }
    if (curveType === 'Monotone X') {
      this.curve = shape.curveMonotoneX;
    }
    if (curveType === 'Monotone Y') {
      this.curve = shape.curveMonotoneY;
    }
    if (curveType === 'Natural') {
      this.curve = shape.curveNatural;
    }
    if (curveType === 'Step') {
      this.curve = shape.curveStep;
    }
    if (curveType === 'Step After') {
      this.curve = shape.curveStepAfter;
    }
    if (curveType === 'Step Before') {
      this.curve = shape.curveStepBefore;
    }

    console.log(this.curveType)

  }

  setLayout(layoutName: string): void {
    const layout = this.layouts.find(l => l.value === layoutName);
    this.layout = layoutName;
    if (!layout.isClustered) {
      this.clusters = undefined;
    } else {
      this.clusters = this.clusters;
    }
  }
}
