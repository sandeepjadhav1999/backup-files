import 'bulma/css/bulma.css'
import PostCard from './postCard'
import AlexaImage from './images/alexa.png'
import CorotanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                        Personal Assistance
                    </p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <PostCard title='Alexa' handle='@alexa99' image={AlexaImage} />
                        </div>
                        <div className='column is-3'>
                            <PostCard title='Cortona' handle='@cortona09' image={CorotanaImage} />
                        </div>
                        <div className='column is-3'>
                            <PostCard title='Siri' handle='@siri19' image={SiriImage} />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default App