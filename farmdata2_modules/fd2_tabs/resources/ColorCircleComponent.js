/**
 * A Vue component for a color-changing input form.
 *
 * 
 * @vue-prop {String} defaultC - The default color of the first circle element. 
 * 
 * @vue-event {String} circle input changed - changes the color of the circles and emits the color value to the parent.
 * @vue-event resetInput - clears the input field when clicked.
 * @vue-event {String, String} addColorArray  - emits 'update-color' event when the input value is changed and the input is a CSS color. Pass the old color and new color with the event. 
 **/
let ColorCircleComponent = {
    template: `
            <div>
                <div>
                <input
                    data-cy="color-circle" 
                    type="text"
                    v-model="circleColor"
                    @click="resetInput"
                />
                </div>
                <div id="circles" v-bind:style="circleStyle"></div>
            </div>            
            `,
    props: {
        defaultColor: {
            type:String,
        },
        defaultValue: {
            type:String,
        }
    },
    data() {
        return {
            circleStyle: {
                backgroundColor: this.defaultColor,
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                margin: '40px',
                float: 'center',
            },
            circleColor: this.defaultValue,
        }
    },
    methods: {
        resetInput(){
            this.circleColor = ''
        },
        addColorArray(newcolor, oldColor){
            this.$emit('update-color', [newcolor, oldColor])
        },
    },
    watch: {
        circleColor(newColor) {
            var s = new Option().style;
            var oldColor = this.circleStyle.backgroundColor;
            s.color = newColor;
            if ( s.color == newColor.toLowerCase() && newColor !="") {
                this.circleColor = newColor;
                this.circleStyle.backgroundColor = newColor;
                this.addColorArray(newColor, oldColor)
            }
        },  
    }
}

try {
    module.exports = {
        ColorCircleComponent: ColorCircleComponent
    }
}
catch {}