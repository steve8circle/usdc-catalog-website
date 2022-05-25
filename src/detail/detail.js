import { Fragment } from 'react'
import './detail.css'
import p1 from './img/1.png'
import twitter from './img/twitter.png'
import globe from './img/globe.png'
import { Link } from 'react-router-dom'
import More from './more/more.js'

export default function detail(){
    return (
        <Fragment>
            <div className='Layout'>
                <div className='Header'>
                    <Link to='/'>
                        <div className='Back hover:underline underline-offset-2'>&lt; BACK TO ECOSYSTEM CATALOG</div>
                    </Link>
                    <div className='DEFI hover:bg-violet-600'>DEFI</div>
                    <div className='T_E hover:bg-violet-600'>TRADING/EXCHANGES</div>
                </div>
                <div className='Title'>
                    <img src={p1} alt='' className='mainImg'></img>
                    <h1 className='h1'>Liquid</h1>
                    <img src={twitter} alt='' className='twitter'></img>
                    <img src={globe} alt='' className='globe'></img>
                    <div className='Desc'>Join the most comprehensive and secure trading platform for beginners and pros.</div>
                </div>
                <div className='Intro'>
                    <div className='words'>
                        <h2 className='h2'>How Liquid leverages USDC</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed condimentum sapien. Aliquam scelerisque dui augue, eget vehicula sapien tristique nec.</p>
                        <p>Nunc mauris lectus, tincidunt fermentum mollis nec, venenatis eu diam. In faucibus, lacus id maximus imperdiet, ante sem cursus orci, vel pulvinar tellus metus vestibulum nisi. </p>
                        <p>Morbi nisl dui, lacinia quis mollis nec, elementum a nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa erat, dictum id nunc eu, posuere blandit magna. Mauris feugiat non ante a iaculis. Donec ac congue purus. </p>
                    </div>
                    <div className='stats'>
                        <h2 className='h2'>Stats</h2>
                        <div className='number'><span className='total'>155.8mm</span> USDC</div>
                        <div className='number_divide'>
                            <div className='divide'>69mm</div>
                            <div className='number'>USDC/ETH</div>
                        </div>
                        <div className='number_divide'>
                            <div className='divide'>42mm</div>
                            <div className='number'>USDC/SOL</div>
                        </div>
                        <div className='number_divide'>
                            <div className='divide'>44.8mm</div>
                            <div className='number'>USDC/AVAX</div>
                        </div>
                    </div>
                </div>
            </div>
            <More />
        </Fragment>
    )
}