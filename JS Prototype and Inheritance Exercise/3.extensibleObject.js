function result() {

        let ojb = Object.getPrototypeOf(template);
        ojb.prototype.extend = function() {
            return;
        }
    }

    

    var template = {
        extensionMethod: function () {
            console.log("From extension method")
        }
    };
    
    var testObject = result();
    testObject.extend(template);
    console.log(Object.getPrototypeOf(testObject).hasOwnProperty('extensionMethod'));
// expect(Object.getPrototypeOf(testObject).hasOwnProperty('extensionMethod')).to.equal(true, "Object's prototype was not extended");