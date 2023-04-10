import Styles from '@/styles/Posts.module.css'
import battlefield from "../../../../public/assests/BV.jpg"
import Footer from "../Footer.js"
import Image from 'next/image'
import Header from '../Header.js'
import Head from 'next/head'
const Bv = () => {
  return (
    <>
      <Head>
        <title>Battlefield V</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <br />
      <br />
      <main className={Styles.main}> <h1 className={Styles.name}>Battlefield V</h1>
        <div className={Styles.image}>
          <Image className={Styles.image} src={battlefield} alt="battlefield" width={500} height={300} priority />
        </div>

        <div className={Styles.p}>

          <h2>1. Mysteries Light: </h2>
          <p> During my playthrough of the "Under no flag" campaign in Battlefield V, I encountered a bug while attempting to complete the objective of "Planting a time bomb on Stuka aircraft." I noticed a small, shining light floating in mid-air that appeared out of place and did not seem to be related to any nearby objects, despite a table being positioned next to it. It is unclear if this light was intended to be a table lamp or if it was placed there for another reason by the developers. Regardless, I wanted to report this issue.
          </p>


          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/QrD_7V4q3vM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>2. Poor trees graphics and Ground shrinkage: </h2>
          <p> In the campaign “Under no flag”, I get another objective: “Infiltrate enemy garrisons”. I come across the interesting glitch while exploring instead of completing the mission. As I climbed up the mountains, I noticed that some trees had low-quality graphics and appeared blurry, with a 2D shape. Additionally, the ground suddenly started to shrink in a square shape as I moved forward, which seemed to be related to the game's physics. The shrinking continued until I could see a gap in the ground, and it became possible to see right through it.
          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/AVLzpM2xfWk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>3. Flapping Ammunition Belt: </h2>
          <p>While progressing through the mission objective of "infiltrating enemy garrisons," I encountered an enemy soldier whom I shot and killed. On approaching his lifeless body, I noticed that his ammunition belt was flapping in the breeze as if it were made of a feather, indicating a surprisingly lightweight loadout.
          </p>

          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/imtmBKFCZFM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>4. Enemy tank stuck in the wooden pole after attack:</h2>
          <p>  During the mission objective to repel all enemy forces, I destroyed an enemy tank using a German panzerfaust. But the tank got stuck on a wooden pole and started swinging up and down like a pendulum. A dead body next to it appeared to be levitating up from the ground sync with tank movement.
          </p>

          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/3OyyZThU6sE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>5. Enemy head stuck in the solid object (Object collision issue):
          </h2>

          <p>
            During the "Find the missing resistance fighter" objective, I encountered a collision bug where an enemy I shot on a watchtower fell and got stuck with his head in the safety rail.
          </p>

          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/schAsxsqaqw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>6. Misplaced pillow in game environment:


          </h2>
          <p>
            During the "Find the missing resistance fighter" objective, I encountered an object that did not fit with its surroundings - a pillow mounted on a wall. While it is possible that the pillow was intended for a character to take a rest or for humorous effect, I further explored the building and found the same pillow on a bench in another part of the building. This indicates that the pillow's placement on the wall was likely a mistake or bug, rather than an intentional design choice.
          </p>

          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/CR_i36cD7C8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Bv