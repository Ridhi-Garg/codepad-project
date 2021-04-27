import Textarea from './Textarea'
const Editor = () => {
    return (
        <div className="editor">
            <div className= "ce">
                <div className='edit'><Textarea readOnly={false} placeholder='Write a code..' type='text'/></div>
            </div>
                    <div className='row' >  
                        <div className='ip'><Textarea readOnly={false} placeholder='Enter Input' type='text'/></div>
                        <div className='op'><Textarea readOnly={true} placeholder='Output' type='text' /></div>
                    </div>
            
        </div>

        
    )
}

export default Editor
