import Button from './Button'
import Bar from './Bar'
const Header = () => {

    const onClick =()=>{
    console.log('click')
}

    return (
        <header className='header'>
            <img src="./code_logo.png" alt="" height='100px' width= '100px'/>
           <Bar/>
           <Button id='user' color=''  text='User' onClick={onClick}/>
        </header>
    )
}

export default Header
