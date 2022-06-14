/**
 * A Vue component for collapsible text boxes.
 *
 * <p><b>data-cy attributes</b></p>
 * <table>
 * <thead><tr><th>Value</th>        <th>Descripion</th></tr></thead>
 * <tbody>
 * <tr><td>details</td>  <td>The actual interactable box, opens and closes when clicked.</td></tr>
 * <tr><td>summary</td>  <td>Description that goes into the collapsed text box.</td></tr>
 * <tr><td>slot</td>  <td>Whatever is to be rendered using the custom component.</td></tr>
 * <tr><td>summary</td>  <td>Description that goes into the collapsed text box.</td></tr>
 * <tr><td>figcaption</td>  <td>Description of the Pokémon goes in here through a prop.</td></tr>
 * <tr><td>figcaption</td>  <td>Description of the Pokémon's weight and height goes in here through a prop</td></tr>
 * <tr><td>figcaption</td>  <td>Description of the Pokémon's genration and catch rate goes in here through a prop</td></tr>
 * </tbody>
 * </table>
 * 
 * @vue-prop {String} [description] - the Pokedex description of the Pokémon.
 * @vue-prop {String} [resource] - the link that provides more in-depth information about the Pokémon.
 * @vue-prop {String} [gen] the generation that Pokémon was introduced.
 * @vue-prop {Number} [weight] the Pokémon's weight.
 * @vue-prop {Number} [height] the Pokémon's height.
 * @vue-prop {Number} [rate] the Pokémon's catch rate.
 * @vue-prop {Boolean} [selected] whether the text box has been selected or not. Please default to false.
 * 
 * @vue-event closedBox - Watches for changes in the state of the collapsible text box. Calls deselect() within itself.
 * @vue-event deselect - Emits an eveent with the new boolean value to the page so that it can increase or decrease the count accordingly.
 * @vue-event changeClick - Emits an event with no payload when the collapsible text box is clicked. Changes its state.
 */ 
let CollapsibleTextComponent = {
    template: `                
    <span>
    <details data-cy="details-box" class='center'>
        <summary data-cy="summary-box-selectable"  @click='click' class='centerCollapse fancy'><slot> </slot></summary>
        <figcaption data-cy="first-fig-tag" width='350' style='font-size: 14px;'>{{description}}</figcaption> 
        <br data-cy="line-break">
        <figcaption data-cy="second-fig-tag" width='350' style='text-align: left;'>Weight: {{weight}}kg <span style='float: right'>Height: {{height}}m</span></figcaption> 
        <figcaption data-cy="third-fig-tag" width='350' style='text-align: left;'>Introduced: Gen {{gen}} <span style='float: right'>Catch Rate: {{rate}}%</span></figcaption> 
        <figcaption data-cy="link-fig-tag" width='center'><a v-bind:href="resource" target="_blank">Learn More</a></figcaption> 
        </details>  
    </span>
              `,
    props: {
        description: String,
        resource: String,
        gen: String,
        weight: Number,
        height: Number,
        rate: Number,
        selected: Boolean,
        
    },
    data(){
        return {
            closedBox : this.selected,
        }
    },
    methods: {

        click(){
            this.$emit('click')
            console.log('This is before change click ' + this.closedBox.toString())
            this.closedBox = !this.closedBox
            console.log('This is after change click ' + this.closedBox.toString())
            this.$emit('change-count', this.closedBox)
        },

    },
    watch: {
        closedBox(newState){
            console.log("This is the new state: " + newState.toString())
        }
        }
    }


try {
    module.exports = {
        CollapsibleTextComponent: CollapsibleTextComponent
    }
}
catch {}