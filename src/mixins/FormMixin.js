

export default{
    data(){
      return {
          alert: ''
      }
    },
    computed: {
        anyAlert(){
            return this.alert !== '';
        }
    }
}
