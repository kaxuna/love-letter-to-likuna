import React from 'react';
import {Typography, Paper} from '@mui/material';
import hearts1 from './assets/1.jpeg'
import hearts2 from './assets/2.jpeg'
import hearts3 from './assets/3.jpeg'
import hearts4 from './assets/4.jpeg'
import hearts5 from './assets/5.jpeg'
import hearts6 from './assets/6.jpeg'
import hearts7 from './assets/7.jpeg'
import hearts8 from './assets/8.jpeg'
import hearts9 from './assets/9.jpeg'
import hearts10 from './assets/10.jpeg'
import hearts11 from './assets/11.jpeg'
import hearts12 from './assets/12.jpeg'
import hearts13 from './assets/13.jpeg'
import hearts14 from './assets/14.jpeg'
import hearts15 from './assets/15.jpeg'
import hearts16 from './assets/16.jpeg'
import hearts17 from './assets/17.jpeg'
import hearts18 from './assets/18.jpeg'

const messages = [
    "You're my sunshine on a cloudy day ☀️, my love! ❤️",
    "My heart does a little happy dance every time I think of you 💃😊",
    "You're the sweetest dream come true 💭💖",
    "Being with you feels like coming home 🏡❤️",
    "You make my ordinary days extraordinary ✨😘",
    "I'm so lucky to have your love 🍀❤️",
    "You're my favorite person in the whole wide world 🌍🥰",
    "Just the thought of you puts a smile on my face 😊💋",
    "You're the missing piece to my puzzle 🧩❤️",
    "My love for you grows stronger every single day 🌱💖",
    "You're the reason I believe in magic ✨😘",
    "You make my heart feel so full 🥰❤️",
    "I love your laugh more than words can say 😂💖",
    "You're my best friend and my greatest love 🤗❤️",
    "Every moment with you is a treasure 💎😘",
    "You're the sweetest melody in my life 🎶💖",
    "I'm completely and utterly in love with you 😍❤️",
    "You make everything better just by being you 🥰💋",
    "You're my happy place 😊❤️",
    "I could get lost in your eyes forever 👀💖",
    "You're the cutest thing I've ever known 🥰😘",
    "My heart beats only for you 💓❤️",
    "You're my little slice of heaven 😇💖",
    "I cherish every single thing about you 🥰💋",
    "You're the sparkle in my day ✨❤️",
    "Loving you is the easiest and best thing I do 🥰💖",
    "You're my forever and always ∞❤️",
    "You make my soul sing 🎶😘",
    "I'm so grateful to have you in my life 🙏❤️",
    "You're my everything 🥰💋",
    "You're the sweetest addiction I've ever had 🤤💖",
    "I love the way you make me feel 🥰❤️",
    "You're my little star ⭐😘",
    "Being in your arms is my favorite place to be 🤗❤️",
    "You're my dream come to life ✨💖",
    "My heart skips a beat whenever you're near 💓💋",
    "You're the sweetest part of my day ☀️❤️",
    "I love you more than words can express ❤️💖😘",
    "You're my perfect match 🥰❤️",
    "You make my world a brighter place 🌟💋",
    "You're the reason I smile so much 😊❤️",
    "I'm head over heels in love with you 🥰💖",
    "You're my little ray of sunshine ☀️😘",
    "Holding your hand feels like home 🤝❤️",
    "You're my fairytale ending 👑💖",
    "My love for you is endless ❤️∞",
    "You're the sweetest surprise in my life 🎉😘",
    "I adore you more than you know 🥰❤️",
    "You're my little cuddly bear 🧸💖",
    "Every love song reminds me of you 🎶💋",
    "You're the sweetest thought in my head 🤔❤️",
    "I'm so smitten with you 🥰💖",
    "You're my little sweet pea 🌱😘",
    "Your love is the best gift I've ever received 🎁❤️",
    "You're my little angel 😇💖",
    "I can't imagine my life without you 🥺💋",
    "You're my little cupcake 🧁❤️", "" +
    "You make my heart flutter 🥰💖",
    "You're my little honeybee 🐝😘",
    "I love you to the moon and back a million times 🌙❤️",
    "You're my little snuggle bunny 🐰💖",
    "You're the sweetest thing my eyes have ever seen 👀💋",
    "You're my little love bug 🐞❤️",
    "My heart melts every time I look at you 🥰💖",
    "You're my little sweetheart 🥰😘",
    "You're everything I've ever wanted and more ❤️✨",
    "You're my little dumpling 🥟💖",
    "I'm so crazy about you 🥰💋",
    "You're my little muffin 🧁❤️",
    "You make my world go round 🌎💖",
    "You're my little sugarplum 🍬😘",
    "I fall more in love with you every day 🥰❤️",
    "You're my little sweetie pie 🥧💖",
    "You're the best part of my day, every day ☀️💋",
    "You're my little cutie patootie 🥰❤️",
    "My heart belongs to you ❤️🔒",
    "You're my little snuggle puff 🥰💖",
    "You're the most adorable person I know 🥰😘",
    "You're my little marshmallow 🍡❤️",
    "I'm so lucky to call you mine 🥰💖",
    "You're my little gummy bear 🐻💋",
    "You make even the toughest days brighter ✨❤️",
    "You're my little jelly bean 🍬💖",
    "I love all your little quirks 🥰😘",
    "You're my little chickadee 🐦❤️",
    "You're my dream come true ✨💖",
    "You're my little firefly ✨💋",
    "You light up my life 💡❤️",
    "You're my little twinkle star ⭐💖",
    "You're the sweetest adventure I've ever embarked on 🗺️😘",
    "You're my little peanut 🥜❤️",
    "I can't wait to spend forever with you ♾️💖",
    "You're my little sunshine drop 💧☀️",
    "You make me feel like the luckiest person alive 🥰❤️",
    "You're my little blossom 🌸💖",
    "You're my everything, my love 🥰💋❤️",
    "You're my little sweet pea pod 🌱💖",
    "I'm so in love with your beautiful soul 🥰❤️",
    "You're my little honey pot 🍯😘",
    "You are my greatest love story ❤️📖💖",
    "You're my little love bug 🐞❤️",
    "My heart melts every time I look at you 🥰💖",
    "You're my little sweetheart 🥰😘",
    "You're everything I've ever wanted and more ❤️✨",
    "You're my little dumpling 🥟💖",
    "I'm so crazy about you 🥰💋",
    "You're my little muffin 🧁❤️",
    "You make my world go round 🌎💖",
    "You're my little sugarplum 🍬😘",
    "I fall more in love with you every day 🥰❤️",
    "You're my little sweetie pie 🥧💖",
    "You're the best part of my day," +
    " every day ☀️💋", "You're my little cutie patootie 🥰❤️",
    "My heart belongs to you ❤️🔒",
    "You're my little snuggle puff 🥰💖",
    "You're the most adorable person I know 🥰😘",
    "You're my little marshmallow 🍡❤️",
    "I'm so lucky to call you mine 🥰💖",
    "You're my little gummy bear 🐻💋",
    "You make even the toughest days brighter ✨❤️",
    "You're my little jelly bean 🍬💖",
    "I love all your little quirks 🥰😘",
    "You're my little chickadee 🐦❤️",
    "You're my dream come true ✨💖",
    "You're my little firefly ✨💋",
    "You light up my life 💡❤️",
    "You're my little twinkle star ⭐💖",
    "You're the sweetest adventure I've ever embarked on 🗺️😘",
    "You're my little peanut 🥜❤️",
    "I can't wait to spend forever with you ♾️💖",
    "You're my little sunshine drop 💧☀️",
    "You make me feel like the luckiest person alive 🥰❤️",
    "You're my little blossom 🌸💖",
    "You're my everything, my love 🥰💋❤️",
    "You're my little sweet pea pod 🌱💖",
    "I'm so in love with your beautiful soul 🥰❤️",
    "You're my little honey pot 🍯😘",
    "You are my greatest love story ❤️📖💖",
    "You're my little love bug 🐞❤️",
    "My heart melts every time I look at you 🥰💖",
    "You're my little sweetheart 🥰😘",
    "You're everything I've ever wanted and more ❤️✨",
    "You're my little dumpling 🥟💖",
    "I'm so crazy about you 🥰💋"
];


const getBackgroundImage = (day) => {
    switch (day % 18) {
        case 1:
            return hearts1;
        case 2:
            return hearts2;
        case 3:
            return hearts3;
        case 4:
            return hearts4;
        case 5:
            return hearts5;
        case 6:
            return hearts6;
        case 7:
            return hearts7;
        case 8:
            return hearts8;
        case 9:
            return hearts9;
        case 10:
            return hearts10;
        case 11:
            return hearts11;
        case 12:
            return hearts12;
        case 13:
            return hearts13;
        case 14:
            return hearts14;
        case 15:
            return hearts15;
        case 16:
            return hearts16;
        case 17:
            return hearts17;
        case 0:
            return hearts18;
        default:
            return hearts18;
    }
};

const styles = {
    root: {
        minHeight: '100vh',
        maxHeight: '100vh',
        minWidth: '100vw',
        maxWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },
    paper: {
        borderRadius: 20,
        padding: '16px',
        elevation: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent white backgrou
    },

    boldText: {
        color: 'white',
        fontWeight: 'bold', // Making the text bold
        letterSpacing: '0.1em', // Adding a little letter spacing for thicker appearance
    },
};

const App = () => {
    const today = new Date();
    const startOfYear = new Date(date.getFullYear(), 0, 1); // January 1st of the same year
    const timeDifference = date - startOfYear;
    const day = (Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1) % messages.length;

    const backgroundImage = getBackgroundImage(today)
    let message = messages[day];
    console.log(day);
    if (!message) {
        message = "შენი თვალების ციმციმი მიყვარს 🤒🥰😘";
    }

    return (
        <div style={{...styles.root, backgroundImage: `url(${backgroundImage})`}}>
            <Paper style={styles.paper}>
                <Typography variant="h6" gutterBottom style={styles.boldText}>
                    გამარჯობათ ლიკუნა
                </Typography>
                <Typography variant="h6" gutterBottom style={styles.boldText}>
                    მე თქვენი შეყვარებული ვარ, კახა
                </Typography>
                <Typography variant="h6" gutterBottom style={styles.boldText}>
                    და თქვენთან მაქვს მესიჯი რომ:
                </Typography>
                <Typography variant="h6" style={styles.boldText}>
                    {message}
                </Typography>
            </Paper>
        </div>
    );
}

export default App;
