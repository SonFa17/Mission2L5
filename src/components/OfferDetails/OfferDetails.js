import React from "react";
import classes from "./OfferDetails.module.css";
import { useState } from "react";

function OfferDetails() {
  const [hideShow, setHideShow] = useState([false, true, false, false, false]);
  const toggleDiv = (e) => {
    e.preventDefault();
    console.log(`fresh hideShow: ${hideShow}`);
    let item = hideShow[parseInt(e.target.id)];
    console.log(`item = ${item}`);
    console.log(`type of hideShow: ${typeof (hideShow)}`);

    hideShow.forEach((x, i) => console.log(`the index of ${x} is ${i}`));

    let newHideShow = hideShow.map(x => hideShow.indexOf(x) === parseInt(e.target.id) ? !x : x);
    console.log(`new hide show: ${newHideShow}`);
    // hideShow.forEach((x, i) => setHideShow(newHideShow));
    setHideShow(newHideShow);
    console.log(`after updating hideShow : ${hideShow}`);

  }
  return (
    <div className={classes.offerDetails}>
      <div className={classes.details}>
        <h1>You're in safe hands with Turners</h1>
        <p>
          Enjoy exclusive benefits and the confidence that they're covered with
          buying insurance through Turners
        </p>
        <br></br>
        <div className={classes.comprehensiveDetails}>
          <section className={classes.comprehensiveDetails__top}>
            <img
              alt="man poking out of driver's window"
              src="../images/comprehensive_details_image_1.png"
            ></img>
            <div className={classes.comprehensiveDetailsText}>
              <h3>Trust the insurance you've bought</h3>
              <p>
                we partner with award winning Tower Insurance.
                <br></br>
                From utes to EVs - insure your car with confidence with
                Canstar's Car insurer of the year and winner of Outstanding
                Value Car Insurance 2021.
                <br></br>
                Towers financial strength rating is A- (Excellent), so you can
                rest assured knowing you're in safe hands.
              </p>
            </div>
          </section>
          <br></br>

          <section className={classes.comprehensiveDetails__top}>
            <div className={classes.comprehensiveDetailsText}>
              <h3>Get in a crash? Help is here 24/7 - give us a call</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                nostrum illo officiis libero dignissimos eos expedita. Adipisci
                earum, culpa quam suscipit incidunt nostrum officiis omnis hic
                beatae ipsa dolorem modi.
                <br></br>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                voluptatibus doloremque officia dolore mollitia voluptates
                soluta eaque reiciendis, nihil atque rem quam laboriosam nostrum
                iusto ea perspiciatis placeat necessitatibus? Quos.
              </p>
            </div>
            <img
              alt="man on mobile phone"
              src="../images/comprehensive_details_image_2.png"
            ></img>
          </section>
          <br></br>
          <br></br>
          <section className={classes.comprehensiveDetails__top}>
            <img
              alt="man smiling at mobile phone"
              src="../images/comprehensive_details_image_3.png"
            ></img>
            <div className={classes.comprehensiveDetailsText}>
              <h3>Simple and Easy Claims Process.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis aspernatur corporis voluptatem commodi veritatis,
                error est minus at sapiente dolor maxime voluptate sunt libero
                perferendis officiis, ipsa nulla! Impedit, provident?
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                dolores hic cum? Esse laborum in dolor architecto illo unde
                neque vero atque cupiditate repudiandae, quisquam repellendus
                dicta natus fugit at.
              </p>
            </div>
          </section>
        </div>
        <div className={classes.diveDeeper}>
          <h1>Dive deeper into our policy options</h1>
          <section className={classes.diveDeeperSection}>
            <nav className={classes.diveDeeperButtons}>
              <button>
                <img alt="car crash icon" src="../images/bxs_car-crash.png" />
                Third Party, Fire & Theft
              </button>
              <button>
                <img
                  alt="tick shield"
                  src="../images/charm_shield_tick_black_on_white.png"
                ></img>
                Comprehensive Cover
              </button>
              <button>
                <img
                  alt="mechanical breakdown icon"
                  src="../images/icon-park-outline_tool.png"
                ></img>{" "}
                Mechanical Breakdown
              </button>
            </nav>
            <section className={classes.diveDeeperDetails}>
              <img
                alt="father with two kids"
                src="../images/dive_deeper_family.png"
              ></img>
              <section className={classes.diveDeeperDetailsText}>
                <img
                  alt="Tick shield black on white"
                  src="../images/charm_shield_tick_black_on_white.png"
                ></img>
                <h3>
                  The highest level of cover for your car and covers the damage
                  you may do to others
                </h3>
                <p>
                  protect you and your family with Full Comprehensive Insurance
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi morbi sit consectetur
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi morbi sit consectetur
                  <br />
                  <br />
                </p>
                <nav className={classes.diveDeeperDetailsTextButtons}>
                  <button>Get Quote</button>
                  <button>View Policy Document</button>
                </nav>
              </section>
            </section>
          </section>
          <section className={classes.diveDeeperDetailsList}>
            <div className={classes.top}>
              <div className={classes.topListItems}>
                <div className={classes.topListItemsTitle}>
                  <img alt="airplane" src="../images/icon.png"></img>
                  <h2>Emergency travel, accommodation & repairs</h2>
                </div>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolores, voluptatem! Similique at incidunt delectus est
                  quidem? Fugit consectetur officia vel aut perferendis atque
                  harum quas ex voluptate, commodi, autem sapiente?
                </p>
              </div>
              <div className={classes.topListItems}>
                <div className={classes.topListItemsTitle}>
                  <img alt="icon1" src="../images/icon1.png"></img>
                  <h2>Claims that were not your fault</h2>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  dolor totam esse debitis corrupti assumenda, natus eius ipsum
                  fugiat maiores iste, voluptas vitae nesciunt cupiditate id
                  cumque necessitatibus quis nobis?
                </p>
              </div>
              <div className={classes.topListItems}>
                <div className={classes.topListItemsTitle}>
                  <img alt="icon2" src="../images/icon2.png"></img>
                  <h2>Repair guarantee, Replacements and additional cars.</h2>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  incidunt dicta blanditiis aliquam illo. Sequi blanditiis quos
                  aut perferendis velit voluptatum animi, libero, quod dolor nam
                  id numquam nemo cupiditate!
                </p>
              </div>
            </div>
            <div className={classes.bottom}>
              <div className={classes.bottomListItems}>
                <div className={classes.bottomListItemsTitle}>
                  <img alt="icon3" src="../images/icon3.png"></img>
                  <h2>All benefits of 3rd party, Fire & Theft</h2>
                </div>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit repellat odio eveniet voluptas iste nihil doloribus
                  omnis velit libero iusto. Doloremque perferendis fugiat,
                  doloribus aut quidem pariatur nisi ducimus est?
                </p>
              </div>
              <div className={classes.bottomListItems}>
                <div className={classes.bottomListItemsTitle}>
                  <img alt="icon4" src="../images/icon4.png"></img>
                  <h2>Natural disaster damage</h2>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  fugiat aut dolor natus ipsam amet libero est necessitatibus
                  magnam vero numquam odit enim modi. Voluptas commodi quis
                  perferendis debitis expedita.
                </p>
              </div>
              <div className={classes.bottomListItems}>
                <div className={classes.bottomListItemsTitle}>
                  <img alt="icon5" src="../images/icon5.png"></img>
                  <h2>Insured by Tower Insurance</h2>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus voluptatem eaque autem dolorum fuga incidunt! Voluptatum
                  doloremque voluptatem delectus voluptas natus accusamus,
                  quidem sed odio deserunt, dolores placeat sunt ducimus!
                </p>
              </div>
            </div>
          </section>
          <section className={classes.commonAskedQuestions}>
            <div className={classes.commonAskedQuestionsTitle}>
              <h1>Common questions asked about comprehensive cover</h1>
              <div className={classes.questionList}>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet desu ka??
                    <i className={`${classes.arrow} ${classes.down}`} onClick={toggleDiv} id="0"></i>
                    <div>Hai! Lorem ipsum dolor sit desu!!</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default OfferDetails;
