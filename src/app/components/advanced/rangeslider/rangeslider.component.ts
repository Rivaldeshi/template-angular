import { Component, ElementRef, ViewChild } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FormControl } from '@angular/forms';
import wNumb from 'wnumb';
import noUiSlider from 'nouislider';

interface SimpleSliderModel {
  value: number;
  options: Options;
}

interface RangeSliderModel {
  minValue: number;
  maxValue: number;
  options: Options;
}

@Component({
  selector: 'app-rangeslider',
  templateUrl: './rangeslider.component.html',
  styleUrls: ['./rangeslider.component.scss'],
})
export class RangesliderComponent {
  value1 = 20;
  value2 = 100;
  value3 = 20;
  value4 = 60;
  value5 = 50;
  value7 = 50;
  value8 = 50;
  value9 = 20;
  value10 = 40;
  value11 = 60;
  value12 = 50;
  value13 = 50;
  value14 = 50;
  minValue = 10;
  maxValue = 90;
  minValue1 = 10;
  maxValue1 = 90;
  minValue2 = 10;
  maxValue2 = 90;
  minValue3 = 15;
  maxValue3 = 85;
  minValue4 = 15;
  maxValue4 = 85;

  red = 0;
  green = 0;
  blue = 0;

  updateColor(): void {
    // No changes required for this method
  }

  getColor(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  @ViewChild('result') resultElement!: ElementRef;
  @ViewChild('slider1') slider1!: ElementRef;
  @ViewChild('slider2') slider2!: ElementRef;
  @ViewChild('slider3') slider3!: ElementRef;

  ngOnInit() {
    if (this.resultElement && this.slider1 && this.slider2 && this.slider3) {
      const sliders = [this.slider1, this.slider2, this.slider3];
      const colors = [127, 127, 127];

      sliders.forEach((slider: ElementRef, index: number) => {
        noUiSlider.create(slider.nativeElement, {
          start: 127,
          connect: [true, false],
          orientation: 'vertical',
          range: {
            min: 0,
            max: 255,
          },
          format: wNumb({
            decimals: 0,
          }),
        });

        slider.nativeElement.noUiSlider.on('update', () => {
          colors[index] = +slider.nativeElement.noUiSlider.get();
          const color = 'rgb(' + colors.join(',') + ')';
          this.resultElement.nativeElement.style.background = color;
          this.resultElement.nativeElement.style.color = color;
        });
      });
    }
  }

  sliderControl: FormControl = new FormControl(100);
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 0,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
  };
  value6 = 6;
  options1: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
    getSelectionBarColor: (value: any): string => {
      if (value <= 3) {
        return 'red';
      }
      if (value <= 6) {
        return 'orange';
      }
      if (value <= 9) {
        return 'yellow';
      }
      return '#2AE02A';
    },
  };

  verticalSlider4: SimpleSliderModel = {
    value: 1,
    options: {
      floor: 0,
      ceil: 1,
      vertical: true,
      showSelectionBar: false,
      selectionBarGradient: {
        from: '#5a66f1',
        to: '#5a66f1',
      },
    },
  };

  options3: Options = {
    floor: 0,
    ceil: 100,
    showTicksValues: true,
    tickStep: 10,
    tickValueStep: 10,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
  };
  options4: Options = {
    floor: 0,
    ceil: 100,
    showTicksValues: true,
    ticksArray: [25, 50],
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
  };
  minValue5 = 15;
  maxValue5 = 85;
  options5: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
  };
  minValue6 = 15;
  maxValue6 = 85;
  options6: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#60a5fa',
      to: '#60a5fa',
    },
  };
  minValue7 = 15;
  maxValue7 = 85;
  options7: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#eab308',
      to: '#eab308',
    },
  };
  minValue8 = 15;
  maxValue8 = 85;
  options8: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#4c75cf',
      to: '#4c75cf',
    },
  };
  minValue9 = 15;
  maxValue9 = 85;
  options9: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#22c55e',
      to: '#22c55e',
    },
  };
  minValue10 = 15;
  maxValue10 = 85;
  options10: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#f43f5e',
      to: '#f43f5e',
    },
  };
  options11: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
  };
  minValue12 = 15;
  maxValue12 = 85;
  options12: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    minRange: 10,
    maxRange: 30,
    pushRange: true,
  };

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 20;
}
