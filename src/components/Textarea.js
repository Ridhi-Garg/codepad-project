import PropTypes from 'prop-types'

const Textarea = ({readOnly,type, placeholder }) => {
    return (
        <div>
            <textarea readOnly={readOnly} placeholder= {placeholder}  type={type}></textarea>
        </div>

        // <div>
        //     <input type={type} placeholder= {placeholder}/>
        // </div>
    )
}

Textarea.propTypes={
    placeholder: PropTypes.string,
    type:PropTypes.string,
}

export default Textarea