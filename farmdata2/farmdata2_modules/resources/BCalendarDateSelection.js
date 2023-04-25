const { BCalendar } = require('bootstrap-vue')

let BCalendarDateSelection = {
    template: `
            <span>
                <slot></slot>
                <b-calendar data-cy='date-select'
                locale="en-US"></b-calendar>
            </span>`,
    props: {
        dateValue: {
            type: String,
            required: true,
        }
    },
    data(){
        return {
            selectedDate: this.dateValue,
        } 
    },
    component: {
        'b-calendar': BCalendar
    },  
    // props: {
    //     setDate: {
    //         type: String,
    //         required: true,
    //     },
    //     earliestDate: {
    //         type: String,
    //     },
    //     latestDate: {
    //         type: String, 
    //     },
    //     disabled: {
    //         type: Boolean,
    //         default: false,
    //     }
    // },
    // data(){
    //     return {
    //         selectedDate: this.setDate,
    //         isDisabled: this.disabled
    //     } 
    // },
    // mounted() {
    //     this.checkBounds()
    // },
    // methods: {
    //     click(){
    //         this.$emit('click')
    //     },
    //     checkBounds() {
    //         if (this.selectedDate > this.latestDate) {
    //             this.selectedDate = this.latestDate;
    //         }
    //         else if (this.selectedDate < this.earliestDate) {
    //             this.selectedDate = this.earliestDate;
    //         }
    //         this.$emit('date-changed', this.selectedDate)
    //     },
    // },
    // watch: {
    //     setDate(newDate) {
    //         this.selectedDate = newDate;
    //         this.checkBounds();
    //     },
    //     disabled(newBool) {
    //         this.isDisabled = newBool;
    //     }
    // }
    
}

try {
    module.exports = {
        BCalendarDateSelection
    }
}
catch {}