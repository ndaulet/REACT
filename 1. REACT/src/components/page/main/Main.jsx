import './Main.module.scss'
import classes from './Main.module.scss'

function Main() {
    return (
        <main>
            <div className={classes.container}>
                <h2>CATS</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit accusamus ex tempore unde voluptate cum.</p>
                <button>Button</button>
            </div>
            <div className={classes.container}>
                <h2>DOGS</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cupiditate quos vel, magnam fugit enim ullam</p>
                <button>Button</button>
            </div>
            <div className={classes.container}>
                <h2>RABBITS</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quos aperiam libero aut maxime est!</p>
                <button>Button</button>
            </div>
        </main>
    )
}

export default Main
