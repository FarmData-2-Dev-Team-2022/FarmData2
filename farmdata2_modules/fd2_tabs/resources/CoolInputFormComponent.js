/**
 * A Vue component for a color-changing input form.
 *
 * 
 * @vue-prop {String} defaultInput - The default display value of the input form
 * 
 * @vue-event {String} input changed - Displays changed input as a text on the bottom and check if the input is a CSS color; if it is, the color of the input form.
 * @vue-event resetInput - clears the input field when clicked.
 */ 
let CoolInputFormComponent = {
    template: `<span>
            <slot></slot>
            <input data-cy="cool-input" type="text" id="cool" :style="{'background-color': selectedColor}" @click="resetInput" v-model="typedInput">
            <p>{{typedInput}}</p>   
            </span>`,
    props: {
            defaultInput:{
                type: String,
            }, 
    },
    data(){
        return {

            selectedColor: '',
            typedInput: this.defaultInput,
        } 
    },
    methods: {
        resetInput(){
            this.typedInput = ''
        },
    },
    watch: {
        typedInput(newTypedValue){
            var s = new Option().style;
            s.color = newTypedValue;
            if ( s.color == newTypedValue.toLowerCase()) {
                this.selectedColor = newTypedValue;
            } else {
                this.selectedColor = '';
            }
        },
    }

}

    
try {
    module.exports = {
        CoolInputFormComponent: CoolInputFormComponent
    }
}
catch {}