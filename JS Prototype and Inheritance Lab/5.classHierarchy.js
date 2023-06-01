function result () {

    class Figure {
        constructor(defaultUnit = 'cm') {
            this.defaultUnit = defaultUnit;
        }
        metricConversion(value) {
            if(this.defaultUnit == 'mm') {
                return value *= 10;
            } else if(this.defaultUnit == 'm') {
                return value/= 10;
            } else {
                return value;
            }
        }

        changeUnits(unit) {
            this.defaultUnit = unit;
        }
        toString() {
            return `Figures units: ${units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius,defaultUnit) {
            super(defaultUnit);
            this._radius = radius;
        }
        get area() {
            this.radius = this.metricConversion(this._radius);
            return Math.PI * this.radius * this.radius;
        }
        toString() {
            return `Figures units: ${this.defaultUnit} Area: ${this.area} - radius: ${this._radius}`
        }
    }

    class Rectangle extends Figure {

        constructor(width,height,units) {
            super(units);
            this._width = width;
            this._height = height;
            this.units = units;
        }
        get area() {
            this.width = this.metricConversion(this._width);
            this.height = this.metricConversion(this._height);

            return this.width * this.height;
        }
        toString() {
            return `Figures units: ${this.defaultUnit} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    }
}



let classes = result();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

    let c = new Circle(5);
    console.log(c.area);
    // assert.equal(c.area,78.53981633974483, "1");
    console.log(c.toString());
    // assert.equal(c.toString(),"Figures units: cm Area: 78.53981633974483 - radius: 5","2"); 
    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area);
    // assert.equal(r.area,1200,"3");
    console.log(r.toString());
    // assert.equal(r.toString(),"Figures units: mm Area: 1200 - width: 30, height: 40", "4");
    r.changeUnits('cm');
    console.log(r.area);
    // assert.equal(r.area,12,"5");
    console.log(r.toString());
    // assert.equal(r.toString(),"Figures units: cm Area: 12 - width: 3, height: 4","5");
    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50