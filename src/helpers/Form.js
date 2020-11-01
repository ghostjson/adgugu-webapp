

export default class Form{

    constructor(formObject) {
        this.formObject = formObject;
    }

    validateForm(exceptions = [])
    {
        for (const field in this.formObject) {
            if(!exceptions.includes(field))
            {
                if(this.formObject[field] === '' || this.formObject[field] === undefined || this.formObject[field] === null)
                {
                    this.error = field;
                    return false;
                }
            }
        }

        return true;
    }

    getFieldError()
    {
        let field = this.error.split('_');

        field.forEach( (word, index,field) => {
            field[index] = word.charAt(0).toUpperCase() + word.slice(1)
        })


        return `${field.join(' ')} should not be empty`;
    }

    checkConfirmPassword(){
        return this.formObject.password === this.formObject.confirm_password;
    }

}
