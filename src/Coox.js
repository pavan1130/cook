import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import styles from "./Coox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faChartLine,
  faMoneyCheck,
  faUsers,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons"; // Import cooking chef icon

const Coox = () => {
  return (
    <React.Fragment>
      {/* 1st Section screen  start page */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="https://freedesignfile.com/upload/2019/11/Professionals-cook-vector.jpg"
            alt="Cooking"
          />
        </div>
        <div className={styles.textContainer}>
          <h1>Earn More Money by Cooking</h1>
          <button className={styles.registerButton}>Register Now</button>

          <a href="#" className={styles.languageLinkHindi}>
            हिन्दी
          </a>
          <a href="#" className={styles.languageLinkEnglish}>
            English
          </a>
        </div>
      </div>

      {/* 2nd screen start Benefits  page  */}
      <div>
        <h2 className={styles.heading}>Benefits</h2>
        <ul className={styles.benefitsList}>
          <li>
            <FontAwesomeIcon
              icon={faClock}
              className={`${styles.icon} ${styles.iconClock}`}
            />{" "}
            Flexible Timings &amp; Days
          </li>
          <li>
            <FontAwesomeIcon
              icon={faChartLine}
              className={`${styles.icon} ${styles.iconChart}`}
            />{" "}
            Increase Your Income
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUtensils} // Change the icon here
              className={`${styles.icon} ${styles.iconHeart}`}
            />{" "}
            Do What You Love
          </li>
          <li>
            <FontAwesomeIcon
              icon={faMoneyCheck}
              className={`${styles.icon} ${styles.iconMoneyCheck}`}
            />{" "}
            Receive Money Instantly
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUsers}
              className={`${styles.icon} ${styles.iconUsers}`}
            />{" "}
            Meet New People
          </li>
          <li>
            <FontAwesomeIcon
              icon={faGlobe}
              className={`${styles.icon} ${styles.iconGlobe}`}
            />{" "}
            Join the Revolution
          </li>
        </ul>
      </div>
      {/* 3rd screen start Testimonials page  */}
      <div className={styles.testimonialsContainer}>
        <h2 className={styles.heading}>Testimonials</h2>
        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <img
              src="https://t4.ftcdn.net/jpg/03/26/61/97/360_F_326619721_0TzuppWincAWzBLPUcAzjV2jx84zERL5.jpg"
              alt="Testimonial 1"
              className={styles.testimonialImage}
            />
            <p className={styles.testimonialReview}>
              "I am free to work any time any day. Don't have to worry about
              holidays."
            </p>
            <p className={styles.testimonialName}>Juned</p>
          </div>
          <div className={styles.testimonialCard}>
            <img
              src="https://t4.ftcdn.net/jpg/03/26/61/97/360_F_326619721_0TzuppWincAWzBLPUcAzjV2jx84zERL5.jpg"
              alt="Testimonial 2"
              className={styles.testimonialImage}
            />
            <p className={styles.testimonialReview}>
              "The platform has helped me increase my income significantly. I
              highly recommend it."
            </p>
            <p className={styles.testimonialName}>Lakhan</p>
          </div>
          <div className={styles.testimonialCard}>
            <img
              src="https://t4.ftcdn.net/jpg/03/26/61/97/360_F_326619721_0TzuppWincAWzBLPUcAzjV2jx84zERL5.jpg"
              alt="Testimonial 3"
              className={styles.testimonialImage}
            />
            <p className={styles.testimonialReview}>
              "Working as a cook through this platform has been an incredible
              experience. I love the freedom and flexibility it offers."
            </p>
            <p className={styles.testimonialName}>Madhukar</p>
          </div>
        </div>
      </div>
      {/* 4th screen starting  Download COOX Partner App page  */}
      <div className={styles.appContainer}>
        <div className={styles.imageContainer}>
          <img
            src="https://media.istockphoto.com/id/1202959585/photo/iphone-11-pro-max-in-silver-color-template-front-view-with-blank-screen-for-application.jpg?s=612x612&w=0&k=20&c=NdB74lac_S01bLKRU9miA8o87_xeR7gF_WBVGAZstYY="
            alt="App Screenshot"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Download COOX Partner App</h2>
          <p className={styles.description}>
            Install COOX Partner app in your phone, create your profile and
            start getting bookings near you.
          </p>
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="App Screenshot"
            className={styles.image1}
          />
        </div>
      </div>
      {/* 5th screen  FAQ starting page  */}
      <div className={styles.faqContainer}>
        <h2 className={styles.heading}>FAQ</h2>
        <div className={styles.columnContainer}>
          <div className={styles.column}>
            <div className={styles.question}>
              <h3>
                <AiOutlineMinus className={styles.icon} />
                What to do?
              </h3>
              <p>Go to the customer's home and cook food.</p>
              <p>You DON'T have to wash the utensils.</p>
              <p>You DON'T have to serve.</p>
            </div>
            <div className={styles.question}>
              <h3>
                <AiOutlineMinus className={styles.icon} />
                When can I accept a Booking?
              </h3>
              <p>Take Bookings during your Holidays or Break time.</p>
              <p>No need to leave your current job.</p>
            </div>
            <div className={styles.question}>
              <h3>
                <AiOutlineMinus className={styles.icon} />
                How much money can I get and when?
              </h3>
              <p>
                The amount of money that you will get will be specified in the
                COOX Partner APP.
              </p>
              <p>
                If Customer pays via CASH, then you will receive it instantly.
              </p>
              <p>
                If Customer pays ONLINE, then you will receive the money in your
                Bank account or Paytm account.
              </p>
              <p>Travelling allowance is not provided separately.</p>
            </div>
            <div className={styles.question}>
              <h3>
                <AiOutlineMinus className={styles.icon} />
                Where can I get the booking details?
              </h3>
              <p>
                COOX Partner APP will contain all the information (Menu, Time,
                Money, Address).
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.question}>
              <h3>
                <AiOutlineMinus className={styles.icon} />
                How will I commute at night?
              </h3>
              <p>Please manage your mode of travel yourself.</p>
              <p>Bus, Metro, Auto, OLA Bike, Personal Bike can be taken.</p>
            </div>
            <div className={styles.question}>
              <h3>
                <AiOutlineMinus className={styles.icon} />
                Where will Ingredients come from?
              </h3>
              <p>The Customer will get all the Ingredients.</p>
              <p>You DON'T have to get it.</p>
            </div>
            <div className={styles.question}>
              <h3>
                <AiOutlineMinus className={styles.icon} />
                Where will Appliances come from?
              </h3>
              <p>
                Cook food using the Appliances and utensils present in the
                customer's kitchen.
              </p>
            </div>
            <div className={styles.question}>
              <h3>
                <AiOutlineMinus className={styles.icon} />
                Can an Assistant Cook go with me?
              </h3>
              <p>Yes.</p>
            </div>
          </div>
        </div>
        <button className={styles.registerButton_last}>Register Now</button>
      </div>
    </React.Fragment>
  );
};

export default Coox;
